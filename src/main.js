import { createApp } from 'vue';
import App from './App.vue';
import VueWriter from 'vue-writer';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { log } from './utils/utils';
import './assets/scss/styles.scss';

library.add(fas, fab, far);
dom.watch();

const app = createApp(App);

app.config.ignoredElements = [/^ion-/];
app.config.globalProperties.$log = log;
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(VueWriter);
app.mount('#app');