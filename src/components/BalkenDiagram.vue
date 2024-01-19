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
      <Line v-if="!balken" :options="options" :data="lineData" />
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
import { uzlLzB, eufLzB, cauLzB, uzlZI, eufZI, cauZI, uzlD, eufD, cauD, uzlSE, eufSE, cauSE,
    uzlNSE, eufNSE, cauNSE, uzlGE, eufGE, cauGE, uzlSA, eufSA, cauSA, uzlPA, eufPA, cauPA,
    uzlNSA, eufNSA, cauNSA, uzlGA, eufGA, cauGA, uzlS, eufS, cauS } from "../data/alldata.js";

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
            data: [uzlLzB[this.$store.state.jahr], eufLzB[this.$store.state.jahr], cauLzB[this.$store.state.jahr]],
          },
          {
            label: "Zuschüsse zur Finanzierung von Investitionen",
            backgroundColor: "#25A244",
            data: [uzlZI[this.$store.state.jahr], eufZI[this.$store.state.jahr], cauZI[this.$store.state.jahr]],
          },
          {
            label: "Drittmittel",
            backgroundColor: "#1A7431",
            data: [uzlD[this.$store.state.jahr], eufD[this.$store.state.jahr], cauD[this.$store.state.jahr]],
          },
          {
            label: "Sonstige Einnahmen",
            backgroundColor: "#00A6FB",
            data: [uzlSE[this.$store.state.jahr], eufSE[this.$store.state.jahr], cauSE[this.$store.state.jahr]],
          },
          {
            label: "Nicht genauer spezifizierte Einnahmen",
            backgroundColor: "#006494",
            data: [uzlNSE[this.$store.state.jahr], eufNSE[this.$store.state.jahr], cauNSE[this.$store.state.jahr]],
          },
          {
            label: "Gesamt",
            backgroundColor: "#003554",
            data: [uzlGE[this.$store.state.jahr], eufGE[this.$store.state.jahr], cauGE[this.$store.state.jahr]],
          },
          {
            label: "Sachausgaben",
            backgroundColor: "#E87D2A",
            data: [uzlSA[this.$store.state.jahr], eufSA[this.$store.state.jahr], cauSA[this.$store.state.jahr]],
          },
          {
            label: "Personalausgaben",
            backgroundColor: "#DE6D17",
            data: [uzlPA[this.$store.state.jahr], eufPA[this.$store.state.jahr], cauPA[this.$store.state.jahr]],
          },
          {
            label: "Nicht genauer spezifizierte Ausgaben",
            backgroundColor: "#EF2B2B",
            data: [uzlNSA[this.$store.state.jahr], eufNSA[this.$store.state.jahr], cauNSA[this.$store.state.jahr]],
          },
          {
            label: "Gesamtsumme",
            backgroundColor: "#CD0000",
            data: [uzlGA[this.$store.state.jahr], eufGA[this.$store.state.jahr], cauGA[this.$store.state.jahr]],
          },
        ],
      };
    },
    lineData() {
      return {
        labels: ["2011", "2012", "2013", "2014", "2015", "2016", "2017"],
        datasets: [
          {
            label: "Gesamtausgaben UZL",
            backgroundColor: "#4AD66D",
            data: uzlGA,
          },

          {
            label: "Gesamtausgaben EUF",
            backgroundColor: "#4AD66D",
            data: eufGA,
          },

          {
            label: "Gesamtausgaben CAU",
            backgroundColor: "#4AD66D",
            data: cauGA,
          },

          {
            label: "Personalausgaben UZL",
            backgroundColor: "#4AD66D",
            data: uzlPA,
          },

          {
            label: "Personalausgaben EUF",
            backgroundColor: "#4AD66D",
            data: eufPA,
          },

          {
            label: "Personalausgaben CAU",
            backgroundColor: "#4AD66D",
            data: cauPA,
          },

          {
            label: "Drittmittel UZL",
            backgroundColor: "#4AD66D",
            data: uzlD,
          },

          {
            label: "Drittmittel EUF",
            backgroundColor: "#4AD66D",
            data: eufD,
          },

          {
            label: "Drittmittel CAU",
            backgroundColor: "#4AD66D",
            data: cauD,
          },

          {
            label: "Studienanzahl UZL",
            backgroundColor: "#4AD66D",
            data: uzlS,
          },

          {
            label: "Studienanzahl EUF",
            backgroundColor: "#4AD66D",
            data: eufS,
          },

          {
            label: "Studienanzahl CAU",
            backgroundColor: "#4AD66D",
            data: cauS,
          }

          ,
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
