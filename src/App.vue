<template>
  <div class="app">
    <Sidebar v-if="showSidebar" @eventoFilho="funcaoDoPai" />
    <!-- Content -->
    <div id="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useAuthStore } from "./stores/AuthStore";
import { verifyAuth } from "./config/auth";
import Sidebar from "./components/Sidebar.vue";

export default defineComponent({
  data() {
    return {
      authStore: useAuthStore(),
      is_expanded: (localStorage.getItem("is_expanded") === 'true') && this.showSidebar,
    };
  },
  components: {
    Sidebar,
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
  methods: {
    funcaoDoPai(is_expanded) {
      this.is_expanded = is_expanded
    }
  },
  computed: {
    showSidebar() {
      return this.$route.meta.showSidebar;
    }
  }
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
  --sidebar-width: 400px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Fira sans", sans-serif;
}

body {
  background: var(--light);
  overflow-y: hidden;
}

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

#content {
  overflow-y: scroll;
  padding: 10px;
  width: 100%;
}

#content.sidebar {
  margin-left: 50px;
  transition: all 0.2s ease-in-out;
}

#content.sidebar_active {
  margin-left: 300px;
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