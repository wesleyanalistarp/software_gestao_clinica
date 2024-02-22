<template>
  <div class="app">
    <!-- Content -->
    <router-view />
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
    };
  },
  async created() {
    const token = await verifyAuth();
    if (token) {
      this.authStore.token = token;
      this.authStore.isAuth = true;
    }

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
  overflow-y: scroll;
}

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

/* Personaliza toda a barra de rolagem */
::-webkit-scrollbar {
  width: 7px; /* Largura da barra de rolagem */
}

/* Personaliza o fundo (track) da barra de rolagem */
::-webkit-scrollbar-track {
  background: rgba(165, 165, 165, 0.605); /* Cor de fundo */
}

/* Personaliza o indicador de rolagem (thumb) da barra de rolagem */
::-webkit-scrollbar-thumb {
  background: var(--dark-alt); /* Cor do indicador de rolagem */
  border-radius: 5px;
}

/* Personaliza o indicador de rolagem ao passar o mouse */
::-webkit-scrollbar-thumb:hover {
  background: #555; /* Cor do indicador de rolagem ao passar o mouse */
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