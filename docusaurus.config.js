/* eslint-disable @typescript-eslint/no-var-requires */
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const lightCodeTheme = require('prism-react-renderer/themes/github');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: 'FlashPixel',
    tagline:
      'The best image upload tool',
    url: 'https://docsearch.algolia.com',
    baseUrl: '/',
    favicon: 'img/favicon.ico',
    organizationName: 'FlashPixel',
    projectName: 'FlashPixelDocs',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'throw',
    presets: [
      [
        '@docusaurus/preset-classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            path: 'docs',
            sidebarPath: 'sidebars.js',
            editUrl:
              'https://github.com/algolia/docsearch/edit/main/packages/website/',
            lastVersion: 'current',
            showLastUpdateAuthor: false,
            showLastUpdateTime: false,
          },
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
        }),
      ],
    ],
    plugins: ['my-loaders', 'tailwind-loader'],
    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        navbar: {
          hideOnScroll: true,
          logo: {
            alt: 'FlashPixel',
            src: 'img/assets/icon-512.png',
            srcDark: 'img/assets/icon-512.png',
          },
          items: [
            // left
            {
              label: 'FlashPixel',
              to: '/',
              position: 'left'
            },
            {
              label: '文档',
              to: 'docs/intro',
              position: 'left',
            },
            {
              label: '反馈',
              to: 'https://wenjuan.feishu.cn/m?t=s8ogkMqFJQGi-2u0r',
              position: 'left',
            },
            // right
            // {
            //   href: 'https://github.com/algolia/docsearch',
            //   position: 'right',
            //   className: 'header-github-link',
            // },
          ],
        },
        colorMode: {
          defaultMode: 'light',
          disableSwitch: false,
          respectPrefersColorScheme: true,
        },
        footer: {
          // links: [
          //   {
          //     title: 'DocSearch',
          //     items: [
          //       {
          //         label: 'Apply',
          //         to: 'apply',
          //       },
          //       {
          //         label: 'Issues',
          //         to: 'https://github.com/algolia/docsearch/issues',
          //       },
          //       {
          //         label: 'Privacy',
          //         to: 'https://www.algolia.com/policies/privacy/',
          //       },
          //     ],
          //   },
          //   {
          //     title: 'Community',
          //     items: [
          //       {
          //         label: 'Forum',
          //         to: 'https://discourse.algolia.com/tags/docsearch',
          //       },
          //       {
          //         label: 'Discord',
          //         to: 'https://discord.com/invite/bRTacwYrfX',
          //       },
          //     ],
          //   },
          //   {
          //     title: 'Social',
          //     items: [
          //       {
          //         label: 'GitHub',
          //         to: 'https://github.com/algolia/docsearch',
          //       },
          //       {
          //         label: 'Twitter',
          //         to: 'https://twitter.com/docsearch_',
          //       },
          //       {
          //         label: 'Algolia Blog',
          //         to: 'https://algolia.com/blog/',
          //       },
          //     ],
          //   },
          // ],
          // logo: {
          //   alt: 'FlashPixel',
          //   src: 'img/assets/icon-512.png',
          // },
          // copyright: 'FlashPixel 2022',
        },
        image: 'img/og_image.png',
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
  }
);
