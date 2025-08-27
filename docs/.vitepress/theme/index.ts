// .vitepress/theme/index.ts
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Reveal from './components/Reveal.vue'
import SlidesDeck from 'components/SlidesDeck.vue'
import ExternalIframe from 'components/ExternalIframe.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Reveal', Reveal),
    app.component('SlidesDeck', SlidesDeck)
    app.component('ExternalIframe', ExternalIframe)
  }
} satisfies Theme
