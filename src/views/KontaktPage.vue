<template>
    <div class="wrapper">
      <TopView></TopView>
      <div class="content">
        <h5>Kontakt:</h5>
      <p>Telefon: 01234-789456</p>
      <p>Fax: 1234-56789</p>
      <p>E-Mail: max@muster.de</p>
      <p>Angaben gemäß § 5 TMG</p>
      <p>Max Muster</p>
      <p>Musterweg</p>
      <p>12345 Musterstadt</p>
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
    flex-direction: column;
    height: 80%;
  }
  </style>
  