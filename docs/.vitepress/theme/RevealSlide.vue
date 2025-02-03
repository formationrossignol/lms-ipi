<script setup>
import { onMounted, ref } from 'vue';
import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import 'reveal.js/dist/reveal.css';
//import 'reveal.js/dist/theme/black.css';
import './custom-reveal.css';

// Propriétés du composant
const props = defineProps({
  markdownPath: {
    type: String,
    required: true
  }
});

// Contenu Markdown
const markdownContent = ref('');
const revealContainer = ref(null);

// Charger le fichier Markdown
const loadMarkdown = async () => {
  try {
    const response = await fetch(props.markdownPath);
    if (!response.ok) throw new Error("Erreur de chargement du fichier Markdown");
    markdownContent.value = await response.text();
  } catch (error) {
    console.error("Erreur lors du chargement du fichier Markdown :", error);
  }
};

// Initialiser Reveal.js après le chargement du Markdown
onMounted(async () => {
  await loadMarkdown();

  let deck = new Reveal({
    plugins: [Markdown],
    width: "90%", // Augmente la largeur des slides
    height: "100%",
    margin: 0.05, // Réduction de la marge pour maximiser l'espace
    minScale: 0.5,
    maxScale: 1.5,
    transition: "slide",
    slideNumber: true,
    controls: true
  });

  deck.initialize();
});

// Fonction pour activer le mode plein écran
const toggleFullScreen = () => {
  if (!document.fullscreenElement) {
    revealContainer.value.requestFullscreen().catch(err => {
      console.error("Erreur en activant le mode plein écran:", err);
    });
  } else {
    document.exitFullscreen();
  }
};
</script>

<template>
  <div class="reveal-container">
    <div ref="revealContainer" class="reveal">
      <div class="slides">
        <section v-if="markdownContent" data-markdown v-html="markdownContent"></section>
        <section v-else>
          <p>Chargement des slides...</p>
        </section>
      </div>
    </div>
    <!-- Bouton plein écran en bas à gauche, à côté des flèches de navigation -->
    <button class="fullscreen-btn" @click="toggleFullScreen">🖥️</button>
  </div>
</template>

<style scoped>
/* Conteneur principal pour s'assurer que du contenu peut être placé en dessous */
.reveal-container {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-bottom: 40px; /* Ajout d'un espace en bas */
}

/* Augmenter la largeur des slides */
.reveal {
  width: 90%;
  max-width: 1400px; /* Largeur max pour éviter trop d'étirement */
  height: 600px; /* Augmenter la hauteur des slides */
  position: relative;
}

/* Bouton plein écran positionné en bas à gauche, à côté des flèches */
.fullscreen-btn {
  position: absolute;
  bottom: 10px;
  left: 10px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  padding: 8px 12px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
}

.fullscreen-btn:hover {
  background: rgba(0, 0, 0, 0.8);
}
</style>
