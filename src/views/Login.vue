<template>
  <div>
    <div
      class="container"
      :class="{ 'sign-in-js': isRecuperar, 'sign-up-js': !isRecuperar }"
    >
      <div class="content first-content">
        <div class="first-column">
          <h2 class="title segundo-titulo">Recuperar</h2>
          <p class="description description-primary">
            Clique no botão abaixo, para recuperar sua senha!
          </p>
          <button class="btn btn-primary" v-on:click="efeitoBtnRecuperar">
            Recuperar
          </button>
        </div>
        <div class="second-column">
          <h2 class="title title-second">Preencha para acessar o sistema</h2>
          <form action="#" class="form" v-on:submit.prevent="login">
            <label class="label-input" for="">
              <i class="fas fa-envelope icon-modify"></i>
              <input
                type="text"
                v-model="usuario"
                placeholder="Digite seu usuário"
              />
            </label>
            <label class="label-input" for="">
              <i class="fas fa-fingerprint icon-modify"></i>
              <input
                type="password"
                v-model="senha"
                placeholder="Digite sua senha"
              />
            </label>
            <button class="btn btn-second">Login</button>
          </form>
        </div>
      </div>
      <div class="content second-content">
        <div class="first-column">
          <h2 class="title segundo-titulo">Acessar Sistema</h2>
          <p class="description description-primary">
            Clique no botão abaixo para acessar o sistema!
          </p>
          <button
            id="signup"
            class="btn btn-primary"
            v-on:click="efeitoBtnRecuperar"
          >
            Acessar
          </button>
        </div>
        <div class="second-column">
          <h2 class="title title-second">Recuperar conta</h2>
          <form action="#" class="form">
            <label class="label-input" for="">
              <i class="fas fa-users icon-modify"></i>
              <input type="text" name="nome" placeholder="Digite seu nome" />
            </label>
            <label class="label-input" for="">
              <i class="fas fa-envelope icon-modify"></i>
              <input type="email" name="email" placeholder="Digite seu email" />
            </label>
            <button class="btn btn-second">Recuperar</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import api from "../config/axios";
import { alertInstance } from "../config/alerts";
import { useAuthStore } from "../stores/AuthStore.js";

export default defineComponent({
  name: "Login",
  data() {
    return {
      isRecuperar: false,
      usuario: "kaua",
      senha: "1234",
      authStore: useAuthStore()
    };
  },
  methods: {
    efeitoBtnRecuperar() {
      this.isRecuperar = !this.isRecuperar;
    },
    login() {
      api
        .post("/auth/login", {
          login: this.usuario,
          senha: this.senha,
        })
        .then((response) => {
          this.authStore.setTokenLocalStorage(response.data.token)
          this.$router.push("/recepcao");
        })
        .catch((err) => {
          alertInstance(3000, err.response.data.message, "error");
          this.senha = "";
        });
    },
  },
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Poppins:wght@300;400;500&display=swap");

.divider:after,
.divider:before {
  content: "";
  flex: 1;
  height: 1px;
  background: #eee;
}

.h-custom {
  height: calc(100% - 73px);
}

@media (max-width: 450px) {
  .h-custom {
    height: 100%;
  }
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 15vw;
  height: 100vh;

  font-family: "Open Sans", sans-serif;
}

.first-column {
  text-align: center;
  width: 40%;
  z-index: 10;
}

.content::before {
  content: "";
  position: absolute;
  background-color: #58af9b;
  width: 40%;
  height: 100%;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  left: 0;
}

.title {
  font-size: 28px;
  font-weight: bold;
  text-transform: capitalize;
}

.segundo-titulo {
  color: #fff;
}

.description {
  font-size: 14px;
  font-weight: 300;
  line-height: 30px;
}

.btn {
  border-radius: 15px;
  text-transform: uppercase;
  color: #fff;
  font-size: 10px;
  padding: 10px 50px;
  cursor: pointer;
  font-weight: bold;
  width: 150px;
  align-self: center;
  border: none;
  background-color: #58af9b;
}

.btn-second {
  background-color: #58af9b;
  border: 1px solid #58af9b;
  transition: 0.5s;
}

.btn-second:hover {
  background-color: #fff;
  border: 1px solid #58af9b;
  color: #58af9b;
}

.btn-primary {
  background-color: transparent;
  border: 1px solid #fff;
  transition: 0.5s;
}

.btn-primary:hover {
  background-color: #fff;
  color: #58af9b;
}

.second-column {
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title-second {
  color: #58af9b;
}

.content {
  border-radius: 15px;
  background-color: #fff;
  width: 960px;
  height: 50%;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.description-primary {
  color: #fff;
}

.description-second {
  color: #7f8c8d;
}

.first-content {
  display: flex;
  /* display: none; */
}

.first-content .second-column {
  z-index: 12;
}

.form {
  display: flex;
  flex-direction: column;
  width: 55%;
}

.form input {
  height: 45px;
  width: 100%;
  border: none;
  background-color: #ecf0f1;
}

.label-input {
  background-color: #ecf8f1;
  display: flex;
  align-items: center;
  margin: 8px;
  padding: 2px;
}

.label-input input {
  outline: none;
}

.icon-modify {
  color: #7f8c8d;
  padding: 0 5px;
}

/**second-content**/

.second-content {
  position: absolute;
  display: flex;
}

.second-content .first-column {
  order: 2;
  z-index: -1;
}

.second-content .second-column {
  order: 1;
  z-index: -1;
}

.sign-in-js .first-content .first-column,
.sign-in-js .first-content .second-column {
  z-index: -1;
}

.sign-in-js .second-content .second-column {
  z-index: 11;
}

.sign-in-js .second-content .first-column {
  z-index: 13;
}

.sign-in-js .content::before {
  left: 60%;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  animation: slidein 2s;
  z-index: 12;
}

.sign-up-js .content::before {
  animation: slideout 2s;
  z-index: 12;
}

.sign-up-js .second-content .first-column,
.sign-up-js .second-content .second-column {
  z-index: -1;
}

.sign-up-js .first-content .second-column {
  z-index: 11;
}

.sign-up-js .first-content .first-column {
  z-index: 13;
}

/*deslocamento do conteúdo atras*/

.sign-in-js .first-content .second-column {
  z-index: -1;
  position: relative;
  animation: deslocamentoEsq 2s;
}

.sign-up-js .second-content .second-column {
  position: relative;
  z-index: -1;
  animation: deslocamentoDir 2s;
}

@keyframes deslocamentoEsq {
  from {
    left: 0;
    opacity: 1;
    z-index: 12;
  }

  25% {
    left: -80px;
    opacity: 0.5;
  }

  50% {
    left: -100px;
    opacity: 0.2;
  }

  to {
    left: -110px;
    opacity: 0;
    z-index: -1;
  }
}

@keyframes deslocamentoDir {
  from {
    left: 0;
    z-index: 12;
  }

  25% {
    left: 80px;
    opacity: 0.5;
  }

  50% {
    left: 100px;
    opacity: 0.2;
  }

  to {
    left: 110px;
    opacity: 0;
    z-index: -1;
  }
}

/**animação css**/

@keyframes slidein {
  from {
    left: 0;
    width: 40%;
  }

  25% {
    left: 5%;
    width: 50%;
  }

  50% {
    left: 25%;
    width: 60%;
  }

  75% {
    left: 45%;
    width: 50%;
  }

  to {
    left: 60%;
    width: 40%;
  }
}

@keyframes slideout {
  from {
    left: 60%;
    width: 40%;
  }

  25% {
    left: 45%;
    width: 50%;
  }

  50% {
    left: 25%;
    width: 60%;
  }

  75% {
    left: 5%;
    width: 50%;
  }

  to {
    left: 0;
    width: 40%;
  }
}

/**responsividade**/

@media screen and (max-width: 1040px) {
  .content {
    width: 100%;
    height: 100%;
  }

  .content::before {
    width: 100%;
    height: 40%;
    top: 0;
    border-radius: 0;
  }

  .first-content,
  .second-content {
    flex-direction: column;
    justify-content: space-around;
  }

  .first-column .second-column {
    width: 100%;
  }

  .sign-in-js .content::before {
    top: 60%;
    left: 0;
    border-radius: 0;
  }

  .form {
    width: 90%;
  }

  /**animação mobille css**/

  @keyframes deslocamentoEsq {
    from {
      top: 0;
      opacity: 1;
      z-index: 12;
    }

    25% {
      top: -80px;
      opacity: 0.5;
    }

    50% {
      top: -100px;
      opacity: 0.2;
    }

    to {
      top: -110px;
      opacity: 0;
      z-index: -1;
    }
  }

  @keyframes deslocamentoDir {
    from {
      top: 0;
      z-index: 12;
    }

    25% {
      top: 80px;
      opacity: 0.5;
    }

    50% {
      top: 100px;
      opacity: 0.2;
    }

    to {
      top: 110px;
      opacity: 0;
      z-index: -1;
    }
  }

  /**animação css**/

  @keyframes slidein {
    from {
      top: 0;
      height: 40%;
    }

    25% {
      top: 5%;
      height: 50%;
    }

    50% {
      top: 25%;
      height: 60%;
    }

    75% {
      top: 45%;
      height: 50%;
    }

    to {
      top: 60%;
      height: 40%;
    }
  }

  @keyframes slideout {
    from {
      top: 60%;
      height: 40%;
    }

    25% {
      top: 45%;
      height: 50%;
    }

    50% {
      top: 25%;
      height: 60%;
    }

    75% {
      top: 5%;
      height: 50%;
    }

    to {
      top: 0;
      height: 40%;
    }
  }
}

@media screen and (max-width: 740px) {
  .form {
    width: 100%;
  }
}

@media screen and (max-width: 405px) {
  .form {
    width: 100%;
  }
}
</style>