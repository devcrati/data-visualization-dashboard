<template>
  <div class="dashboard">
    <h1>Revenue Dashboard</h1>
    <div class="dashboard-grid">
      <LineChart :chartData="chartData" />
      <StatsSummary 
        :totalRevenue="metadata.allTimeRevenue" 
        :monthlyData="revenueData" 
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import LineChart from '../components/LineChart.vue';
import StatsSummary from '../components/StatsSummary.vue';

const revenueData = ref([]);
const metadata = ref({});
const chartData = ref(null);


const formatDate = (timestamp) => {
  return new Date(timestamp).toLocaleDateString('en-US', { 
    month: 'short',
    year: 'numeric'
  });
};

const formatAmount = (amount) => {
  return amount / 1e9; // Convert to billions for better readability
};

const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/revenue');
    revenueData.value = response.data.results;
    metadata.value = response.data.metadata;
    
    chartData.value = {
      labels: response.data.results.map(item => formatDate(item.start)),
      datasets: [{
        label: 'Revenue (Billions)',
        data: response.data.results.map(item => formatAmount(item.amount)),
        borderColor: '#41B883',
        fill: false,
        tension: 0.4
      }]
    };
  } catch (error) {
    console.error('Error fetching revenue data:', error);
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