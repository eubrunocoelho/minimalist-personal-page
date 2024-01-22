import { createApp } from 'vue';
import App from './App.vue';
import './assets/css/styles.scss';

const app = createApp(App);

app.config.ignoredElements = [/^ion-/];

app.mount('#app');