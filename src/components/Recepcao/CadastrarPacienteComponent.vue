<template>
  <div>
    <div class="card-body mt-2">
      <div class="card p-3">
        <div class="text-center h4 mt-2 mb-3">
          Formulário de cadastro do paciente
        </div>
        <form @submit.prevent="cadastrarPaciente" ref="formContainer">
          <fieldset class="border rounded-3 h6 p-3">
            <legend class="float-none w-auto px-3 h6">Informações</legend>
            <div class="row">
              <div class="mb-2 mt-2 col-4">
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

              <div class="mb-3 mt-2 col-3">
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
              <div class="mb-3 mt-2 col-3">
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
              <div class="mb-3 mt-2 col-2">
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
              <div class="mb-3 mt-2 col-4">
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
              <div class="mb-3 mt-2 col-4">
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
              <div class="mb-3 mt-2 col-4">
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

              <div class="mb-3 mt-2 col-2">
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

              <div class="mb-3 mt-2 col-5">
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

              <div class="mb-3 mt-2 col-5">
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
              <div class="mb-3 mt-2 col-4">
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
              <div class="mb-3 mt-2 col-4">
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
            </div>
          </fieldset>
          <br />
          <!--declaração do endereço do paciente-->
          <fieldset class="border rounded-3 h6 p-3">
            <legend class="float-none w-auto px-3 h6">Endereço</legend>

            <div class="row">
              <div class="mb-3 mt-2 col-3">
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
              <div class="mb-3 mt-2 col-3">
                <label for="uf" class="form-label">UF</label>
                <input
                  class="form-control form-select-sm"
                  id="uf"
                  v-model="form.uf"
                  placeholder="UF"
                  required
                />
              </div>
              <div class="mb-3 mt-2 col-6">
                <label for="cidade" class="form-label">Cidade</label>
                <input
                  class="form-control form-select-sm"
                  v-model="form.cidade"
                  placeholder="Nome da cidade"
                  required
                />
              </div>
              <div class="mb-3 mt-2 col-4">
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
              <div class="mb-3 mt-2 col-5">
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
              <div class="mb-3 mt-2 col-3">
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
          <!--decalração do convênio do paciente-->
          <fieldset class="border rounded-3 h6 p-3">
            <legend class="float-none w-auto px-3 h6">Convênio</legend>
            <div class="row">
              <div class="mb-3 mt-2 col-2">
                <label for="exampleInputEmail1" class="form-label"
                  >Tipo do Convênio</label
                >
                <select
                  class="form-select form-select-sm"
                  aria-label="Small select example"
                >
                  <option selected>Selecione</option>
                  <option value="1">Unimed</option>
                  <option value="2">Sulamérica</option>
                  <option value="3">Bradesco</option>
                </select>
              </div>
              <div class="mb-3 mt-2 col-3">
                <label for="exampleInputEmail1" class="form-label"
                  >Matrícula</label
                >
                <input
                  type="text"
                  class="form-control form-control-sm"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Número da matrícula"
                />
              </div>
              <div class="mb-3 mt-2 col-2">
                <label for="exampleInputEmail1" class="form-label">Nº</label>
                <input
                  type="number"
                  class="form-control form-control-sm"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Digite o número"
                />
              </div>
              <div class="mb-3 mt-2 col-2">
                <label for="exampleInputEmail1" class="form-label"
                  >Procedimento</label
                >
                <select
                  class="form-select form-select-sm"
                  aria-label="Small select example"
                >
                  <option selected>Selecione</option>
                  <option value="1">Puxar do banco</option>
                </select>
              </div>
              <div class="mb-3 mt-2 col-3">
                <label for="exampleInputEmail1" class="form-label"
                  >Registro</label
                >
                <input
                  type="text"
                  class="form-control form-control-sm"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Digite o registro"
                />
              </div>
              <br />
            </div>
          </fieldset>
          <br />
          <div class="button">
            <button type="submit" class="btn btn-outline-success">
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
import { alertInstance } from "../../config/alerts.js";
import api from "../../config/axios.js";
import axios from "axios";
import moment from "moment";

export default defineComponent({
  name: "CadastrarPacienteComponent",
  data() {
    return {
      form: {
        nome: "Kauã Victor Lima de Oliveira",
        data_nascimento: "2003-10-19",
        rg: "34131231",
        escolaridade: "",
        cpf: "079.824.805-00",
        sexo: "M",
        sus: "574236579261111",
        estado_civil: "",
        raca_cor: "",
        naturalidade: "",
        filiacao: "Maria dos Santos Lima",

        celular: "(77) 99983-1299",

        rua: "",
        bairro: "",
        cidade: "",
        uf: "",
        cep: "",
        numero: "",
        codigo_ibge: null,
      },
      uf_naturalidade: "",
      estados: [],
      municipios: [],
    };
  },
  mounted() {
    this.buscaEstados();
  },
  methods: {
    formatarCampo(e, campo) {
      this.form[e.currentTarget.dataset.mascara] = masks[campo](
        this.form[e.target.id]
      );
    },
    cadastrarPaciente() {
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
      };

      api
        .post("/paciente/create", data, )
        .then((response) => {
          alertInstance(4000, "Paciente Cadastrado com sucesso", "success");
          this.resetform();
        })
        .catch((err) => {
          console.log("deu ruim");
          console.log(err);
        })
        .finally(() => {
          loader.hide();
        });
    },
    consultaCep() {
      
      let cep = masks.maskNumero(this.form.cep);
      if (cep.length === 8) {
        let loader = this.$loading.show();
        axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((response) => {
          if (response.data.erro) {
            this.form.cep = "";
            alertInstance(
              4000,
              "CEP inválido! Por favor, digite outro CEP.",
              "error"
            );
            return;
          }

          this.form.rua = response.data.logradouro;
          this.form.cidade = response.data.localidade;
          this.form.uf = response.data.uf;
          this.form.bairro = response.data.bairro;
          this.form.codigo_ibge = response.data.ibge;

          loader.hide();
        });
      }
    },
    buscaEstados() {
      axios
        .get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then((response) => {
          this.estados = response.data.sort((a, b) =>
            a.sigla.localeCompare(b.sigla)
          );
        });
    },
    buscaMunicipios() {
      if (!isNaN(this.uf_naturalidade)) {
        axios
          .get(
            `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${this.uf_naturalidade}/municipios`
          )
          .then((response) => {
            this.municipios = response.data.sort((a, b) =>
              a.nome.localeCompare(b.nome)
            );
          });
      }
    },
    resetform() {
      this.uf_naturalidade = "";
      for (let key in this.form) {
        if (this.form.hasOwnProperty(key)) {
          this.form[key] = "";
        }
      }
    },
  },
});
</script>