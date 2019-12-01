const data = [
  {
    name: 'Git',
    years: {
      start: 2005
    },
    group: 'Git',
    links: [
      {
        name: 'contributors',
        url: 'https://github.com/git/git/graphs/contributors'
      }
    ]
  },
  {
    name: 'GitHub',
    years: {
      start: 2008
    },
    group: 'Git',
    links: [
      {
        name: 'intro',
        url: 'https://github.blog/2008-04-10-we-launched/'
      }
    ]
  },
  {
    name: 'Node.js',
    years: {
      start: 2009
    },
    group: 'Node',
    links: [
      {
        name: 'changelog',
        url: 'https://github.com/nodejs/node/blob/master/CHANGELOG.md'
      }
    ]
  },
  {
    name: 'Npm',
    years: {
      start: 2010
    },
    group: 'Node',
    links: [
      {
        name: 'contributors',
        url: 'https://github.com/npm/cli/graphs/contributors), [releases](https://github.com/npm/npm/releases?after=v0.1.1'
      }
    ]
  },
  {
    name: 'Caniuse',
    years: {
      start: 2012
    },
    group: 'Features detection',
    links: [
      {
        name: 'contributors',
        url: 'https://github.com/Fyrd/caniuse/graphs/contributors'
      }
    ]
  },
  {
    name: 'Autoprefixer',
    years: {
      start: 2013
    },
    group: 'Features detection',
    links: [
      {
        name: 'css-tricks',
        url: 'https://css-tricks.com/autoprefixer/'
      }
    ]
  },
  {
    name: 'Grunt',
    years: {
      start: 2011
    },
    group: 'Automating',
    links: [
      {
        name: 'contributors',
        url: 'https://github.com/gruntjs/grunt/graphs/contributors',
      },
      {
        name: 'intro',
        url: 'https://bocoup.com/blog/introducing-grunt'
      }
    ]
  },
  {
    name: 'Gulp',
    years: {
      start: 2013
    },
    group: 'Automating',
    links: [
      {
        name: 'contributors',
        url: 'https://github.com/gulpjs/gulp/graphs/contributors'
      }
    ]
  },
  {
    name: 'Webpack',
    years: {
      start: 2012
    },
    group: 'Automating',
    links: [
      {
        name: 'contributors',
        url: 'https://github.com/webpack/webpack/graphs/contributors'
      }
    ]
  },
  {
    name: 'Bootstrap',
    years: {
      start: 2011
    },
    group: 'Tools',
    links: [
      {
        name: 'contributors',
        url: 'https://github.com/twbs/bootstrap/graphs/contributors'
      }
    ]
  },
  {
    name: 'Compass',
    years: {
      start: 2008,
      end: 2014
    },
    group: 'Tools',
    links: [
      {
        name: 'contributors',
        url: 'https://github.com/Compass/compass/graphs/contributors'
      },
      {
        name: 'last release',
        url: 'http://compass-style.org/blog/'
      }
    ]
  },
  {
    name: 'Eslint',
    years: {
      start: 2013
    },
    group: 'Linters',
    links: [
      {
        name: 'contributors',
        url: 'https://github.com/eslint/eslint/graphs/contributors'
      }
    ]
  },
  {
    name: 'Styleslint',
    years: {
      start: 2014
    },
    group: 'Linters',
    links: [
      {
        name: 'contributors',
        url: 'https://github.com/stylelint/stylelint/graphs/contributors'
      }
    ]
  },
  {
      name: 'Editorconfig',
      years: {
        start: 2012
      },
      group: 'Linters',
      links: [
        {
          name: 'contributors',
          url: 'https://github.com/editorconfig/editorconfig/graphs/contributors'
        }
      ]
  },
  {
    name: 'Font-face',
    years: {
      start: 2008
    },
    group: 'Fonts',
    links: [
      {
        name: 'caniuse',
        url: 'https://caniuse.com/#feat=fontface'
      }
    ]
  },
  {
    name: 'Google Fonts',
    years: {
      start: 2010
    },
    group: 'Fonts',
    links: [
      {
        name: 'intro',
        url: 'http://googlecode.blogspot.com/2010/05/introducing-google-font-api-google-font.html'
      }
    ]
  },
  {
    name: 'Font Awesome',
    years: {
      start: 2012
    },
    group: 'Fonts',
    links: [
      {
        name: 'releases',
        url: 'https://github.com/FortAwesome/Font-Awesome/releases?after=v3.2.0'
      }
    ]
  },
  {
    name: 'Sass',
    years: {
      start: 2006
    },
    group: 'CSS preprocessors',
    links: [
      {
        name: 'contributors',
        url: 'https://github.com/sass/ruby-sass/graphs/contributors'
      }
    ]
  },
  {
    name: 'Less',
    years: {
      start: 2009
    },
    group: 'CSS preprocessors',
    links: [
      {
        name: 'less history',
        url: 'http://lesscss.org/about/#history'
      }
    ]
  },
  {
    name: 'Stylus',
    years: {
      start: 2010
    },
    group: 'CSS preprocessors',
    links: [
      {
        name: 'contributors',
        url: 'https://github.com/stylus/stylus/graphs/contributors'
      }
    ]
  },
  {
    name: 'Custom Properties',
    years: {
      start: 2014
    },
    group: 'CSS',
    links: [
      {
        name: 'caniuse',
        url: 'https://caniuse.com/#feat=css-variables'
      }
    ]
  },
  {
    name: 'Zen Coding',
    years: {
      start: 2009,
      end: 2013
    },
    group: 'CSS editors tools',
    links: [
      {
        name: 'smashing',
        url: 'https://www.smashingmagazine.com/2009/11/zen-coding-a-new-way-to-write-html-code/'
      }
    ]
  },
  {
    name: 'Emmet',
    years: {
      start: 2012
    },
    group: 'CSS editors tools',
    links: [
      {
        name: 'smashing',
        url: 'https://www.smashingmagazine.com/2013/03/goodbye-zen-coding-hello-emmet/) '
      },
      {
        name: 'github',
        url: 'https://github.com/sergeche/zen-coding'
      }
    ]
  },
  {
    name: 'Hayaku',
    years: {
      start: 2012
    },
    group: 'CSS editors tools',
    links: [
      {
        name: 'habr',
        url: 'https://habr.com/ru/post/160057/'
      }
    ]
  },
  {
    name: 'JQuery',
    years: {
      start: 2006
    },
    group: 'JS',
    links: [
      {
        name: 'history',
        url: 'https://jquery.org/history/'
      }
    ]
  },
  {
    name: 'SVG',
    years: {
      start: 2010
    },
    group: 'Markup',
    links: [
      {
        name: 'caniuse',
        url: 'https://caniuse.com/#search=svg'
      }
    ]
  },
  {
    name: 'HTML5',
    years: {
      start: 2014
    },
    group: 'Markup',
    links: [
      {
        name: 'intro',
        url: 'https://www.w3.org/2014/10/html5-rec.html.en'
      }
    ]
  },
  {
    name: 'Border-radius without prefixes',
    years: {
      start: 2010
    },
    group: 'CSS',
    links: [
       {
        name: 'caniuse',
        url: 'https://caniuse.com/#feat=border-radius'
       }
    ]
  },
  {
    name: 'Gradients without prefixes',
    years: {
      start: 2013
    },
    group: 'CSS',
    links: [
     {
      name: 'caniuse',
      url: 'https://caniuse.com/#feat=mdn-css_types_image_gradient_linear-gradient'
     }
    ]
  },
  {
    name: 'Box-shadow without prefixes',
    years: {
      start: 2011
    },
    group: 'CSS',
    links: [
      {
        name: 'caniuse',
        url: 'https://caniuse.com/#feat=css-boxshadow'
      }
    ]
  },
  {
    name: 'Flex without prefixes',
    years: {
      start: '2015'
    },
    group: 'CSS',
    links: [
      {
        name: 'caniuse',
        url: 'https://caniuse.com/#feat=flexbox'
      }
    ]
  },
];
