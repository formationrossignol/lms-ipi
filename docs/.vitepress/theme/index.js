import DefaultTheme from 'vitepress/theme';
import RevealSlide from './RevealSlide.vue';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('RevealSlide', RevealSlide);
  }
};
