// stores/subdomain.js
import { defineStore } from 'pinia';

export const useSubdomainStore = defineStore('subdomain', {
  state: () => ({
    subdomain: null
  }),
  actions: {
    setSubdomain(subdomain) {
      this.subdomain = subdomain;
      localStorage.setItem('tenant', subdomain);
    },
    loadSubdomain() {
      const subdomain = localStorage.getItem('tenant');
      if (subdomain) {
        this.subdomain = subdomain;
      }
    }
  }
});
