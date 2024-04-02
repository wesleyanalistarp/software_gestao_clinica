<template>
      <div class="body">
        <div class="card ">
          <div class="card2">
            <form class="form" @submit.prevent="submit">
              <p id="heading">Você está com a senha padrão. Por favor, altere-a</p>
              <div class="field">
                <svg viewBox="0 0 16 16" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg"
                  class="input-icon">
                  <path
                    d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z">
                  </path>
                </svg>

                <input type="password" v-model="form.senha" class="input-field" placeholder="Nova senha"
                  autocomplete="off" />
              </div>
              <div class="field">
                <svg viewBox="0 0 16 16" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg"
                  class="input-icon">
                  <path
                    d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z">
                  </path>
                </svg>
                <input type="password" v-model="form.confirmSenha" class="input-field" placeholder="Confirmar senha" />
              </div>
              <button class="button3">Alterar e salvar</button>
            </form>
          </div>
        </div>
      </div>
</template>

<script>
import { defineComponent } from "vue";
import { alertInstance } from "../config/alerts";

export default defineComponent({
  name: "AlterarSenha",
  data() {
    return {
      form: {
        senha: '',
        confirmSenha: ''
      }
    };
  },
  methods: {
    submit() {

      if (this.form.senha === this.form.confirmSenha) {



      } else {

        alertInstance('3000', 'As senhas não coincidem.', 'error')

      }

    }
  },
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Poppins:wght@300;400;500&display=swap");


.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 2em;
  padding-right: 2em;
  padding-bottom: 0.4em;
  margin-top:120px;
  background-color: #171717;
  border-radius: 25px;
  transition: 0.4s ease-in-out;
}

.body {
  background-color: #171717;
}

.card {
  background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
  transition: all 0.3s;
  width: 552px;
  height:550px;
  margin-left: 380px;
  margin-top:20px;

}

.card2 {
  border-radius: 0;
  transition: all 0.2s;
  width:550px;
}

.card2:hover {
  transform: scale(0.98);
  border-radius: 20px;
}

.card:hover {
  box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.3);
}

#heading {
  text-align: center;
  margin: 2em;
  color: rgb(255, 255, 255);
  font-size: 1.2em;
}

.field {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  border-radius: 25px;
  padding: 0.6em;
  border: none;
  outline: none;
  color: white;
  background-color: #171717;
  box-shadow: inset 2px 5px 10px rgb(5, 5, 5);
}

.input-icon {
  height: 1.3em;
  width: 1.3em;
  fill: white;
}

.input-field {
  background: none;
  border: none;
  outline: none;
  width: 100%;
  color: #d3d3d3;
}

.form .btn {
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top: 2.5em;
}

.button1 {
  padding: 0.5em;
  padding-left: 1.1em;
  padding-right: 1.1em;
  border-radius: 5px;
  margin-right: 0.5em;
  border: none;
  outline: none;
  transition: 0.4s ease-in-out;
  background-color: #252525;
  color: white;
}

.button1:hover {
  background-color: black;
  color: white;
}

.button2 {
  padding: 0.5em;
  padding-left: 2.3em;
  padding-right: 2.3em;
  border-radius: 5px;
  border: none;
  outline: none;
  transition: 0.4s ease-in-out;
  background-color: #252525;
  color: white;
}

.button2:hover {
  background-color: black;
  color: white;
}

.button3 {
  margin-bottom: 3em;
  padding: 0.5em;
  border-radius: 5px;
  border: none;
  outline: none;
  transition: 0.4s ease-in-out;
  background-color: #252525;
  color: white;
}

.button3:hover {
  background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
  /* background-color: red; */
  transition: 0.5s ease-in-out;
  transform: scale(0.98);
  color: white;
}
</style>