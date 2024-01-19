<template>
  <div>
    <div @click="balken = !balken">Zeitverlauf</div>
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
      <Bar
        v-if="balken"
        id="my-chart-id"
        :options="options"
        :data="balkenData"
      />
      <Line v-if="!balken" :options="options" :data="balkenData" />
    </div>
  </div>
</template>

<script>
import { Bar, Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import { uzlEinnahmen, eufEinnahmen } from "../data/alldata.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

export default {
  name: "BalkenDiagram",
  components: { Bar, Line },
  data() {
    return {
      jahr: 2011,
      jahre: [2011, 2012, 2013, 2014, 2015, 2016, 2017],
      dropDownOpen: false,
      balken: false,
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  computed: {
    balkenData() {
      return {
        labels: ["UzL", "CAU", "EUF"],
        datasets: [
          {
            label: "Landeszuschuss zu Betriebskosten",
            backgroundColor: "#4AD66D",
            data: [uzlEinnahmen[this.$store.state.jahr], 20, 10],
          },
          {
            label: "Zuschüsse zur Finanzierung von Investitionen",
            backgroundColor: "#25A244",
            data: [30, 20, 10],
          },
          {
            label: "Drittmittel",
            backgroundColor: "#1A7431",
            data: [30, 20, 80],
          },
          {
            label: "Sonstige Einnahmen",
            backgroundColor: "#00A6FB",
            data: [30, 20, 10],
          },
          {
            label: "Nicht genauer spezifizierte Einnahmen",
            backgroundColor: "#006494",
            data: [30, 20, 10],
          },
          {
            label: "Gesamt",
            backgroundColor: "#003554",
            data: [0, 20, 80],
          },
          {
            label: "Sachausgaben",
            backgroundColor: "#E87D2A",
            data: [30, 20, 10],
          },
          {
            label: "Personalausgaben",
            backgroundColor: "#DE6D17",
            data: [30, 20, 80],
          },
          {
            label: "Nicht genauer spezifizierte Ausgaben",
            backgroundColor: "#EF2B2B",
            data: [30, 20, 10],
          },
          {
            label: "Gesamtsumme",
            backgroundColor: "#CD0000",
            data: [30, 20, 10],
          },
        ],
      };
    },
    lineData() {
      return {
        labels: ["2011", "2012", "2013", "2014", "2015", "2016", "2017"],
        datasets: [
          {
            label: "Landeszuschuss zu Betriebskosten",
            backgroundColor: "#4AD66D",
            uzldata: uzlEinnahmen,
            eufdata: eufEinnahmen,
          },
          {
            label: "Zuschüsse zur Finanzierung von Investitionen",
            backgroundColor: "#25A244",
            data: [30, 20, 10],
          },
          {
            label: "Drittmittel",
            backgroundColor: "#1A7431",
            data: [30, 20, 80],
          },
          {
            label: "Sonstige Einnahmen",
            backgroundColor: "#00A6FB",
            data: [30, 20, 10],
          },
          {
            label: "Nicht genauer spezifizierte Einnahmen",
            backgroundColor: "#006494",
            data: [30, 20, 10],
          },
          {
            label: "Gesamt",
            backgroundColor: "#003554",
            data: [0, 20, 80],
          },
          {
            label: "Sachausgaben",
            backgroundColor: "#E87D2A",
            data: [30, 20, 10],
          },
          {
            label: "Personalausgaben",
            backgroundColor: "#DE6D17",
            data: [30, 20, 80],
          },
          {
            label: "Nicht genauer spezifizierte Ausgaben",
            backgroundColor: "#EF2B2B",
            data: [30, 20, 10],
          },
          {
            label: "Gesamtsumme",
            backgroundColor: "#CD0000",
            data: [30, 20, 10],
          },
        ],
      };
    },
    andereJahre() {
      return this.jahre.filter((anderesJahr) => anderesJahr != this.jahr);
    },
  },
  methods: {
    selectYear(jahr) {
      this.jahr = jahr;
      this.dropDownOpen = false;
      this.$store.commit("setJahr", this.jahre.indexOf(jahr));
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
