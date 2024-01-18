<template>
    <div>
        <Bar
            id="my-chart-id"
            :options="options"
            :data="data"
        />
    </div>
</template>

<script>
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import * as balken from '../data/balken.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
    name: 'BalkenDiagram',
    components: { Bar },
    data() {
        return balken
    }
}
</script>

<style scoped>
div {
    width: 65%;
    border: 2px solid black;
    padding: 2%;
    margin: 3%;
    float: right;
}
</style>