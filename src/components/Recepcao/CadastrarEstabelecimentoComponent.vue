<template>
  <div class="card-body mt-2">
    <div class="card mt-2 p-3">
      <div class="text-center h4 mt-2 mb-3">
        Formulário de Cadastro da Clínica
      </div>
      <form @submit.prevent="submit">
        <fieldset class="border rounded-3 h6 p-3">
          <legend class="float-none w-auto px-3 h6">Formulário</legend>
          <div class="row">
            <div class="mb-2 mt-2 col-md-4 col-12">
              <label for="nome" class="form-label">Nome</label>
              <input
                type="text"
                class="form-control form-control-sm"
                id="nome"
                v-model="form.nome"
                placeholder="Digite o nome da clínica"
                required
              />
            </div>
            <div class="mb-2 mt-2 col-md-4 col-2">
              <label for="nome" class="form-label">CNES</label>
              <input
                type="text"
                class="form-control form-control-sm"
                id="cnes"
                v-model="form.cnes"
                placeholder="Cadastro nacional de estabelecimentos de saúde"
                required
              />
            </div>
            <div class="mb-2 mt-2 col-md-4 col-2">
              <label for="nome" class="form-label">CNPJ</label>
              <input
                type="number"
                class="form-control form-control-sm"
                id="cnpj"
                v-model="form.cnpj"
                placeholder="Digite o CNPJ"
                required
              />
            </div>
            <div class="mb-2 mt-2 col-md-4 col-12">
              <label for="nome" class="form-label">Nome Empresarial</label>
              <input
                type="text"
                class="form-control form-control-sm"
                id="nomeEmpresarial"
                v-model="form.nomeEmpresarial"
                placeholder="Digite o nome empresarial"
                required
              />
            </div>
            <div class="mb-2 mt-2 col-md-4 col-12">
              <label for="nome" class="form-label"
                >Natureza Jurídica (Grupo)</label
              >
              <input
                type="text"
                class="form-control form-control-sm"
                id="natureza"
                v-model="form.naturezaJuridica"
                placeholder="Digite a natureza"
              />
            </div>
            <div class="mb-2 mt-2 col-md-4 col-12">
              <label for="nome" class="form-label">Logradouro</label>
              <input
                type="text"
                class="form-control form-control-sm"
                id="logradouro"
                v-model="form.logradouro"
                placeholder="Avenida, rua/"
              />
            </div>
            <div class="mb-2 mt-2 col-md-4 col-2">
              <label for="nome" class="form-label">Número</label>
              <input
                type="number"
                class="form-control form-control-sm"
                id="numero"
                v-model="form.numero"
                placeholder="Digite o número"
              />
            </div>
            <div class="mb-2 mt-2 col-md-4 col-3">
              <label for="nome" class="form-label">Complemento</label>
              <input
                type="text"
                class="form-control form-control-sm"
                id="complemento"
                v-model="form.complemento"
                placeholder="Digite o complemento"
              />
            </div>
            <div class="mb-2 mt-2 col-md-4 col-4">
              <label for="nome" class="form-label">Bairro</label>
              <input
                type="text"
                class="form-control form-control-sm"
                id="bairro"
                v-model="form.bairro"
                placeholder="Digite o bairro"
              />
            </div>
            <div class="mb-2 mt-2 col-md-4 col-4">
              <label for="nome" class="form-label">Município</label>
              <input
                type="text"
                class="form-control form-control-sm"
                id="municipio"
                v-model="form.municipio"
                placeholder="Digite o município"
              />
            </div>
            <div class="mb-2 mt-2 col-md-4 col-2">
              <label for="nome" class="form-label">UF</label>
              <input
                type="text"
                class="form-control form-control-sm"
                id="uf"
                v-model="form.uf"
                placeholder="Digite a UF"
              />
            </div>
            <div class="mb-2 mt-2 col-md-4 col-3">
              <label for="nome" class="form-label">CEP</label>
              <input
                type="text"
                class="form-control form-control-sm"
                id="cep"
                v-model="form.cep"
                placeholder="Digite o cep"
              />
            </div>
            <div class="mb-2 mt-2 col-md-4 col-3">
              <label for="nome" class="form-label">Telefone</label>
              <input
                type="number"
                class="form-control form-control-sm"
                id="telefone"
                v-model="form.telefone"
                placeholder="Digite o telefone"
              />
            </div>
            <div class="mb-2 mt-2 col-md-4 col-3">
              <label for="nome" class="form-label">Dependência</label>
              <input
                type="text"
                class="form-control form-control-sm"
                id="dependencia"
                v-model="form.dependencia"
                placeholder="Individual/"
              />
            </div>
            <div class="mb-2 mt-2 col-md-4 col-2">
              <label for="nome" class="form-label">Regional de saúde</label>
              <input
                type="text"
                class="form-control form-control-sm"
                id="regional"
                v-model="form.regionalSaude"
                placeholder="Digite o número da regional "
              />
            </div>
            <div class="mb-2 mt-2 col-md-4 col-3">
              <label for="nome" class="form-label"
                >Tipo de estabelecimento</label
              >
              <input
                type="text"
                class="form-control form-control-sm"
                id="estabelecimento"
                v-model="form.tipoEstabelecimento"
                placeholder="Policlínica/ "
              />
            </div>
            <div class="mb-2 mt-2 col-md-4 col-2">
              <label for="nome" class="form-label"
                >Subtipo de estabelecimento</label
              >
              <input
                type="text"
                class="form-control form-control-sm"
                id="subtipo"
                v-model="form.subtipoEstabelecimento"
                placeholder="Digite o subtipo "
              />
            </div>
            <div class="mb-2 mt-2 col-md-4 col-3">
              <label for="nome" class="form-label">Gestão</label>
              <input
                type="text"
                class="form-control form-control-sm"
                id="gestao"
                v-model="form.gestao"
                placeholder="Municipal/ "
              />
            </div>
          </div>
        </fieldset>
        <button
          type="button"
          class="btn btn-outline-success mt-3"
          @click="submit"
          style="height: 40px; width: 120px; margin: 10px 20px"
        >
          Salvar
        </button>
      </form>
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
  name: "CadastrarEstabelecimentoComponent",
  data() {
    return {
      form: {
        nome: "",
        nomeEmpresarial: "",
        cnes: "",
        naturezaJuridica: "",
        cnpj: "",
        logradouro: "",
        numero: "",
        complemento: "",
        bairro: "",
        municipio: "",
        uf: "",
        cep: "",
        telefone: "",
        dependencia: "",
        regionalSaude: "",
        tipoEstabelecimento: "",
        subtipoEstabelecimento: "",
        gestao: "",
      },
    };
  },

  methods: {
    submit() {
      const data = {
        nome: this.form.nome,
        nome_empresarial: this.form.nomeEmpresarial,
        cnes: this.form.cnes,
        natureza_juridica: this.form.naturezaJuridica,
        cnpj: this.form.cnpj,
        logradouro: this.form.logradouro,
        numero: this.form.numero,
        complemento: this.form.complemento,
        bairro: this.form.bairro,
        municipio: this.form.municipio,
        uf: this.form.uf,
        cep: this.form.cep,
        telefone: this.form.telefone,
        dependencia: this.form.dependencia,
        regional_saude: this.form.regionalSaude,
        tipo_estabelecimento: this.form.tipoEstabelecimento,
        subtipo_estabelecimento: this.form.subtipoEstabelecimento,
        gestao: this.form.gestao,
      };

      console.log(data.cnpj);

      axiosInstance
        .post("/clinica/create", data, {
          headers: {
            Authorization: `Bearer ${useAuth.token}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          alertInstance(
            4000,
            "Estabelecimento cadastrado com sucesso!",
            "success"
          );
          this.resetForm();
        })
        .catch((error) => {
          console.log("deu ruim");
          console.log(error);
        });
    },

    resetForm() {
      for (let key in this.form) {
        if (this.form.hasOwnProperty(key)) {
          this.form[key] = "";
        }
      }
    },
  },
});
</script>
