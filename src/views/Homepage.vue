<template>
  <div class="wrapper">
    <TopView></TopView>
    <div class="content">
      <SteckbriefComponent></SteckbriefComponent>
      <balken-diagram></balken-diagram>
    </div>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import BalkenDiagram from "@/components/BalkenDiagram.vue";
import FooterComponent from "../components/FooterComponent.vue";
import SteckbriefComponent from "../components/SteckbriefComponent.vue";
import TopView from "../components/TopView.vue";
export default {
  components: {
    FooterComponent,
    BalkenDiagram,
    SteckbriefComponent,
    TopView,
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  padding: 1rem;
}
.content {
  display: flex;
}
</style>
