/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: 'Drone de Baixo Custo',
  tagline: 'Seja bem-vindo ao nosso website',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'fmmMelo', // Usually your GitHub org/user name.
  projectName: 'website-DronedeBaixoCusto', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Drone de Baixo Custo',
      logo: {
        alt: 'Logo DBC',
        src: 'img/logo.svg',
      },
      links: [
        {to: 'docs/doc1', label: 'Documentação', position: 'right'},
        {to: 'blog', label: 'Blog', position: 'right'},
        {href: 'https://dbcteste.groupanic.net', label: 'Comunidade', position: 'right'},
        {href: 'https://github.com/fmmMelo/website-dronedebaixocusto', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Manual',
          items: [
            {
              label: 'Documentação',
              to: 'docs/doc1',
            },
          ],
        },
        {
          title: 'Comunidade',
          items: [
            {
              label: 'Forúm',
              href: 'https://dbcteste.groupanic.net',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} DBC, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
