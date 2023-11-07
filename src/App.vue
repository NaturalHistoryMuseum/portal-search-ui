<template>
  <div class="container">
    <Sidebar />
  </div>
</template>

<script setup>
import { useQueryStore } from './store/query';
import Sidebar from './components/sidebar/Sidebar.vue';

const queryStore = useQueryStore();
</script>

<style lang="scss">
.container {
  display: grid;
  width: 100%;
  height: 100vh;
  grid-template-columns: 500px 1fr;
}
</style>
