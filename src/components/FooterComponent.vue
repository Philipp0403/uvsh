<template>
  <div id="colouredBox">
    <a href="#/impressum">Impressum</a>
    <a href="#/datenschutzerklaerung">Datenschutzerklärung</a>
    <a href="#/kontakt">Kontakt</a>
    <a href="#/barrierefreiheit">Barrierefreiheit</a>
  </div>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped>
#colouredBox {
  display: flex;
  background-color: black;
  height: 5%;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
}
</style>
