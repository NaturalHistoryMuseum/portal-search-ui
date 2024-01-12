<template>
  <div class="container">
    <Sidebar />
    <div class="results-container">
      <pre>{{ q }}</pre>
    </div>
  </div>
</template>

<script setup>
import { useQueryStore } from './store/query';
import Sidebar from './components/sidebar/Sidebar.vue';
import { computed } from 'vue';

const queryStore = useQueryStore();
queryStore.init();

const q = computed(() => {
  return JSON.stringify(queryStore.rootGroup, null, 2);
});
</script>

<style lang="scss">
@import 'fonts';

.container {
  display: grid;
  width: 100%;
  height: 100vh;
  grid-template-columns: 500px 1fr;
}

body {
  font-family: 'NHM Wallop Text', sans-serif;
}

.results-container {
  padding: 1em;
}
</style>
