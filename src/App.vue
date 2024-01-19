<script setup>
import { ref, computed } from "vue";
import HomePage from "./views/HomePage.vue";
import ImpressumPage from "./views/ImpressumPage.vue";
import DatenschutzErklaerung from "./views/DatenschutzErklaerung.vue";
import KontaktPage from "./views/KontaktPage.vue";
import NotFound from "./views/NotFound.vue";
import BarriereFreiheitVue from "./views/BarriereFreiheit.vue";

const routes = {
  "/": HomePage,
  "/impressum": ImpressumPage,
  "/datenschutzerklaerung": DatenschutzErklaerung,
  "/kontakt": KontaktPage,
  "/barrierefreiheit": BarriereFreiheitVue
};

const currentPath = ref(window.location.hash);

window.addEventListener("hashchange", () => {
  currentPath.value = window.location.hash;
});

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || "/"] || NotFound;
});
</script>

<template>
  <component :is="currentView" />
</template>
