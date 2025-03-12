<template>
  <div class="chart-container">
    <Line v-if="chartData" :data="chartData" :options="options" />
  </div>
</template>

<script setup>
import { Line } from 'vue-chartjs';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const props = defineProps({
  chartData: {
    type: Object,
    required: true
  }
});

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'Monthly Revenue'
    },
    tooltip: {
      callbacks: {
        label: (context) => {
          return `Revenue: $${context.raw.toFixed(2)}B`;
        }
      }
    }
  },
  scales: {
    y: {
      ticks: {
        callback: (value) => `$${value}B`
      }
    }
  }
};
</script>

<style scoped>
.chart-container {
  height: 400px;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
</style>