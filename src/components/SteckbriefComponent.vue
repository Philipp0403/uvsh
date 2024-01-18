<template>
  <div id="container">
    <h1>Information</h1>
    <p>
      Diese Website soll dazu dienen, die Ausgaben und Einnahmen verschiedener
      Universitäten zu vergleichen und anhand einzelner Positionen
      aufzuschlüsseln. Um Daten für die Universität zu Lübeck, Universität Kiel
      oder für die Europauniversität Flensburg zu sehen, wählen Sie bitte das
      entsprechende Icon für die jeweilige Universität im rechten Fenster. Die
      Haushaltspläne der Universitäten enthalten alle Einnahmen und Ausgaben der
      jeweiligen Universität.
    </p>
    <button v-on:click="changeUzl()" type="button" class="btn btn-primary">
      Uni Lübeck
    </button>
    <div v-if="uzl">EYOOO LÜBECK ALLA</div>
  </div>
</template>

<script>
export default {
  name: "SteckbriefComponent",
  methods: {
    changeUzl() {
      this.$store.commit("toggleUzl");
    },
  },
  computed: {
    uzl() {
      return this.$store.state.uzl;
    },
  },
};
</script>

<style scoped>
#container {
  display: flex;
  flex-direction: column;
  background-color: rgb(191, 131, 223);
  width: 30%;
  padding: 1rem;
  margin: 1rem;
}

p {
  margin-top: 1rem;
}
</style>
