// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const EIDE_NAME = 'Embedded IDE';
const SITE_TITLE = 'EIDE DOCS';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: SITE_TITLE,
  tagline: 'document for embedded ide',
  url: 'https://github.com/github0null/eide-docs',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://em-ide.com/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'github0null', // Usually your GitHub org/user name.
  projectName: 'eide-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-cn'],
    localeConfigs: {
      'zh-cn': {
        htmlLang: 'zh',
      }
    }
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
          editUrl:
            'https://github.com/github0null/eide-docs/tree/master',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/github0null/eide-docs/tree/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: EIDE_NAME,
        items: [
          {
            type: 'localeDropdown',
            position: 'left',
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          /* {
            to: '/blog', label: 'Blog', position: 'left'
          }, */
          {
            href: 'https://github.com/github0null/eide-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Github Discussions',
                href: 'https://github.com/github0null/eide/discussions',
              },
              {
                label: 'EIDE Forum',
                href: 'https://discuss.em-ide.com',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Embedded IDE',
                href: 'https://github.com/github0null/eide',
              },
              {
                label: 'Obsolete Docs',
                href: 'https://em-ide.com/docs/eide-manual',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} github0null.io`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
