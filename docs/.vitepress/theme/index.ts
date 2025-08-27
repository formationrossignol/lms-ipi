// .vitepress/theme/index.ts
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import ExternalIframe from './components/ExternalIframe.vue'
import Reveal from './components/Reveal.vue'
import SlidesDeck from './components/SlidesDeck.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ExternalIframe', ExternalIframe),
    app.component('Reveal', Reveal),
    app.component('SlidesDeck', SlidesDeck)
  }
} satisfies Theme
