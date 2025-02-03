import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Mon Site VitePress',
  description: 'Documentation avec VitePress',  
  base: './',
  themeConfig: {
    sidebar: [
      { text: 'Home', link: '/' },
      { text: 'Presentation', link: '/presentation' }
    ]
  }
})
