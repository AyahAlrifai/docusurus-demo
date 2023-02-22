const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'BluLogix Documentation ', // show in home
  tagline: 'Lets go to...', // show in home
  favicon: 'img/blulogix.png', 
  url: 'http://192.168.1.85/',

  baseUrl: '/',
  organizationName: 'blulogix',
  projectName: 'blulogox documentation',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/blulogix.png',
      navbar: {
        style:"primary", // same as primary color
        title: 'Home', // first page allways read pages/index.js
        logo: {
          alt: 'My Site Logo',
          src: 'img/blulogix.png',
          // style:{boxShadow:'1px 1px 5px #777777aa'}
        },
        items: [
          {
            type: 'doc',
            docId: 'ayah-documentations/basic-syntax',
            position: 'left',
            label: 'Documentation',
          },{
            to: 'create-new-document', // to specific url
            position: 'left',
            label: 'create new document',
          },{
            type:"dropdown",
            label:"dropdown list",
            position:"left",
            items:[
              {
                type:"doc",
                label:"SDK - Grid",
                docId:"sdk-documentation/grid",
              },{
                to: 'create-new-document',
                label: 'create new document',
              },{
                to: 'markdown-page',
                label: 'Markdown Page',
              }
            ]
          }
          // ,{
          //   type:"search",
          //   position:'right'
          // }
          // , {
          //   type:"html",
          //   position:"right",
          //   value:"<p style='text-shadow: 5px 5px 5px #777777; font-size:20px'> ayah alrifai </p>"
          // }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Auther',
            items: [
              {
                label: 'Ayah Alrifai',
                href: 'https://www.linkedin.com/in/ayah-alrefai-may1997/',
              },
            ],
          },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/docusaurus',
          //     },
          //   ],
          // },
          // {
          //   title: 'More',
          //   items: [
          //     {
          //       label: 'Blog',
          //       to: '/blog',
          //     },
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/facebook/docusaurus',
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} BluLogix`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
