<template>
    <top-view></top-view>
    <body>
      <balken-diagram></balken-diagram>
      <FooterComponent></FooterComponent>
    </body>
    
</template>

<script>
import TopView from '@/components/TopView.vue'
import BalkenDiagram from '@/components/BalkenDiagram.vue'
import FooterComponent from '../components/FooterComponent.vue';
export default {
  components: {
    TopView,
    FooterComponent,
    BalkenDiagram
  }
}
</script>


<style scoped>
  body {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

</style>