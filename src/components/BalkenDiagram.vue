<template>
    <div>
        <Bar
            id="my-chart-id"
            :options="chartOptions"
            :data="chartData"
        />
    </div>
</template>

<script>
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
    name: 'BalkenDiagram',
    components: { Bar },
    data() {
        return {
            chartData: {
                labels: ['A', 'B'],
                datasets: [ {data: [40, 20]}]
            },
            chartOptions: {
                responsive: true
            }
        }
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