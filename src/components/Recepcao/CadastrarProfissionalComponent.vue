<template>
  <div class="mt-2 mb-4">
    <div class="card p-3">
      <div class="card-body">
        <div class="text-center h4">Formulário de Cadastro do Profissional</div>
        <form @submit.prevent="submit" ref="formContainer">
          <fieldset class="border rounded-3 h6 p-3">
            <legend class="float-none w-auto px-3 h6">Perfil</legend>
            <div class="row" id="checks_perfil">
              <div>
                <div
                  class="form-check form-check-inline"
                  v-for="(perfil, index) in perfis"
                  :key="index"
                >
                  <input
                    class="form-check-input"
                    type="checkbox"
                    @change="clickPerfil"
                    :id="index"
                    :value="perfil.id"
                    v-model="form.perfil"
                  />
                  <label class="form-check-label" :for="index">{{
                    perfil.nome
                  }}</label>
                </div>
              </div>
            </div>
          </fieldset>
          <br />
          <fieldset class="border rounded-3 h6 p-3">
            <legend class="float-none w-auto px-3 h6">Informações</legend>
            <div class="row">
              <div class="mb-2 mt-2 col-md-4 col-12">
                <label for="nome" class="form-label">Nome</label>
                <input
                  type="text"
                  v-model="form.nome"
                  class="form-control form-control-sm"
                  id="nome"
                  placeholder="Digite o nome do paciente"
                  required
                />
              </div>

              <div class="mb-3 mt-2 col-md-3 col-6">
                <label for="celular" class="form-label">Telefone</label>
                <input
                  type="text"
                  class="form-control form-control-sm"
                  v-model="form.celular"
                  data-mascara="celular"
                  @input="formatarCampo($event, 'maskTelefone')"
                  id="celular"
                  placeholder="Digite o número"
                  required
                />
              </div>
              <div class="mb-3 mt-2 col-md-3 col-6">
                <label for="cpf" class="form-label">CPF</label>
                <input
                  type="text"
                  v-model="form.cpf"
                  data-mascara="cpf"
                  @input="formatarCampo($event, 'maskCpf')"
                  class="form-control form-control-sm"
                  id="cpf"
                  placeholder="Digite o CPF"
                  required
                />
              </div>
              <div class="mb-3 mt-2 col-md-2 col-6">
                <label for="data_nascimento" class="form-label"
                  >Data de Nascimento</label
                >
                <input
                  type="date"
                  v-model="form.data_nascimento"
                  class="form-control form-control-sm"
                  id="data_nascimento"
                  required
                />
              </div>
              <div class="mb-3 mt-2 col-md-4 col-6">
                <label for="filiacao" class="form-label">Nome da mãe</label>
                <input
                  type="text"
                  class="form-control form-control-sm"
                  id="filiacao"
                  v-model="form.filiacao"
                  placeholder="Digite o nome da mãe"
                  required
                />
              </div>
              <div class="mb-3 mt-2 col-md-4 col-6">
                <label for="rg" class="form-label">RG</label>
                <input
                  type="text"
                  class="form-control form-control-sm"
                  v-model="form.rg"
                  data-mascara="rg"
                  @input="formatarCampo($event, 'maskNumero')"
                  id="rg"
                  placeholder="Digite o número"
                  required
                />
              </div>
              <div class="mb-3 mt-2 col-md-4 col-6">
                <label for="sus" class="form-label">CNS</label>
                <input
                  type="text"
                  class="form-control form-control-sm"
                  v-model="form.sus"
                  data-mascara="sus"
                  @input="formatarCampo($event, 'maskSus')"
                  id="sus"
                  placeholder="Número do cartão do SUS"
                  required
                />
              </div>

              <div class="mb-3 mt-2 col-md-2 col-6">
                <label for="estado_civil" class="form-label">
                  UF Naturalidade
                </label>
                <select
                  class="form-select form-select-sm"
                  id="estado_civil"
                  v-model="uf_naturalidade"
                  @change="buscaMunicipios()"
                  aria-label="Small select example"
                  required
                >
                  <option value="">Selecione uma UF</option>
                  <option
                    v-for="(uf, index) in estados"
                    :key="index"
                    :value="uf.id"
                  >
                    {{ uf.sigla }}
                  </option>
                </select>
              </div>

              <div class="mb-3 mt-2 col-md-5 col-6">
                <label for="estado_civil" class="form-label">
                  Naturalidade
                </label>
                <select
                  class="form-select form-select-sm"
                  id="estado_civil"
                  v-model="form.naturalidade"
                  aria-label="Small select example"
                  required
                >
                  <option v-if="uf_naturalidade" value="">
                    Selecione uma Cidade
                  </option>
                  <option v-if="!uf_naturalidade" value="">
                    Selecione uma UF
                  </option>

                  <option
                    v-for="(municipio, index) in municipios"
                    :key="index"
                    :value="municipio.id"
                  >
                    {{ municipio.nome }}
                  </option>
                </select>
              </div>

              <div class="mb-3 mt-2 col-md-5 col-6">
                <label for="estado_civil" class="form-label">
                  Estado Civil
                </label>
                <select
                  class="form-select form-select-sm"
                  id="estado_civil"
                  v-model="form.estado_civil"
                  aria-label="Small select example"
                  required
                >
                  <option value="">Selecione</option>
                  <option value="1">Solteiro(a)</option>
                  <option value="2">Casado(a)</option>
                  <option value="3">Divorciado(a)</option>
                  <option value="4">Viúvo(a)</option>
                  <option value="5">União Estável</option>
                </select>
              </div>
              <div class="mb-3 mt-2 col-md-4 col-6">
                <label for="sexo" class="form-label">Sexo</label>
                <select
                  class="form-select form-select-sm"
                  id="sexo"
                  v-model="form.sexo"
                  aria-label="Small select example"
                  required
                >
                  <option value="">Selecione</option>
                  <option value="M">Masculino</option>
                  <option value="F">Feminino</option>
                  <option value="O">Outros</option>
                </select>
              </div>
              <div class="mb-3 mt-2 col-md-4 col-6">
                <label for="escolaridade" class="form-label">
                  Escolaridade
                </label>
                <select
                  class="form-select form-select-sm"
                  id="escolaridade"
                  v-model="form.escolaridade"
                  aria-label="Small select example"
                  required
                >
                  <option value="">Selecione</option>
                  <option value="1">Não alfabetizado</option>
                  <option value="2">Ensino fundamental completo</option>
                  <option value="3">Ensino fundamental incompleto</option>
                  <option value="4">Ensino médio completo</option>
                  <option value="4">Ensino médio incompleto</option>
                  <option value="4">Nível superior completo</option>
                  <option value="4">Nível superior incompleto</option>
                </select>
              </div>
              <div class="mb-3 mt-2 col-4">
                <label for="escolaridade" class="form-label">Raça/Cor</label>
                <select
                  class="form-select form-select-sm"
                  id="escolaridade"
                  v-model="form.raca_cor"
                  aria-label="Small select example"
                  required
                >
                  <option value="">Selecione</option>
                  <option value="1">Preta</option>
                  <option value="2">Parda</option>
                  <option value="3">Branca</option>
                  <option value="4">Amarela</option>
                  <option value="5">Indígena</option>
                </select>
              </div>

              <div class="mb-3 mt-2 col-md-6 col-12" v-show="isMedico">
                <label for="exampleInputEmail1" class="form-label"
                  >Especialidade</label
                >
                <select
                  class="form-control choices-multiple"
                  v-model="form.especialidade"
                  id="select-especialidade"
                  multiple
                  :required="isMedico"
                >
                  <option
                    :value="especialidade.id"
                    v-for="(especialidade, index) in especialidades"
                    :key="index"
                  >
                    {{ especialidade.nome }}
                  </option>
                </select>
              </div>

              <div class="mb-3 mt-2 col-md-3 col-12" v-show="isMedico">
                <label for="crm" class="form-label">CRM</label>
                <input
                  type="text"
                  class="form-control form-control-sm"
                  id="crm"
                  v-model="form.crm"
                  placeholder="Digite o número do CRM"
                  :required="isMedico"
                />
              </div>
              <div class="mb-3 mt-2 col-md-3 col-12" v-show="isMedico">
                <label for="cbo" class="form-label">CBO</label>
                <input
                  type="text"
                  class="form-control form-control-sm"
                  id="cbo"
                  @input="formatarCampo($event, 'maskNumero')"
                  data-mascara="cbo"
                  maxlength="6"
                  placeholder="Digite o número do CBO"
                  v-model="form.cbo"
                  :required="isMedico"
                />
              </div>
            </div>
          </fieldset>
          <!--declaração do endereço do paciente-->
          <fieldset class="border rounded-3 h6 p-3">
            <legend class="float-none w-auto px-3 h6">Endereço</legend>

            <div class="row">
              <div class="mb-3 mt-2 col-md-3 col-6">
                <label for="cep" class="form-label">CEP</label>
                <input
                  type="text"
                  class="form-control form-control-sm"
                  id="cep"
                  v-model="form.cep"
                  data-mascara="cep"
                  @input="
                    formatarCampo($event, 'maskCep');
                    consultaCep();
                  "
                  autocomplete="off"
                  placeholder="Cep da cidade"
                  required
                />
              </div>
              <div class="mb-3 mt-2 col-md-3 col-6">
                <label for="uf" class="form-label">UF</label>
                <input
                  class="form-control form-select-sm"
                  id="uf"
                  v-model="form.uf"
                  placeholder="UF"
                  required
                />
              </div>
              <div class="mb-3 mt-2 col-md-6 col-6">
                <label for="cidade" class="form-label">Cidade</label>
                <input
                  class="form-control form-select-sm"
                  v-model="form.cidade"
                  placeholder="Nome da cidade"
                  required
                />
              </div>
              <div class="mb-3 mt-2 col-md-4 col-6">
                <label for="bairro" class="form-label">Bairro</label>
                <input
                  type="text"
                  class="form-control form-control-sm"
                  id="bairro"
                  v-model="form.bairro"
                  placeholder="Nome do bairro"
                  required
                />
              </div>
              <div class="mb-3 mt-2 col-md-5 col-8">
                <label for="rua" class="form-label">Rua</label>
                <input
                  type="text"
                  class="form-control form-control-sm"
                  id="rua"
                  v-model="form.rua"
                  placeholder="Nome da rua"
                  required
                />
              </div>
              <div class="mb-3 mt-2 col-md-3 col-4">
                <label for="numero" class="form-label">Número</label>
                <input
                  type="text"
                  class="form-control form-control-sm"
                  id="numero"
                  v-model="form.numero"
                  placeholder="Número"
                  required
                />
              </div>
            </div>
          </fieldset>
          <br />

          <div class="button">
            <button
              type="submit"
              class="btn btn-outline-success"
              style="height: 40px; width: 120px; margin: 10px"
            >
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { masks } from "../../utils/mascara.js";
import { alertInstance, alertModal } from "../../config/alerts.js";
import api from "../../config/axios.js";
import Choices from "choices.js";
import {
  buscaCep,
  buscaEstados,
  buscaMunicipios,
} from "../../utils/requests.js";
import moment from "moment";

export default defineComponent({
  name: "CadastrarProfissionalComponent",
  data() {
    return {
      form: {
        nome: "Kauã",
        data_nascimento: "2003-10-19",
        rg: "151341234",
        escolaridade: "1",
        cpf: "12312312311",
        sexo: "M",
        sus: "12312312312",
        estado_civil: "1",
        raca_cor: "1",
        naturalidade: "",
        filiacao: "Mãe",

        celular: "12122121212",

        crm: "",
        cbo: "",
        especialidade: [],

        rua: "",
        bairro: "",
        cidade: "",
        uf: "",
        cep: "",
        numero: "",
        codigo_ibge: null,
        perfil: [],
      },
      uf_naturalidade: "",
      estados: [],
      municipios: [],
      perfis: [],
      especialidades: [],
      isMedico: false,
    };
  },
  async mounted() {
    await this.buscaEstados();
    await this.buscaPerfis();
    await this.buscaEspecialidades();

    const selectElement = document.querySelector("#select-especialidade");
    const choices = new Choices(selectElement);
  },
  computed: {
    isAtLeastOneSelected() {
      return this.form.perfil.length > 0; // verifica se pelo menos uma opção está selecionada
    },
  },
  methods: {
    formatarCampo(e, campo) {
      this.form[e.currentTarget.dataset.mascara] = masks[campo](
        this.form[e.target.id]
      );
    },
    submit() {
      if (!this.isAtLeastOneSelected) {
        alertInstance(
          3000,
          "É necessário informar pelo menos um perfil",
          "info"
        );
        const element = document.getElementById("content");

        console.log(
          element.scroll({ top: 0, behavior: "smooth" })
        );
      }

      let loader = this.$loading.show();
      const data = {
        nome: this.form.nome,
        data_nascimento: moment(this.form.data_nascimento).format("YYYY-MM-DD"),
        cpf: masks.maskNumero(this.form.cpf),
        raca_cor: parseInt(this.form.raca_cor),
        naturalidade: parseInt(this.form.naturalidade),
        celular: masks.maskNumero(this.form.celular),
        rua: this.form.rua,
        bairro: this.form.bairro,
        cidade: this.form.cidade,
        uf: this.form.uf,
        codigo_ibge: parseInt(this.form.codigo_ibge),
        cep: masks.maskNumero(this.form.cep),
        numero: this.form.numero,
        rg: masks.maskNumero(this.form.rg),
        sexo: this.form.sexo,
        sus: masks.maskNumero(this.form.sus),
        estado_civil: parseInt(this.form.estado_civil),
        escolaridade: parseInt(this.form.escolaridade),
        filiacao: this.form.filiacao,
        perfil: this.form.perfil,
        especialidade: this.form.especialidade,
        crm: this.form.crm,
        cbo: this.form.cbo,
      };

      api
        .post("/profissional/create", data)
        .then((response) => {
          this.resetform();

          console.log(response.data);

          alertModal(
            "Profissional Cadastrado",
            `
            <h2>Dados de acesso:</h2>
            <strong>Login:</strong> ${response.data.login}<br>
            <strong>Senha:</strong> ${response.data.senha}
          `,
            "success"
          );
        })
        .catch((err) => {
          alertInstance('3000', 'Ocorreu um erro ao salvar o profissional.', 'error')
          console.log(err);
        })
        .finally(() => {
          loader.hide();
        });
    },
    async buscaPerfis() {
      try {
        let response = await api.get("/permissao/perfil/findAll");
        this.perfis = response.data.perfil;
      } catch (err) {
        alertInstance(1500, err.message, "error");
      }
    },
    async buscaEspecialidades() {
      try {
        let response = await api.get("/profissional/especialidade/findAll");
        this.especialidades = response.data.especialidades;
      } catch (err) {
        alertInstance(1500, err.message, "error");
      }
    },
    async consultaCep() {
      let cep = masks.maskNumero(this.form.cep);
      if (cep.length === 8) {
        let loader = this.$loading.show();

        let endereco = await buscaCep(cep);

        if (!endereco) {
          alertInstance(
            4000,
            "CEP inválido! Por favor, digite outro CEP.",
            "error"
          );
          this.form.cep = "";
          loader.hide();
          return;
        }

        this.form.rua = endereco.logradouro;
        this.form.cidade = endereco.localidade;
        this.form.uf = endereco.uf;
        this.form.bairro = endereco.bairro;
        this.form.codigo_ibge = endereco.ibge;
        alertInstance(2000, "Endereço Preenchido", "info");

        loader.hide();
      }
    },
    async buscaEstados() {
      let estados = await buscaEstados();
      this.estados = estados.sort((a, b) => a.sigla.localeCompare(b.sigla));
    },
    async buscaMunicipios() {
      console.log(this.form);
      if (!isNaN(this.uf_naturalidade)) {
        let municipios = await buscaMunicipios(this.uf_naturalidade);
        this.municipios = municipios.sort((a, b) =>
          a.nome.localeCompare(b.nome)
        );
      }
    },
    async clickPerfil() {
      let isMedico = false;
      this.form.perfil.forEach((value) => {
        let perfil = this.perfis.find((pe) => pe.id == value);

        if (perfil.codigo == "002") {
          isMedico = true;
        }
      });
      this.isMedico = isMedico;
    },
    resetform() {
      this.uf_naturalidade = "";
      for (let key in this.form) {
        if (this.form.hasOwnProperty(key)) {
          if (typeof this.form[key] === "object") {
            this.form[key] = {};
          } else if (typeof this.form[key] === "array") {
            this.form[key] = [];
          } else {
            this.form[key] = "";
          }
        }
      }
    },
  },
});
</script>

<style lang="css">
@import "choices.js/public/assets/styles/choices.min.css";

.choices__list--multiple .choices__item {
  background-color: var(--dark) !important;
}
</style>