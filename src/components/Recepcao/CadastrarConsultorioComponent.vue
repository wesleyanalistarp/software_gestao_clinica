<template>
  <div>
    <div class="container-fluid">
      <div class="card p-3 mt-3">
        <div class="card">
          <div class="text-center h4 mt-2 mb-3">
            Formulário de Cadastro do Consultório
          </div>
          <form @submit.prevent="submit">
            <fieldset class="border rounded-3 h6 p-3 m-3">
              <legend class="float-none w-auto px-3 h6">
                Cadastrar Consultório
              </legend>
              <!-- <div class="row"> -->
              <div class="input-group mb-3">
                <input
                  id="nome"
                  type="text"
                  v-model="form.nome"
                  class="form-control"
                  placeholder="Nome do consultório"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  class="btn btn-outline-success"
                  type="button"
                  id="button-addon2"
                >
                  Adicionar
                </button>
              </div>
              <!-- </div> -->
            </fieldset>
            <fieldset class="border rounded-3 h6 p-3 m-3">
              <legend class="float-none w-auto px-3 h6">Cadastrar Sala</legend>
              <!-- <div class="row"> -->
              <div class="input-group mb-3">
                <input
                  id="sala"
                  type="text"
                  class="form-control"
                  v-model="form.sala"
                  placeholder="Nome da sala"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  class="btn btn-outline-success"
                  type="button"
                  id="button-addon2"
                >
                  Adicionar
                </button>
              </div>
              <!-- </div> -->
            </fieldset>
            <div class="button">
              <button
                type="submit"
                class="btn btn-outline-success"
                style="height: 40px; width: 120px; margin: 10px"
              >
                Salvar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import axiosInstance from "../../config/axios";
import { alertInstance } from "../../config/alerts";
import { useAuthStore } from "../../stores/AuthStore";
const useAuth = useAuthStore();

export default defineComponent({
  name: "CadastrarConsultorioComponent",
  data() {
    return {
      form: {
        nome: "",
        sala: "",
      },
    };
  },
  methods: {
    submit() {
      let loader = this.$loading.show();
      const data = {
        nome: this.form.nome,
        sala: this.form.sala,
      };

      axiosInstance
        .post("/consultorio/create", data, {
          headers: {
            Authorization: `Bearer ${useAuth.token}`,
          },
        })
        .then((response) => {
          alertInstance(4000, "Consultório cadastrado com sucesso!", "success");
          this.resetForm();
        })
        .catch((error) => {
          console.log("deu ruim");
          console.log(error);
        })
        .finally(() => {
          loader.hide();
        });
    },

    resetform() {
      for (let key in this.form) {
        if (this.form.hasOwnProperty(key)) {
          this.form[key] = "";
        }
      }
    },
  },
});
</script>
