<template>
  <div class="stats-summary">
    <h2>Revenue Statistics</h2>
    <div class="stats-grid">
      <div class="stat-card">
        <h3>Total Revenue</h3>
        <p>${{ formatCurrency(totalRevenue) }}B</p>
      </div>
      <div class="stat-card">
        <h3>Average Monthly</h3>
        <p>${{ formatCurrency(averageMonthly) }}B</p>
      </div>
      <div class="stat-card">
        <h3>Highest Month</h3>
        <p>${{ formatCurrency(highestMonth) }}B</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  totalRevenue: {
    type: Number,
    required: true
  },
  monthlyData: {
    type: Array,
    required: true
  }
});

const formatCurrency = (value) => {
  return (value / 1e9).toFixed(2);
};

const averageMonthly = computed(() => {
  if (!props.monthlyData.length) return 0;
  const total = props.monthlyData.reduce((acc, curr) => acc + curr.amount, 0);
  return total / props.monthlyData.length;
});

const highestMonth = computed(() => {
  if (!props.monthlyData.length) return 0;
  return Math.max(...props.monthlyData.map(data => data.amount));
});
</script>

<style scoped>
.stats-summary {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 15px;
  margin-top: 15px;
}

.stat-card {
  text-align: center;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 6px;
}

.stat-card h3 {
  margin: 0;
  font-size: 0.9rem;
  color: #666;
}

.stat-card p {
  margin: 10px 0 0;
  font-size: 1.5rem;
  font-weight: bold;
  color: #41B883;
}
</style>