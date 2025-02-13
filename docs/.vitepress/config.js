export default {
  // Options globales du site
  title: 'VitePress',
  description: 'Une documentation rapide et optimisée.',
  base: '/',
  cleanUrls: true,

  themeConfig: {
    // Navigation principale
    nav: [
      { text: 'Accueil', link: '/' },
      { text: 'Présentation', link: '/presentation' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Blog', link: '/blog/' },
      { text: 'Contact', link: '/contact' }
    ],

    // Barre latérale (Sidebar)
    sidebar: {
      '/': [
        { text: 'Accueil', link: '/' },
        { text: 'Présentation', link: '/presentation' },
        { text: 'Guide', link: '/guide/' },
        { text: 'FAQ', link: '/faq/' }
      ],
      '/guide/': [
        { text: 'Introduction', link: '/guide/' },
        { text: 'Installation', link: '/guide/installation' },
        { text: 'Configuration', link: '/guide/configuration' }
      ]
    },

    // Recherche intégrée
    search: {
      provider: 'local'
    },

    // Personnalisation du design
    appearance: true, // Active le mode clair/sombre automatique
    logo: '/logo.png',
    siteTitle: 'VitePress Custom',

    // Pied de page
    footer: {
      message: 'Publié sous licence MIT.',
      copyright: '© 2025 VitePress. Tous droits réservés.'
    },

    // Liens sociaux
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vitepress' },
      { icon: 'twitter', link: 'https://twitter.com/vitepress' }
    ],

    // Ajout des breadcrumbs
    docFooter: {
      prev: 'Page précédente',
      next: 'Page suivante'
    }
  },

  // SEO et métadonnées
  head: [
    ['meta', { name: 'keywords', content: 'vitepress, documentation, guide' }],
    ['meta', { name: 'author', content: 'Votre Nom' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'stylesheet', href: '/custom.css' }],
        ['script', { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-7JLS1DFF18' }],
    [
      'script',
      {},
      `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'G-7JLS1DFF18');
      `
    ]
  ]
}
