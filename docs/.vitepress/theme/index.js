import DefaultTheme from 'vitepress/theme'
import './custom.css' // Assure-toi que ce fichier existe

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // Ajoute ici des composants globaux si nécessaire
  }
}
