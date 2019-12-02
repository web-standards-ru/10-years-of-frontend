(function(){
  data.sort(sortByYearStart)

  const dataWidgetTmpl = document.querySelector('#data-widget-tmpl');
  const sectionByDate = document.querySelector('.section--by-date');
  const sectionByGroup = document.querySelector('.section--by-group');
  const navGroups = document.querySelectorAll('.nav-group');

  const years = {
    start: 2005,
    end: 2019,
  };

  const cols = years.end - years.start + 1;
  document.documentElement.style.setProperty('--cols', cols );

  fillListByDate(data);
  fillListByGroup(data);

  navGroups.forEach(navGroup => {
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

  function fillYears(listElem) {
    for(let i = years.start; i <= years.end; i++ ) {
      const liElem = document.createElement('li');
      liElem.classList.add('list-years__item');
      liElem.innerHTML = i;
      listElem.appendChild(liElem);
    }
  }

  //----------------------------------------

  function addDataWidget({widgetData, widgetName, widgetId, sectionElem}) {
    const widgetElem = dataWidgetTmpl.content.cloneNode(true);
    const listYearsElem = widgetElem.querySelector('.list-years');
    const listDataElem = widgetElem.querySelector('.list-data');

    fillYears(listYearsElem);

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
      listDataElem
    });

    const widgetAdded = sectionElem.appendChild(widgetElem);
    console.log(widgetAdded);
  }

  //----------------------------------------

  function fillListByDate(widgetData) {
    addDataWidget({
      widgetData,
      sectionElem: sectionByDate
    });
  }

  //----------------------------------------

  function fillListByGroup(data) {
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

  function fillList({widgetData, listDataElem}) {
    widgetData.forEach((item, index) => {
      const liElem = document.createElement('li');
      liElem.classList.add('list-data__item');
      liElem.classList.add(`type-${item.group}`);
      const liElemTitle = document.createElement('h3');
      const itemYears = item.years ? item.years.start : '';

      liElemTitle.innerHTML = `${item.name} ${itemYears}`;

      const itemLinksList = getItemLinksList(item.links);

      let colEnd = cols + 1;

      liElem.appendChild(liElemTitle);
      liElem.appendChild(itemLinksList);
      listDataElem.appendChild(liElem);

      listDataElem.style.setProperty('--rows', widgetData.length);

      if(item.years) {
        liElem.style.setProperty('--col-start', item.years.start - years.start + 1);

        if(item.years.end) {
          colEnd = item.years.end - years.start + 2;
        }

        liElem.style.setProperty('--col-end', colEnd);
      }

      liElem.style.setProperty('--row-start', index + 1);
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

    map.forEach((val, key, index) => {
      const controlElem = createControl({val, key});

      navGroup.appendChild(controlElem);
    });

    const controlElem = createControl(
      {
        val: {
          name: 'Reset'
        },
        key: 'reset'
      },
    );

    navGroup.appendChild(controlElem);
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
