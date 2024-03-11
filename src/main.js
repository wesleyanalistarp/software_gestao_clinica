import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { LoadingPlugin } from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import 'bootstrap/dist/css/bootstrap.css';


const loadingConfig = {
    // Optional parameters
    active: false,
    isFullPage: true,
    loader: 'dots',
    color: 'green'
  }

createApp(App).use(createPinia()).use(router).use(LoadingPlugin, loadingConfig).mount('#app')
