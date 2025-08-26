<template>
  <div class="reveal-container">
    <div class="reveal" ref="revealRef">
      <div class="slides" v-html="processedContent"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Reveal from 'reveal.js'
import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/white.css'

const props = defineProps({
  content: {
    type: String,
    required: true
  },
  theme: {
    type: String,
    default: 'white'
  }
})

const revealRef = ref(null)
let reveal = null

const processedContent = computed(() => {
  // Convertir le markdown en slides Reveal.js
  return props.content
    .split('---')
    .map(slide => `<section>${slide.trim()}</section>`)
    .join('')
})

onMounted(async () => {
  // Charger le thème dynamiquement
  if (props.theme !== 'white') {
    await import(`reveal.js/dist/theme/${props.theme}.css`)
  }
  
  reveal = new Reveal(revealRef.value, {
    hash: true,
    controls: true,
    progress: true,
    center: true,
    transition: 'slide',
    backgroundTransition: 'fade'
  })
  
  await reveal.initialize()
})

onUnmounted(() => {
  if (reveal) {
    reveal.destroy()
  }
})
</script>

<style scoped>
.reveal-container {
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background: white;
}
</style>
