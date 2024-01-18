<template>
    <top-view></top-view>
    <body>
      <SteckbriefComponent></SteckbriefComponent>
      <balken-diagram></balken-diagram>
    </body>
    <FooterComponent></FooterComponent>
    
</template>

<script>
import TopView from '@/components/TopView.vue'
import BalkenDiagram from '@/components/BalkenDiagram.vue'
import FooterComponent from '../components/FooterComponent.vue';
import SteckbriefComponent from '../components/SteckbriefComponent.vue'
export default {
  components: {
    TopView,
    FooterComponent,
    BalkenDiagram,
    SteckbriefComponent,
  }
}
</script>


<style scoped>
  body {
    display: flex;
    flex-direction: row;
    height: 100%;
  }

</style>