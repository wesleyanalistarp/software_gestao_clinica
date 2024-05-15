<template>
  <div>
    <div class="card-body mt-2">
      <div class="card p-3">
        <div class="text-center h4 mt-2 mb-3">Emitir Ficha do Paciente</div>
        <form @submit.prevent="submit">
          <fieldset class="border rounded-3 h6 p-3">
            <legend class="float-none w-auto px-3 h6">Informações</legend>
            <div
              class="alert alert-warning alert-dismissible fade show"
              role="alert"
            >
              <strong>Atenção!</strong> Para fazer a ficha é necessário realizar
              o cadastro do paciente.
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>
            <div class="row">
              <div class="mb-2 mt-2 col-3">
                <label for="exampleInputEmail1" class="form-label"
                  >Paciente</label
                >
                <input
                  type="text"
                  v-model="form.nome"
                  class="form-control form-control-sm"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Nome do paciente"
                />
              </div>
              <div class="card col-2" style="background: #f2f2f2; height: 80px">
                <div class="form-check form-switch mt-4 text-center fw-bold">
                  <label class="form-check-label" for="flexSwitchCheckChecked"
                    >Consulta Retorno
                    <input
                      class="form-check-input"
                      v-model="form.retorno"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckChecked"
                    />
                  </label>
                </div>
              </div>
              <div class="mb-3 mt-2 col-2">
                <label for="exampleInputEmail1" class="form-label">sexo</label>
                <select
                  class="form-select form-select-sm"
                  aria-label="Small select example"
                  v-model="form.sexo"
                >
                  <option selected>Selecione</option>
                  <option value="1">Masculino</option>
                  <option value="2">Feminino</option>
                  <option value="3">Outros</option>
                </select>
              </div>
              <div class="mb-3 mt-2 col-2">
                <label for="exampleInputEmail1" class="form-label"
                  >Nascimento</label
                >
                <input
                  type="date"
                  v-model="form.nascimento"
                  class="form-control form-control-sm"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3 mt-2 col-2">
                <label for="exampleInputEmail1" class="form-label">Tipo</label>
                <select
                  class="form-select form-select-sm"
                  aria-label="Small select example"
                  v-model="form.tipo"
                >
                  <option selected>Selecione</option>
                  <option value="1">Consulta</option>
                  <option value="2">Exame</option>
                </select>
              </div>
              <div class="mb-3 mt-2 col-3">
                <label for="exampleInputEmail1" class="form-label">Exame</label>
                <select
                  v-model="selectedExame"
                  class="form-select form-select-sm"
                  aria-label="Small select example"
                >
                  <option
                    v-for="exame in exameOptions"
                    :value="exame.id"
                    :key="exame.id"
                  >
                    {{ exame.nome }}
                  </option>
                </select>
              </div>
              <div class="mb-3 mt-2 col-2">
                <label for="exampleInputEmail1" class="form-label"
                  >Comorbidade</label
                >
                <select
                  v-model="selectedComorbidade"
                  class="form-select form-select-sm"
                  aria-label="Small select example"
                >
                  <option
                    v-for="comorbidade in comorbidadesOptions"
                    :value="comorbidade.id"
                    :key="comorbidade.id"
                  >
                    {{ comorbidade.nome }}
                  </option>
                </select>
              </div>
              <div class="mb-3 mt-2 col-2">
                <label for="exampleInputEmail1" class="form-label"
                  >Prioridade</label
                >
                <select
                  class="form-select form-select-sm"
                  aria-label="Small select example"
                  v-model="form.prioridade"
                >
                  <option selected>Selecione</option>
                  <option value="1">Autismo</option>
                  <option value="2">Obeso</option>
                  <option value="3">Idoso(a)</option>
                  <option value="4">Gestante</option>
                </select>
              </div>
              <div class="mb-3 mt-2 col-3">
                <label for="exampleInputEmail1" class="form-label"
                  >Especialidade</label
                >
                <select
                  v-model="selectedEspecialidade"
                  class="form-select form-select-sm"
                  aria-label="Small select example"
                >
                  <option
                    v-for="especialidade in especialidadeOptions"
                    :value="especialidade.id"
                    :key="especialidade.id"
                  >
                    {{ especialidade.nome }}
                  </option>
                </select>
              </div>
              <div class="mb-3 mt-2 col-3">
                <label for="exampleInputEmail1" class="form-label"
                  >Profissional</label
                >
                <input
                  type="text"
                  v-model="form.profissional"
                  class="form-control form-control-sm"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Digite o nome do médico"
                />
              </div>
              <div class="mb-3 mt-2 col-2">
                <label for="exampleInputEmail1" class="form-label"
                  >Consultório</label
                >
                <select
                  v-model="selectedConsultorio"
                  class="form-select form-select-sm"
                  aria-label="Small select example"
                >
                  <option
                    v-for="consultorio in consultorioOptions"
                    :value="consultorio.id"
                    :key="consultorio.id"
                  >
                    {{ consultorio.nome }}
                  </option>
                </select>
              </div>
              <div class="mb-3 mt-2 col-2">
                <label for="exampleInputEmail1" class="form-label">Sala</label>
                <select
                  v-model="form.sala"
                  class="form-select form-select-sm"
                  aria-label="Small select example"
                >
                  <option selected>Selecione</option>
                  <option value="1">Buscar do banco</option>
                </select>
              </div>
              <div class="mb-2 mt-2 col-3">
                <label for="exampleInputEmail1" class="form-label"
                  >Alergia a medicamento?</label
                >
                <input
                  type="text"
                  v-model="form.alergia"
                  class="form-control form-control-sm"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Qual?"
                />
              </div>
              <div class="mb-2 mt-2 col-3">
                <label for="exampleInputEmail1" class="form-label"
                  >Toma medicação contínua ?</label
                >
                <input
                  type="text"
                  v-model="form.medicacaoContinua"
                  class="form-control form-control-sm"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Qual?"
                />
              </div>
              <div class="mb-2 mt-2 col-2">
                <label for="exampleInputEmail1" class="form-label">Mãe</label>
                <input
                  type="text"
                  v-model="form.mae"
                  class="form-control form-control-sm"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Nome"
                />
              </div>
              <div class="mb-2 mt-2 col-2">
                <label for="exampleInputEmail1" class="form-label"
                  >Acompanhante</label
                >
                <input
                  type="text"
                  v-model="form.acompanhante"
                  class="form-control form-control-sm"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Nome"
                />
              </div>
              <div class="mb-2 mt-2 col-2">
                <label for="exampleInputEmail1" class="form-label"
                  >Gestante</label
                >
                <div class="form-check">
                  <input
                    class="form-check-input"
                    v-model="form.gestante"
                    type="radio"
                    value="1"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Sim
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    v-model="form.gestante"
                    value="0"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    checked
                  />
                  <label class="form-check-label" for="flexRadioDefault2">
                    Não
                  </label>
                </div>
                <label for="exampleInputEmail1" class="form-label"
                  >Quantos mêses?</label
                >
                <input
                  type="text"
                  v-model="form.gestanteMeses"
                  class="form-control form-control-sm"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Digite o tempo aqui"
                />
              </div>
              <div class="mb-3 mt-2 col-6">
                <label for="floatingTextarea2">Observação:</label>
                <textarea
                  class="form-control"
                  v-model="form.observacao"
                  cols="80"
                  rows="5"
                  placeholder="Faça sua observação"
                  id="floatingTextarea2"
                ></textarea>
              </div>
            </div>
          </fieldset>
          <!--decalração do convênio do paciente-->
          <fieldset class="border rounded-3 h6 p-3">
            <legend class="float-none w-auto px-3 h6">
              Forma de pagamento
            </legend>
            <div class="mb-3 mt-2 col-2">
              <label for="exampleInputEmail1" class="form-label"
                >Tipo do atendimento</label
              >
              <select
                class="form-select form-select-sm"
                aria-label="Small select example"
                v-model="form.tipoAtendimento"
              >
                <option selected>Selecione</option>
                <option value="particular">Particular</option>
                <option value="convenio">Convênio</option>
              </select>
            </div>
            <div
              class="row"
              v-if="form.tipoAtendimento === 'convenio'"
              id="convenio"
            >
              <div class="mb-3 mt-2 col-2">
                <label for="exampleInputEmail1" class="form-label"
                  >Tipo do Convênio</label
                >
                <select
                  class="form-select form-select-sm"
                  aria-label="Small select example"
                  v-model="form.tipoConvenio"
                >
                  <option selected>Selecione</option>
                  <option value="1">Unimed</option>
                  <option value="2">Sulamérica</option>
                  <option value="3">Bradesco</option>
                </select>
              </div>
              <div class="mb-3 mt-2 col-2">
                <label for="exampleInputEmail1" class="form-label"
                  >Matrícula</label
                >
                <input
                  type="text"
                  v-model="form.matricula"
                  class="form-control form-control-sm"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Número da matrícula"
                />
              </div>
              <div class="mb-3 mt-2 col-2">
                <label for="exampleInputEmail1" class="form-label"
                  >Procedimento</label
                >
                <select
                  class="form-select form-select-sm"
                  aria-label="Small select example"
                  v-model="selectedProcedimento"
                >
                  <option selected>Selecione</option>
                  <option value="1">Puxar do banco</option>
                </select>
              </div>
              <div class="mb-3 mt-2 col-2">
                <label for="exampleInputEmail1" class="form-label">Nº</label>
                <input
                  type="number"
                  v-model="form.numero"
                  class="form-control form-control-sm"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Digite o número"
                />
              </div>
              <div class="mb-3 mt-2 col-2">
                <label for="exampleInputEmail1" class="form-label"
                  >Registro</label
                >
                <input
                  type="text"
                  v-model="form.registro"
                  class="form-control form-control-sm"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Digite o registro"
                />
              </div>
              <div class="mb-3 mt-2 col-2">
                <label for="exampleInputEmail1" class="form-label">Valor</label>
                <input
                  type="text"
                  v-model="form.valor"
                  class="form-control form-control-sm"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="R$"
                />
              </div>
              <hr />
            </div>

            <div
              class="row"
              v-if="form.tipoAtendimento === 'particular'"
              id="particular"
            >
              <div class="mb-3 mt-2 col-2">
                <label for="exampleInputEmail1" class="form-label">Tipo</label>
                <select
                  class="form-select form-select-sm"
                  aria-label="Small select example"
                >
                  <option selected>Selecione</option>
                  <option value="1">Consulta</option>
                  <option value="2">Exame</option>
                  <option value="3">Procedimento</option>
                </select>
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
              <div class="mb-2 mt-2 col-2">
                <label for="exampleInputEmail1" class="form-label">Valor</label>
                <input
                  type="number"
                  class="form-control form-control-sm"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="R$ Digite o valor"
                />
              </div>
              <div class="mb-2 mt-2 col-2">
                <label for="exampleInputEmail1" class="form-label"
                  >Desconto</label
                >
                <input
                  type="number"
                  v-model="form.desconto"
                  class="form-control form-control-sm"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="% Desconto"
                />
              </div>
              <div class="mb-2 mt-2 col-2">
                <label for="exampleInputEmail1" class="form-label">Total</label>
                <input
                  type="number"
                  class="form-control form-control-sm"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="R$ Valor total"
                />
              </div>
            </div>

            <button
              type="submit"
              @click="submit()"
              class="btn btn-outline-success"
            >
              Gerar ficha
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import axiosInstance from "../../config/axios";
import { useAuthStore } from "../../stores/AuthStore";
const useAuth = useAuthStore();

export default defineComponent({
  name: "CadastrarFichaPaciente",
  data() {
    return {
      form: {
        nome: "",
        retorno: false,
        sexo: "",
        nascimento: "",
        tipo: "",
        exame: "",
        comorbidade: "",
        prioridade: "",
        especialidade: "",
        profissional: "",
        consultorio: "",
        alergia: "",
        medicacaoContinua: "",
        mae: "",
        acompanhante: "",
        gestante: "0",
        gestanteMeses: "",
        observacao: "",
        tipoAtendimento: "",
        tipoConvenio: "",
        matricula: "",
        procedimento: "",
        numero: "",
        registro: "",
        valor: "",
        desconto: "",
        valor: "",
        sala: "",
      },

      comorbidadesOptions: [], // Array para armazenar as opções do select
      selectedComorbidade: null,

      exameOptions: [], // Array para armazenar as opções do select
      selectedExame: null,

      consultorioOptions: [], // Array para armazenar as opções do select
      selectedConsultorio: null,

      especialidadeOptions: [], // Array para armazenar as opções do select
      selectedEspecialidade: null,

      procedimentoOptions: [], // Array para armazenar as opções do select
      selectedProcedimento: null,
    };
  },
  mounted() {
    this.getComorbidades();
    this.getExames();
    this.getConsultorios();
    this.getEspecialidades();
    this.getProcedimentos();
  },
  methods: {
    getComorbidades() {
      axiosInstance
        .get("/comorbidade/findAll", {
          headers: {
            Authorization: `Bearer ${useAuth.token}`,
          },
        })
        .then((response) => {
          const comorbidades = response.data.comorbidades.map((comorbidade) => {
            return {
              id: comorbidade.id, // Assuma que "id" é a propriedade que identifica a comorbidade
              nome: comorbidade.nome, // Assuma que "descricao" é a propriedade do nome da comorbidade
            };
          });
          this.comorbidadesOptions = comorbidades;
        })
        .catch((error) => {
          console.log("deu ruim");
          console.log(error);
        })
        .finally(() => {
          //   loader.hide();
        });
    },

    getExames() {
      axiosInstance
        .get("/exame/findAll", {
          headers: {
            Authorization: `Bearer ${useAuth.token}`,
          },
        })
        .then((response) => {
          const exames = response.data.exames.map((exame) => {
            return {
              id: exame.id, // Assuma que "id" é a propriedade que identifica a comorbidade
              nome: exame.nome, // Assuma que "descricao" é a propriedade do nome da comorbidade
            };
          });
          this.exameOptions = exames;
        })
        .catch((error) => {
          console.log("deu ruim");
          console.log(error);
        })
        .finally(() => {
          //   loader.hide();
        });
    },

    getConsultorios() {
      axiosInstance
        .get("/consultorio/findAll", {
          headers: {
            Authorization: `Bearer ${useAuth.token}`,
          },
        })
        .then((response) => {
          const consultorios = response.data.consultorios.map((consultorio) => {
            return {
              id: consultorio.id,
              nome: consultorio.nome,
              sala: consultorio.sala,
            };
          });
          this.consultorioOptions = consultorios;
        })
        .catch((error) => {
          console.log("deu ruim");
          console.log(error);
        });
    },

    getEspecialidades() {
      axiosInstance
        .get("/especialidade/findAll", {
          headers: {
            Authorization: `Bearer ${useAuth.token}`,
          },
        })
        .then((response) => {
          const especialidades = response.data.especialidades.map(
            (especialidades) => {
              return {
                id: especialidades.id, // Assuma que "id" é a propriedade que identifica a comorbidade
                nome: especialidades.nome, // Assuma que "descricao" é a propriedade do nome da comorbidade
              };
            }
          );
          this.especialidadeOptions = especialidades;
        })

        .catch((error) => {
          console.log("deu ruim");
          console.log(error);
        });
    },

    getProcedimentos() {
      axiosInstance
        .get("/procedimento/findAll", {
          headers: {
            Authorization: `Bearer ${useAuth.token}`,
          },
        })
        .then((response) => {
          const procedimentos = response.data.procedimentos.map(
            (procedimento) => {
              return {
                id: procedimento.id, // Assuma que "id" é a propriedade que identifica a comorbidade
                nome: procedimento.nome, // Assuma que "descricao" é a propriedade do nome da comorbidade
              };
            }
          );
          this.procedimentoOptions = procedimentos;
        })
        .catch((error) => {
          console.log("deu ruim");
          console.log(error);
        });
    },

    submit() {
      const data = {
        nome: this.form.nome,
        retorno: this.form.retorno,
        sexo: this.form.sexo,
        nascimento: this.form.nascimento,
        tipo: this.form.tipo,
        tbexame_id: this.selectedExame,
        tbcomorbidade_id: this.selectedComorbidade,
        prioridade: this.form.prioridade,
        tbespecialidade_id: this.selectedEspecialidade,
        tbprofissional_id: this.form.profissional,
        tbconsultorio_id: this.selectedConsultorio,
        alergia: this.form.alergia,
        medicamento_continuo: this.form.medicacaoContinua,
        mae: this.form.mae,
        acompanhante: this.form.acompanhante,
        gestante: this.form.gestante,
        gestante_meses: this.form.gestanteMeses,
        observacao: this.form.observacao,
        tipo_pagamento: this.form.tipoAtendimento,
        tipo_convenio: this.form.tipoConvenio,
        matricula: this.form.matricula,
        tbprocedimento_id: this.selectedProcedimento,
        numero: this.form.numero,
        registro: this.form.registro,
        valor: this.form.valor,
      };

      // axiosInstance
      //   .post("/ficha/create", data, {
      //     headers: {
      //       Authorization: `Bearer ${useAuth.token}`,
      //     },
      //   })
      //   .then((response) => {
      //     alertInstance(4000, "Ficha cadastrada com sucesso!", "success");
      //     this.resetForm();
      //   })
      //   .catch((error) => {
      //     console.log("deu ruim");
      //     console.log(error);
      //   });
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
