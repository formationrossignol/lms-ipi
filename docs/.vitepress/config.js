import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Mes Présentations',
  description: 'Présentations avec VitePress et Reveal.js',
  base: '/',
  
  themeConfig: {
    nav: [
      { text: 'Accueil', link: '/' },
      { text: 'Présentations', link: '/presentations/' }
    ],
    
    sidebar: {
      '/presentations/': [
        {
          text: 'Présentations',
          items: [
            { text: 'Introduction à Vue.js', link: '/presentations/vue-intro' },
            { text: 'JavaScript Moderne', link: '/presentations/js-moderne' }
          ]
        }
      ]
    }
  },
  
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.includes('-')
      }
    }
  }
})
