<template>
  <div id="container">
    <div id="zeitundtoggle">
      <div id="zeitunddrop">
        <button
          v-on:click="balken = !balken"
          type="button"
          class="btn btn-outline-primary .btn-lg"
          id="diagrammwahl"
        >
          {{ diagrammtyp }}
        </button>

        <div class="dropdown" v-if="balken">
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
      </div>
      <div class=".d-flex" id="unibuttons">
        <button
          v-on:click="changeUzl()"
          type="button"
          class="btn btn-primary .btn-lg"
          id="btnUZL"
        >
          UzL
        </button>
        <button
          v-on:click="changeEUF()"
          type="button"
          class="btn btn-primary"
          id="btnEUF"
        >
          EUF
        </button>
        <button
          v-on:click="changeCAU()"
          type="button"
          class="btn btn-primary"
          id="btnCAU"
        >
          CAU
        </button>
      </div>
    </div>

    <div id="diagramme">
      <Bar
        v-if="balken"
        id="my-chart-id"
        :options="options"
        :data="balkenData"
        ref="bar"
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
import {
  uzlLzB,
  eufLzB,
  cauLzB,
  uzlZI,
  eufZI,
  cauZI,
  uzlD,
  eufD,
  cauD,
  uzlSE,
  eufSE,
  cauSE,
  uzlNSE,
  eufNSE,
  cauNSE,
  uzlGE,
  eufGE,
  cauGE,
  uzlSA,
  eufSA,
  cauSA,
  uzlPA,
  eufPA,
  cauPA,
  uzlNSA,
  eufNSA,
  cauNSA,
  uzlGA,
  eufGA,
  cauGA,
  uzlS,
  eufS,
  cauS,
} from "../data/alldata.js";

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

var uzlData = [];
var cauData = [];
var eufData = [];

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
        plugins: {
          legend: { display: true, position: "bottom" },
        },
      },
    };
  },
  computed: {
    diagrammtyp() {
      return this.balken ? "Zum Zeitverlauf" : "Zum Balkendiagramm";
    },
    uzl() {
      return this.$store.state.uzl;
    },
    cau() {
      return this.$store.state.cau;
    },
    euf() {
      return this.$store.state.euf;
    },
    balkenData() {
      return {
        labels: ["UzL", "EUF", "CAU"],
        datasets: [
          {
            label: "Landeszuschuss zu Betriebskosten",
            backgroundColor: "#4AD66D",
            data: [
              uzlLzB[this.$store.state.jahr],
              eufLzB[this.$store.state.jahr],
              cauLzB[this.$store.state.jahr],
            ],
          },
          {
            label: "Zuschüsse zur Finanzierung von Investitionen",
            backgroundColor: "#25A244",
            data: [
              uzlZI[this.$store.state.jahr],
              eufZI[this.$store.state.jahr],
              cauZI[this.$store.state.jahr],
            ],
          },
          {
            label: "Drittmittel",
            backgroundColor: "#1A7431",
            data: [
              uzlD[this.$store.state.jahr],
              eufD[this.$store.state.jahr],
              cauD[this.$store.state.jahr],
            ],
          },
          {
            label: "Sonstige Einnahmen",
            backgroundColor: "#00A6FB",
            data: [
              uzlSE[this.$store.state.jahr],
              eufSE[this.$store.state.jahr],
              cauSE[this.$store.state.jahr],
            ],
          },
          {
            label: "Nicht genauer spezifizierte Einnahmen",
            backgroundColor: "#006494",
            data: [
              uzlNSE[this.$store.state.jahr],
              eufNSE[this.$store.state.jahr],
              cauNSE[this.$store.state.jahr],
            ],
          },
          {
            label: "Gesamt",
            backgroundColor: "#003554",
            data: [
              uzlGE[this.$store.state.jahr],
              eufGE[this.$store.state.jahr],
              cauGE[this.$store.state.jahr],
            ],
          },
          {
            label: "Sachausgaben",
            backgroundColor: "#E87D2A",
            data: [
              uzlSA[this.$store.state.jahr],
              eufSA[this.$store.state.jahr],
              cauSA[this.$store.state.jahr],
            ],
          },
          {
            label: "Personalausgaben",
            backgroundColor: "#DE6D17",
            data: [
              uzlPA[this.$store.state.jahr],
              eufPA[this.$store.state.jahr],
              cauPA[this.$store.state.jahr],
            ],
          },
          {
            label: "Nicht genauer spezifizierte Ausgaben",
            backgroundColor: "#EF2B2B",
            data: [
              uzlNSA[this.$store.state.jahr],
              eufNSA[this.$store.state.jahr],
              cauNSA[this.$store.state.jahr],
            ],
          },
          {
            label: "Gesamtsumme",
            backgroundColor: "#CD0000",
            data: [
              uzlGA[this.$store.state.jahr],
              eufGA[this.$store.state.jahr],
              cauGA[this.$store.state.jahr],
            ],
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
            backgroundColor: "#00A6FB",
            data: uzlGA,
          },

          {
            label: "Gesamtausgaben EUF",
            backgroundColor: "#E87D2A",
            data: eufGA,
          },

          {
            label: "Gesamtausgaben CAU",
            backgroundColor: "#4AD66D",
            data: cauGA,
          },

          {
            label: "Personalausgaben UZL",
            backgroundColor: "#00A6FB",
            data: uzlPA,
          },

          {
            label: "Personalausgaben EUF",
            backgroundColor: "#E87D2A",
            data: eufPA,
          },

          {
            label: "Personalausgaben CAU",
            backgroundColor: "#4AD66D",
            data: cauPA,
          },

          {
            label: "Drittmittel UZL",
            backgroundColor: "#00A6FB",
            data: uzlD,
          },

          {
            label: "Drittmittel EUF",
            backgroundColor: "#E87D2A",
            data: eufD,
          },

          {
            label: "Drittmittel CAU",
            backgroundColor: "#4AD66D",
            data: cauD,
          },

          {
            label: "Studianzahl UZL",
            backgroundColor: "#00A6FB",
            data: uzlS,
          },

          {
            label: "Studianzahl EUF",
            backgroundColor: "#E87D2A",
            data: eufS,
          },

          {
            label: "Studianzahl CAU",
            backgroundColor: "#4AD66D",
            data: cauS,
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
    changeUzl() {
      this.$store.commit("toggleUzl");
      const ChartInstance = this.$refs.bar.chart;
      if (this.uzl) {
        document
          .getElementById("btnUZL")
          .classList.remove("btn-outline-primary");
        document.getElementById("btnUZL").classList.add("btn-primary");
        if (this.balken) {
          for (var i = 0; i < this.balkenData.datasets.length; i++) {
            this.balkenData.datasets[i].data.push(uzlData[i]);
          }
          this.balkenData.labels.push("UzL");
          uzlData = [];
          ChartInstance.update();
        }
      } else {
        document.getElementById("btnUZL").classList.remove("btn-primary");
        document.getElementById("btnUZL").classList.add("btn-outline-primary");
        if (this.balken) {
          var uzlIndex = this.balkenData.labels.indexOf("UzL");
          for (i = 0; i < this.balkenData.datasets.length; i++) {
            uzlData.push(this.balkenData.datasets[i].data[uzlIndex]);
            this.balkenData.datasets[i].data.splice(uzlIndex, 1);
          }
          this.balkenData.labels.splice(uzlIndex, 1);
          ChartInstance.update();
          console.log(uzlData);
        }
      }
    },
    changeCAU() {
      this.$store.commit("toggleCau");
      const ChartInstance = this.$refs.bar.chart;
      if (this.cau) {
        document.getElementById("btnCAU").classList.remove("btn-outline-primary");
        document.getElementById("btnCAU").classList.add("btn-primary");
        if (this.balken) {
          for (var i = 0; i < this.balkenData.datasets.length; i++) {
            this.balkenData.datasets[i].data.push(cauData[i]);
          }
          this.balkenData.labels.push("CAU");
          cauData = [];
          ChartInstance.update();
        }
      } else {
        document.getElementById("btnCAU").classList.remove("btn-primary");
        document.getElementById("btnCAU").classList.add("btn-outline-primary");
        if (this.balken) {
          var cauIndex = this.balkenData.labels.indexOf("CAU");
          for (i = 0; i < this.balkenData.datasets.length; i++) {
            cauData.push(this.balkenData.datasets[i].data[cauIndex]);
            this.balkenData.datasets[i].data.splice(cauIndex, 1);
          }
          this.balkenData.labels.splice(cauIndex, 1);
          ChartInstance.update();
          console.log(cauData);
        }
      }
    },
    changeEUF() {
      this.$store.commit("toggleEuf");
      const ChartInstance = this.$refs.bar.chart;
      if (this.euf) {
        document.getElementById("btnEUF").classList.remove("btn-outline-primary");
        document.getElementById("btnEUF").classList.add("btn-primary");
        if (this.balken) {
          for (var i = 0; i < this.balkenData.datasets.length; i++) {
            this.balkenData.datasets[i].data.push(eufData[i]);
          }
          this.balkenData.labels.push("EUF");
          eufData = [];
          ChartInstance.update();
        }
      } else {
        document.getElementById("btnEUF").classList.remove("btn-primary");
        document.getElementById("btnEUF").classList.add("btn-outline-primary");
        if (this.balken) {
          var eufIndex = this.balkenData.labels.indexOf("EUF");
          for (i = 0; i < this.balkenData.datasets.length; i++) {
            eufData.push(this.balkenData.datasets[i].data[eufIndex]);
            this.balkenData.datasets[i].data.splice(eufIndex, 1);
          }
          this.balkenData.labels.splice(eufIndex, 1);
          ChartInstance.update();
          console.log(eufData);
        }
      }
    },
  },
  watch: {
    chartData: function () {
      this.renderChart(this.balkenData, this.options);
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
  border-radius: 5px;
}

#currentYear {
  padding: 5px 12px;
  border: 1px solid #ddd;
  background-color: #fff;
  border-radius: 5px;
}

#currentYear:hover {
  background-color: #eee;
  cursor: pointer;
}

.dropdown-options > div {
  padding: 5px 12px;
}

.dropdown-options > div:hover {
  background-color: #eee;
  cursor: pointer;
}

#container {
  height: 100%;
  width: 58%;
  display: flex;
  flex-direction: column;
  margin: 1rem;
}

#diagramme {
  height: 80%;
}

#diagrammwahl {
  margin-right: 5px;
}

#zeitundtoggle {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}

#zeitunddrop {
  display: flex;
}

#unibuttons > button {
  margin-left: 5px;
}
</style>
