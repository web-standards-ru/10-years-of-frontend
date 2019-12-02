(function(){
  data.sort(sortByYearStart)

  const dataWidgetTmpl = document.querySelector('#data-widget-tmpl');
  const sectionByDate = document.querySelector('.section--by-date');
  const sectionByGroup = document.querySelector('.section--by-group');
  const navGroups = document.querySelectorAll('.nav-group');
  const lists = {};

  const years = {
    start: 2005,
    end: 2019,
  };

  const cols = years.end - years.start + 1;
  document.documentElement.style.setProperty('--cols', cols );

  fillListByDate({data, listId: 'by-date'});
  fillListByGroup({data});

  navGroups.forEach(navGroup => {
    let isShown = true;
    fillNavGroup(navGroup);
  });

  addNavActions();

  //----------------------------------------

  function sortByYearStart(a, b) {
    if(!a.years) {
      return 0;
    }

    return a.years.start - b.years.start;
  }

  function sortByName(a, b) {
    if(a.name > b.name) {
      return 1;
    }
    if(a.name < b.name) {
      return -1;
    }
    return 0;
  }

  //----------------------------------------

  function fillYears({listYearsElem, listId}) {
    for(let i = years.start; i <= years.end; i++ ) {
      const liElem = document.createElement('li');
      liElem.classList.add('list-years__item');

      if(listId !== 'by-date') {
        liElem.innerHTML = i;
        listYearsElem.appendChild(liElem);
        continue;
      }

      const buttonElem = document.createElement('button');
      buttonElem.classList.add('button');
      buttonElem.innerHTML = i;
      buttonElem.type = 'button';
      liElem.appendChild(buttonElem);
      listYearsElem.appendChild(liElem);

      buttonElem.addEventListener('click',() => {
        lists['by-date'].forEach(item => {
          const year = +item.dataset.year;

          if (year <= i) {
            item.classList.remove('list-data__item--disabled');
          }
          else {
            item.classList.add('list-data__item--disabled');
          }
        })
      });
    }
  }

  //----------------------------------------

  function addDataWidget({widgetData, widgetName, widgetId, sectionElem, listId}) {
    const widgetElem = dataWidgetTmpl.content.cloneNode(true);
    const listYearsElem = widgetElem.querySelector('.list-years');
    const listDataElem = widgetElem.querySelector('.list-data');
    fillYears({listYearsElem, listId});

    if(widgetName) {
      const titleElem = document.createElement('h3');
      titleElem.classList.add('data-widget__title');
      titleElem.innerHTML = widgetName;
      listYearsElem.parentNode.insertBefore(titleElem, listYearsElem);

      // Need to add it to wodgetElem but it doesn't work
      titleElem.parentNode.id = widgetId;
    }

    fillList({
      widgetData,
      listDataElem,
      listId
    });

    const widgetAdded = sectionElem.appendChild(widgetElem);
  }

  //----------------------------------------

  function fillListByDate({data, listId}) {
    addDataWidget({
      widgetData: data,
      sectionElem: sectionByDate,
      listId
    });
  }

  //----------------------------------------

  function fillListByGroup({data}) {
    const groups = getGroupsList(data);

    groups.forEach(item => {
      addDataWidget({
        widgetId: item.id,
        widgetName: item.name,
        widgetData: item.data,
        sectionElem: sectionByGroup
      });
    });
  }

  //----------------------------------------

  function fillList({widgetData, listDataElem, listId}) {
    lists[listId] = [];

    widgetData.forEach((item, index) => {
      const liElem = document.createElement('li');
      liElem.classList.add('list-data__item');
      liElem.classList.add(`type-${item.group}`);
      liElem.dataset.year = item.years.start;
      const liElemTitle = document.createElement('h3');
      const itemYears = item.years ? item.years.start : '';

      liElemTitle.innerHTML = `${item.name} ${itemYears}`;

      const itemLinksList = getItemLinksList(item.links);

      const groupElem = document.createElement('span');
      groupElem.classList.add('group-name');
      groupElem.innerHTML = groupsData[item.group].name;

      liElem.appendChild(liElemTitle);
      liElem.appendChild(itemLinksList);
      liElem.appendChild(groupElem);

      listDataElem.appendChild(liElem);

      listDataElem.style.setProperty('--rows', widgetData.length);

      if(item.years) {
        let colEnd = cols + 1;

        liElem.style.setProperty('--col-start', item.years.start - years.start + 1);

        if(item.years.end) {
          colEnd = item.years.end - years.start + 2;
        }

        liElem.style.setProperty('--col-end', colEnd);
      }

      liElem.style.setProperty('--row-start', index + 1);

      lists[listId].push(liElem);
    });
  }

  //----------------------------------------

  function getGroupsList(data) {
    const groups = data.reduce((prev, item) => {
      if(!prev[item.group]) {
        prev[item.group] = {
          id: item.group,
          name: groupsData[item.group].name,
          data: []
        };
      }

      prev[item.group].data.push(item);

      return prev;
    }, {});

    const groupsList = Object.values(groups);
    groupsList.sort(sortByName);

    return groupsList;
  }

  //----------------------------------------

  function getItemLinksList(linksList){
    const listElem = document.createElement('ul');
    listElem.classList.add('list-links');

    linksList.forEach(item => {
      const liElem = document.createElement('li');
      liElem.classList.add('list-links__item');
      const linkElem = document.createElement('a');
      linkElem.href = item.url;
      linkElem.innerHTML = item.name;

      liElem.appendChild(linkElem);
      listElem.appendChild(liElem);
    });

    return listElem;
  }
  //----------------------------------------

  function addNavActions(){
    const navControls = document.querySelectorAll('.nav__control');
    const classes = {
      navCurrent: 'nav__control--current',
      secHidden: 'section--hidden'
    };

    currentControl = navControls[0];
    currentControl.classList.add(classes.navCurrent);

    navControls.forEach(item => {
      const targetClass = item.dataset.target;
      const sections = document.querySelectorAll('.section');
      sections[1].classList.add(classes.secHidden);

      item.addEventListener('click', () => {
        currentControl.classList.remove(classes.navCurrent);
        currentControl = item;
        currentControl.classList.add(classes.navCurrent);

        sections.forEach(section => {
          if (section.classList.contains(targetClass)) {
            section.classList.remove(classes.secHidden);
          }
          else {
            section.classList.add(classes.secHidden);
          }
        })
      })
    })
  }

  //----------------------------------------

  function fillNavGroup(navGroup) {
    const map = new Map(Object.entries(groupsData));
    // need to be fixed later
    const siblingDataWidget = navGroup.parentNode.nextElementSibling;
    siblingDataWidget.classList.add(...map.keys());

    const extendedMap = new Map(map);

    extendedMap.set('select-all', {
      name: 'Select all'
    });
    extendedMap.set('unselect-all', {
      name: 'Unselect all'
    });

    extendedMap.forEach((val, key, index) => {
      const controlElem = createControl({val, key});
      let isDisabled = false;

      controlElem.addEventListener('click', () => {
        if(map.has(key)) {
          lists['by-date'].forEach(item => {
            if (item.classList.contains(`type-${key}`)) {
              item.classList.toggle('list-data__item--disabled');
            }
          })
        }
        else if (key === 'select-all') {
          lists['by-date'].forEach(item => {
            item.classList.remove('list-data__item--disabled');
          })
        }
        else if (key === 'unselect-all') {
          lists['by-date'].forEach(item => {
            item.classList.add('list-data__item--disabled');
          })
        }
      })

      navGroup.appendChild(controlElem);
    });
  }

  //----------------------------------------

  function createControl({val, key}) {
    const controlElem = document.createElement('button');
    controlElem.dataset.target = key;
    controlElem.classList.add('nav-group__control');
    controlElem.classList.add('button');
    controlElem.classList.add(`type-${key}`);
    controlElem.innerHTML = val.name;
    controlElem.type = 'button';

    return controlElem;
  }

  //----------------------------------------

})();
