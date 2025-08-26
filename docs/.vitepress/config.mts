import { defineConfig } from 'vitepress'
import sidebar from './sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Formation DevOps",
  description: "Plateforme de formation DevOps",
  srcExclude: ['public/**/*.md'],
  ignoreDeadLinks: [
    /^https?:\/\/localhost:*/,
  ],
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['link', { rel: 'icon', href: '/icons/icon-72x72.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3e80af' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3e80af' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#3e80af' }],
    ['meta', { name: 'google-site-verification', content: 'IpzGtrtih2KT0f0XkFOsx0qHPBihE6JADKtXpO-KN-4' }],
    ['script', { src: '/webllm/main.js', type: 'module' }],
    [
      'script',
      { src: '' },
    ],
    [
      'script',
      {},
      "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-8EFZPGCSXK');"
    ]
  ],
  lang: 'fr-FR',
  markdown: {
    lineNumbers: true,
    image: {
      lazyLoading: true
    }
  },
  lastUpdated: true,
  themeConfig: {
    search: {
      provider: 'local'
    },

    editLink: {
      pattern: 'https://github.com/c4software/bts-sio/tree/master/:path'
    },

    nav: [
      { text: 'Accueil', link: '/' }
    ],

    lastUpdatedText: 'Mis à jour le',

    sidebar: sidebar,
    logo: '/icons/icon-192x192.png',

    outline: {
      label: "Sommaire"
    },

    docFooter: {
      prev: false,
      next: false
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/formationrossignol/lms-ipi/tree/main' },
    ]
  }
})
