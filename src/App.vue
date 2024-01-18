<script setup>
import { ref, computed } from 'vue'
import HomePage from './views/HomePage.vue'
import ImpressumPage from './views/ImpressumPage.vue'
import NotFound from './views/NotFound.vue'

const routes = {
  '/': HomePage,
  '/impressum': ImpressumPage
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})
</script>

<template>
  <component :is="currentView" />
</template>
