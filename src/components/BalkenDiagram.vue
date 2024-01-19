<template>
  <div>
    <div class="dropdown">
      <div>
        <div id="currentYear" @click="dropDownOpen = !dropDownOpen">
          {{ jahr }}
        </div>
        <div class="dropdown-options" v-show="dropDownOpen">
          <div
            v-for="aktuellesJahr in andereJahre"
            :key="aktuellesJahr"
            @click="selectYear(aktuellesJahr)"
          >
            {{ aktuellesJahr }}
          </div>
        </div>
      </div>
    </div>
    <div>
      <Bar id="my-chart-id" :options="options" :data="data" />
    </div>
  </div>
</template>

<script>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import * as balken from "../data/balken.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "BalkenDiagram",
  components: { Bar },
  data() {
    return {
      jahr: 2011,
      jahre: [2011, 2012, 2013, 2014, 2015, 2016, 2017],
      dropDownOpen: false,
      ...balken,
    };
  },
  computed: {
    andereJahre() {
      return this.jahre.filter((anderesJahr) => anderesJahr != this.jahr);
    },
  },
  methods: {
    selectYear(jahr) {
      this.jahr = jahr;
      this.dropDownOpen = false;
      this.$store.commit("setJahr(this.jahre.indexOf({}, jahr))");
      console.log(this.$store.state.jahr);
    },
  },
};
</script>

<style scoped>
/* div {
  width: 65%;
  border: 2px solid black;
  padding: 2%;
  margin: 3%;
  float: right;
} */

.dropdown {
  position: relative;
}

.dropdown-options {
  position: absolute;
  top: 100%;
  border: 1px solid #ddd;
  background-color: #fff;
  width: 100%;
}

#currentYear {
  padding: 5px 12px;
  border: 1px solid #ddd;
  background-color: #fff;
}

.dropdown-options > div {
  padding: 5px 12px;
}

.dropdown-options > div:hover {
  background-color: #eee;
  cursor: pointer;
}
</style>
