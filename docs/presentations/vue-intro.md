---
title: Introduction à Vue.js
theme: moon
---

# Introduction à Vue.js

Un framework JavaScript progressif

---

## Qu'est-ce que Vue.js ?

- Framework JavaScript moderne
- Approche progressive
- Écosystème riche
- Courbe d'apprentissage douce

---

## Avantages de Vue.js

- **Réactivité** : Système de réactivité puissant
- **Composants** : Architecture basée sur les composants
- **Performance** : Virtual DOM optimisé
- **Flexibilité** : S'adapte à tous les projets

---

### Exemple de composant

```vue
<template>
  <div class="hello">
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Bonjour Vue.js!'
    }
  }
}
</script>
