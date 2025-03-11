<template>
  <div class="stats-summary">
    <h2>Summary Statistics</h2>
    <div class="stats-grid">
      <div class="stat-card">
        <h3>Average</h3>
        <p>{{ average.toFixed(2) }}</p>
      </div>
      <div class="stat-card">
        <h3>Maximum</h3>
        <p>{{ maximum }}</p>
      </div>
      <div class="stat-card">
        <h3>Minimum</h3>
        <p>{{ minimum }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  stats: {
    type: Array,
    required: true
  }
});

const average = computed(() => {
  if (!props.stats.length) return 0;
  return props.stats.reduce((acc, curr) => acc + curr.value, 0) / props.stats.length;
});

const maximum = computed(() => {
  if (!props.stats.length) return 0;
  return Math.max(...props.stats.map(stat => stat.value));
});

const minimum = computed(() => {
  if (!props.stats.length) return 0;
  return Math.min(...props.stats.map(stat => stat.value));
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