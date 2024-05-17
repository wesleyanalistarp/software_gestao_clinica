import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { LoadingPlugin } from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js'
import axiosInstance from './config/axios';
import { useSubdomainStore } from './stores/subDomainStore';


const loadingConfig = {
    // Optional parameters
    active: false,
    isFullPage: true,
    loader: 'dots',
    color: 'green'
  }

createApp(App).use(createPinia()).use(router).use(LoadingPlugin, loadingConfig).mount('#app')

const subdomainStore = useSubdomainStore()

axiosInstance.interceptors.request.use(config => {
  const subdomain = subdomainStore.subdomain;
  if (subdomain) {
    config.headers['x-tenant-id'] = subdomain;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

