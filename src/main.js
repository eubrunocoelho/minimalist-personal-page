import { createApp } from 'vue';
import App from './App.vue';
import './assets/scss/styles.scss';

const app = createApp(App);

app.config.ignoredElements = [/^ion-/];

app.mount('#app');