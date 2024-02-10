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

const ioniconsModuleScript = document.createElement('script');
const ioniconsNomoduleScript = document.createElement('script');

ioniconsModuleScript.setAttribute('type', 'module');
ioniconsModuleScript.setAttribute('src', 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js');


ioniconsNomoduleScript.setAttribute('nomodule', '');
ioniconsNomoduleScript.setAttribute('src', 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js');

document.head.appendChild(ioniconsModuleScript);
document.head.appendChild(ioniconsNomoduleScript);

library.add(fas, fab, far);
dom.watch();

const app = createApp(App);

app.config.ignoredElements = [/^ion-/];
app.config.globalProperties.$log = log;
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(VueWriter);
app.mount('#app');