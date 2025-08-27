// .vitepress/theme/index.ts
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Reveal from './components/Reveal.vue'
import SlidesDeck from './components/SlidesDeck.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Reveal', Reveal),
    app.component('SlidesDeck', SlidesDeck)
  }
} satisfies Theme
