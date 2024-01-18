<template>
    <div id="colouredBox">

        <a href="#/impressum">Impressum</a>
        <a href="#/">Datenschutzerklärung</a>
    </div>
</template>

<script>
export default {
  name: 'FooterComponent',
};
</script>


<style scoped>
#colouredBox {
    display: flex;
    background-color: black;
    height: 3rem;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
    position: absolute;
    bottom: 0px;
};



</style>