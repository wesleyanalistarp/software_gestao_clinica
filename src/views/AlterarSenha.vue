<template>
  <div class="conteudo">
    <div class="form-container">
      <div class="logo">
        <img :src="logoURL" width="170px" />
      </div>
      <p class="title">Você está com a senha padrão. Por favor, altere-a</p>
      <form class="form" @submit.prevent="submit">
        <label class="label-input">
          <i class="fa-solid fa-lock cor"></i>
          <input
            type="password"
            v-model="form.senha"
            @input="verifySenha"
            class="input"
            placeholder="Nova senha"
          />
        </label>

        <label class="label-input">
          <i class="fa-solid fa-lock cor"></i>
          <input
            type="password"
            v-model="form.confirm_senha"
            class="input"
            placeholder="Confirmar senha"
          />
        </label>
        <ul class="error_senha">
          <li :class="{ possui: passwordSecurity.hasLenght8 }">
            A senha deve conter no mínimo 8 caracteres
          </li>
          <li :class="{ possui: passwordSecurity.hasUpper }">
            A senha deve conter letras maiúsculas
          </li>
          <li :class="{ possui: passwordSecurity.hasLower }">
            A senha deve conter letras minúsculas
          </li>
          <li :class="{ possui: passwordSecurity.hasNumber }">
            A senha deve conter números
          </li>
        </ul>
        <button class="form-btn" type="submit">Alterar</button>
      </form>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { alertInstance } from "../config/alerts";
import logoURL from "../assets/logopronta.png";
import axiosInstance from "../config/axios";
import { useAuthStore } from "../stores/AuthStore";
import { redirectPattern } from "../utils/redirect";

const useAuth = useAuthStore();

export default defineComponent({
  name: "AlterarSenha",
  data() {
    return {
      form: {
        senha: "",
        confirm_senha: "",
      },
      passwordSecurity: {
        hasLenght8: false,
        hasUpper: false,
        hasLower: false,
        hasNumber: false,
      },
      logoURL: logoURL,
    };
  },
  methods: {
    async submit() {
      if (this.form.senha !== this.form.confirm_senha) {
        return alertInstance("3000", "As senhas não coincidem.", "error");
      }

      if (
        !(
          this.passwordSecurity.hasLenght8 &&
          this.passwordSecurity.hasUpper &&
          this.passwordSecurity.hasLower &&
          this.passwordSecurity.hasNumber
        )
      ) {
        return alertInstance("3000", "Senha não segura", "error");
      }

      try {
        await axiosInstance.patch("/auth/update_senha_padrao", this.form, {
          headers: {
            Authorization: `Bearer ${useAuth.token}`,
          },
        });

        redirectPattern()
      } catch (err) {
        console.log(err)
        this.error_senha = err.response.data.errors;
        alertInstance("3000", "deu ruim", "error");
      }
    },
    verifySenha() {
      if (this.form.senha.length < 8) {
        this.passwordSecurity.hasLenght8 = false;
      } else {
        this.passwordSecurity.hasLenght8 = true;
      }

      if (!/[A-Z]/.test(this.form.senha)) {
        this.passwordSecurity.hasUpper = false;
      } else {
        this.passwordSecurity.hasUpper = true;
      }

      if (!/[a-z]/.test(this.form.senha)) {
        this.passwordSecurity.hasLower = false;
      } else {
        this.passwordSecurity.hasLower = true;
      }

      if (!/[0-9]/.test(this.form.senha)) {
        this.passwordSecurity.hasNumber = false;
      } else {
        this.passwordSecurity.hasNumber = true;
      }
    },
  },
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Poppins:wght@300;400;500&display=swap");

.label-input {
  background-color: #ecf8f1;
  display: flex;
  align-items: center;
  margin: 8px;
  padding: 4px;
  border-radius: 20px;
}

.cor {
  color: #808080;
}

.label-input input {
  outline: none;
}

.logo {
  margin-bottom: 1px;
  margin-left: 110px;
}

.img {
  width: 5px;
}

.conteudo {
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-container {
  width: 450px;
  height: 590px;
  background-color: #92fb97;
  box-shadow: rgba(202, 240, 195, 0.35) 0px 5px 15px;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 20px 30px;
  /* margin-top:50px; */
}

.title {
  text-align: center;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  margin: 10px 0 30px 0;
  font-size: 15px;
  font-weight: 800;
}

.form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 15px;
}

.input {
  border-radius: 20px;
  border: none;
  background-color: #ecf8f1;
  outline: 0 !important;
  box-sizing: border-box;
  padding: 5px;
}

.form-btn {
  padding: 10px 15px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  border-radius: 20px;
  border: 0 !important;
  outline: 0 !important;
  background: var(--primary-alt);
  color: white;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin-top: 40px;
}
.form-btn:hover {
  background: var(--dark-alt);
  transition: 0.5s;
  box-shadow: rgba(0, 0, 0, 0.24) 8px 8px 8px;
}

.form-btn:active {
  box-shadow: none;
}

.error_senha {
  color: rgb(138, 0, 0);
}

.error_senha li {
  font-size: 0.8rem;
  transition: 0.4s all ease-in-out;
}

.error_senha li.possui {
  color: green;
}
</style>