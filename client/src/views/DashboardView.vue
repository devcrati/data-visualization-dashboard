<template>
  <div class="dashboard">
    <h1>Data Visualization Dashboard</h1>
    <div class="dashboard-grid">
      <LineChart :chartData="chartData" />
      <StatsSummary :stats="stats" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import LineChart from '../components/LineChart.vue';
import StatsSummary from '../components/StatsSummary.vue';

const stats = ref([]);
const chartData = ref(null);

const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/stats');
    stats.value = response.data;
    
    chartData.value = {
      labels: response.data.map(item => item.month),
      datasets: [{
        label: 'Monthly Values',
        data: response.data.map(item => item.value),
        borderColor: '#41B883',
        fill: false
      }]
    };
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

onMounted(() => {
  fetchData();
});
</script>

<style scoped>
.dashboard {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
}
</style>