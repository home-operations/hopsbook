import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Hopsbook",
  description: "An open-source guide to getting started with homelabbing.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/YV2u5Rt5V9' },
      { icon: 'github', link: 'https://github.com/home-operations/hopsbook' }
    ],
    editLink: {
      pattern: 'https://github.com/home-operations/hopsbook/edit/main/content/:path',
      text: 'Modify this page on Github',
    },
    footer: {
      copyright: 'Licensed under CC-BY-NA-SA-4.0'
    },
    externalLinkIcon: true
  }
})
