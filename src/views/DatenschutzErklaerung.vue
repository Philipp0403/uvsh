<template>
    <div class="wrapper">
      <TopView></TopView>
      <div class="content">
  
      </div>
      <FooterComponent></FooterComponent>
    </div>
  </template>
  
  <script>
  import TopView from '@/components/TopView.vue'
  import FooterComponent from '@/components/FooterComponent.vue';
  export default {
    components: {
      TopView,
      FooterComponent
    }
  }
  </script>
  
  <style scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    /* padding: 1rem; */
  }
  .content {
    display: flex;
    height: 80%;
  }
  </style>
  