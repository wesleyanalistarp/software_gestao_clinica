<template>
  <div class="app">
    <!-- Content -->
    <router-view v-if="router" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useAuthStore } from "./stores/AuthStore";
import { verifyAuth } from "./config/auth";

export default defineComponent({
  data() {
    return {
      authStore: useAuthStore(),
	  router: false
    };
  },
  async created() {
    const token = localStorage.getItem("token");
    if (token) {
      const response = await verifyAuth(token);
      if (true) {
        this.authStore.token = token;
        this.authStore.isAuth = true;
      }
    }

	this.router = true
	console.log('app')

    /* if (!is.authStore.isAuth){
		this.$router.push("/login");
	} */
  },
});
</script>

<style lang="scss">
:root {
  --primary: #4ade80;
  --primary-alt: #0bdf59;
  --grey: #64748b;
  --dark: #22c55e;
  --dark-alt: #395533;
  --light: #f1f5f9;
  --sidebar-width: 300px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Fira sans", sans-serif;
}

body {
  background: var(--light);
}

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

.app {
  display: flex;

  main {
    flex: 1 1 0;
    padding: 2rem;

    @media (max-width: 1024px) {
      padding-left: 6rem;
    }
  }
}
</style>