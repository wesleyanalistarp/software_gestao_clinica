<template>
  <div class="container">
    <div class="content">
      <h1>Você está com a senha padrão. Por favor, altere-a</h1>
      <form @submit.prevent="submit">
        
        <div class="form-group">
          <label for="">Senha</label>
          <input type="password" v-model="form.senha" class="form-control">
        </div>

        <div class="form-group">
          <label for="">Confirme a senha</label>
          <input type="password" v-model="form.confirmSenha" class="form-control">
        </div>

        <button type="submit" class="btn btn-primary">Alterar</button>

      </form>
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


</style>