import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createORM } from 'pinia-orm';
import FontAwesomeIcon from './utils/icons';
import App from './App.vue';
import '@nhm-data/zoa/theme';

const pinia = createPinia().use(createORM());

const app = createApp(App);
app.config.performance = true;
app.component('fa-icon', FontAwesomeIcon);
app.use(pinia);
app.mount('#app');
