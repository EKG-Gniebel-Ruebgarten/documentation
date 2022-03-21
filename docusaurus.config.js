// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Dokumentation',
  url: 'https://doku.ekg-gniebel-ruebgarten.de',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'EKG-Gniebel-Ruebgarten', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/EKG-Gniebel-Ruebgarten/documentation/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        language: "de"
      },
    ],
    'plugin-image-zoom'
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Dokumentation',
        logo: {
          alt: 'EKG Gniebel Rübgarten Logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo_dark.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'website/index',
            position: 'left',
            label: 'Website bearbeiten',
          },
          {
            href: 'https://ekg-gniebel-ruebgarten.de',
            label: 'Zur Website',
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
                label: 'Website bearbeiten',
                to: '/docs/website',
              },
            ],
          },
          {
            title: 'Rechtliches',
            items: [
              {
                label: 'Impressum',
                href: 'https://ekg-gniebel-ruebgarten.de/impressum',
              }
            ],
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} EKG Gniebel Rübgarten.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  i18n: {
    defaultLocale: 'de',
  }
};

module.exports = config;
