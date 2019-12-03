# More than 10 years of frontend

Новые события добавляются в `data.js` в следующем формате:

```js
{
  name: 'Git',
  years: {
    start: 2005,
    end: 2015, // если есть
  },
  group: 'git',
  links: [
    {
      name: 'contributors',
      url: 'https://github.com/git/git/graphs/contributors'
    }
  ]
}
```

* Для CSS-свойства указывается год, когда большинство современных браузеров поддерживало его без префикса.
* Для всех остальных – дата релиза или начало работы (по логам или коммитам)
