
module.exports = {
  title: 'D B C',
  tagline: '',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'fmmMelo', // Usually your GitHub org/user name.
  projectName: 'website---DBC-', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'D B C',
      logo: {
        alt: ' Logo DBC',
        src: 'img/logo.svg',
      },
      links: [
        {to: 'docs/introduct', label: 'Documentação', position: 'right'},
        {to: 'blog', label: 'Blog', position: 'right'},
        {href:'https://dbcteste.groupanic.net', label: 'Comunidade', position: 'right'},
        {
          to: '',
          alt: 'Modo daltonismo',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentação',
          items: [
            {
              label: 'Documentação',
              to: 'docs/introduct',
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
      logo: {
        
      },
      copyright: `Copyright © ${new Date().getFullYear()} Felipe Melo.`,
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
