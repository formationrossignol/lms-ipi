import DefaultTheme from 'vitepress/theme'
import RevealSlides from '../components/RevealSlides.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('RevealSlides', RevealSlides)
  }
}
