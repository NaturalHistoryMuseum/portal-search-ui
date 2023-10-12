import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createORM } from 'pinia-orm';
import App from './App.vue';
import '@nhm-data/zoa/theme';

const pinia = createPinia().use(createORM());

const app = createApp(App);
app.use(pinia);
app.mount('#app');
