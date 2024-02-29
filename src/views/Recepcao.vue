<template>
  <Sidebar />
  <div class="container-fluid">
    <div class="card text-center">
      <div class="col mt-1 mb-1">
        <button
          class="btn btn-outline-success border 1px solid botoes"
          :class="{'active': tabAtual == 'CadastrarPacienteComponent' }"
          @click="tabAtual = 'CadastrarPacienteComponent'"
          style="height: 70px; width: 130px; margin: 5px"
        >
          <i class="bi bi-person-add"></i>
          Cadastrar Paciente
        </button>
        <button
          type="button"
          class="btn btn-outline-success border 1px solid botoes"
          :class="{'active': tabAtual == 'CadastrarProfissionalComponent' }"
          @click="tabAtual = 'CadastrarProfissionalComponent'"
          style="height: 70px; width: 130px; margin: 5px"
        >
          <i class="bi bi-person-add"></i>
          Cadastrar Profissional
        </button>
        <button
          type="button"
          class="btn btn-outline-success border 1px solid botoes"
          :class="{'active': tabAtual == 'AgendaComponent' }"
          @click="tabAtual = 'AgendaComponent'"
          style="height: 70px; width: 110px; margin: 5px"
        >
          <i class="bi bi-calendar2-day"></i>
          Agenda
        </button>
        <button
          type="button"
          class="btn btn-outline-success border 1px solid botoes"
          data-bs-toggle="collapse"
          data-bs-target="#formulario_editar"
          role="button"
          area-expanded="false"
          aria-controls="formulario_busca"
          style="height: 70px; width: 110px; margin: 5px"
        >
          <i class="bi bi-pencil-square"></i> Editar
        </button>
        <button
          type="button"
          class="btn btn-outline-success border 1px solid botoes"
          data-bs-toggle="collapse"
          data-bs-target="#formulario_ficha"
          role="button"
          area-expanded="false"
          aria-controls="collapseExample"
          style="height: 70px; width: 110px; margin: 5px"
        >
          <i class="bi bi-person-lines-fill"></i> Ficha
        </button>
        <button
          type="button"
          class="btn btn-outline-success border 1px solid botoes"
          data-bs-toggle="collapse"
          data-bs-target="#formulario_laudo"
          role="button"
          area-expanded="false"
          aria-controls="collapseExample"
          style="height: 70px; width: 110px; margin: 5px"
        >
          <i class="bi bi-file-earmark-medical"></i> Laudo
        </button>
        <button
          type="button"
          class="btn btn-outline-success border 1px solid botoes"
          data-bs-toggle="collapse"
          data-bs-target="#formulario_exames"
          role="button"
          area-expanded="false"
          aria-controls="collapseExample"
          style="height: 70px; width: 110px; margin: 5px"
        >
          <i class="bi bi-clipboard2-pulse"></i> Exames
        </button>
        <button
          type="button"
          class="btn btn-outline-success border 1px solid botoes"
          data-bs-toggle="collapse"
          data-bs-target="#formulario_receita"
          role="button"
          area-expanded="false"
          aria-controls="collapseExample"
          style="height: 70px; width: 110px; margin: 5px"
        >
          <i class="bi bi-file-text"></i> Receita
        </button>
        <button
          type="button"
          class="btn btn-outline-success border 1px solid botoes"
          data-bs-toggle="collapse"
          data-bs-target="#formulario_procedimento"
          role="button"
          area-expanded="false"
          aria-controls="collapseExample"
          style="height: 70px; width: 160px; margin: 5px"
        >
          <i class="bi bi-heart-pulse"></i> Procedimento
        </button>
      </div>
    </div>

    <transition name="fade" mode="out-in">
      <component :is="tabs[tabAtual]"></component>
    </transition>

    <!--inicio do formulário editar-->
    <div class="collapse" id="formulario_editar">
      <div class="container-fluid">
        <div class="card mt-2 p-3">
          <div class="text-center h4 mt-2 mb-3">
            Editar informação do paciente
          </div>
          <fieldset class="border rounded-3 h6 p-3">
            <legend class="float-none w-auto px-3 h6">Editar</legend>
            <nav class="navbar bg-body-tertiary">
              <div class="container-fluid">
                <form class="d-flex w-100" role="search">
                  <input
                    class="form-control me-2"
                    type="search"
                    placeholder="Digite o nome do paciente"
                    aria-label="Search"
                  />
                  <button class="btn btn-outline-success" type="submit">
                    Buscar
                  </button>
                </form>
              </div>
            </nav>
          </fieldset>
        </div>
      </div>
    </div>
    <!--fim do formulário editar-->
    <!--inicio do formulário ficha-->
    <div class="collapse" id="formulario_ficha">
      <div class="container">
        <div class="card mt-2 p-3">
          <div class="text-center h4 mt-2 mb-3">Emitir ficha do paciente</div>
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
                  class="form-control form-control-sm"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Nome do paciente"
                />
              </div>
              <div class="mb-3 mt-2 col-2">
                <label for="exampleInputEmail1" class="form-label"
                  >Nascimento</label
                >
                <input
                  type="date"
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
                >
                  <option selected>Selecione</option>
                  <option value="1">Consulta</option>
                  <option value="2">Exame</option>
                </select>
              </div>
              <div class="mb-3 mt-2 col-3">
                <label for="exampleInputEmail1" class="form-label">Exame</label>
                <select
                  class="form-select form-select-sm"
                  aria-label="Small select example"
                >
                  <option selected>Selecione</option>
                  <option value="1">Buscar do banco</option>
                </select>
              </div>
              <div class="mb-3 mt-2 col-2">
                <label for="exampleInputEmail1" class="form-label"
                  >Comorbidade</label
                >
                <select
                  class="form-select form-select-sm"
                  aria-label="Small select example"
                >
                  <option selected>Selecione</option>
                  <option value="comor1">Arritmias cardíacas</option>
                  <option value="comor2">Cardiopatia hipertensiva</option>
                  <option value="comor3">
                    Cardiopatias congênitas no adulto
                  </option>
                  <option value="comor4">Cirrose hepática</option>
                  <option value="comor5">Diabetes mellitus</option>
                  <option value="comor6">Doença cerebrovascular</option>
                  <option value="comor7">Doença renal crônica</option>
                  <option value="comor8">
                    Doenças da aorta, dos grandes vasos e fístulas
                    arteriovenosas
                  </option>
                  <option value="comor9">Hemoglobinopatias graves</option>
                  <option value="comor10">Hipertensão arterial</option>
                  <option value="comor11">
                    Hipertensão Arterial Resistente (HAR)
                  </option>
                  <option value="comor12">
                    Hipertensão pulmonar / Cor-pulmonale
                  </option>
                  <option value="comor13">Imunossuprimidos</option>
                  <option value="comor14">Insuficiência cardíaca</option>
                  <option value="comor15">
                    Miocardiopatias e pericardiopatias
                  </option>
                  <option value="comor16">Obesidade mórbida</option>
                  <option value="comor17">Pneumopatias crônicas graves</option>
                  <option value="comor18">
                    Próteses valvares e dispositivos cardíacos implantados
                  </option>
                  <option value="comor19">
                    Reumáticos como portadores de espondilite anquilosante
                  </option>
                  <option value="comor20">Síndrome de Down</option>
                </select>
              </div>
              <div class="mb-3 mt-2 col-3">
                <label for="exampleInputEmail1" class="form-label"
                  >Especialista</label
                >
                <select
                  class="form-select form-select-sm"
                  aria-label="Small select example"
                >
                  <option selected>Selecione</option>
                  <option value="1">Buscar do banco</option>
                </select>
              </div>
              <div class="mb-3 mt-2 col-3">
                <label for="exampleInputEmail1" class="form-label"
                  >Profissional</label
                >
                <input
                  type="text"
                  class="form-control form-control-sm"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Digite o nome do médico"
                />
              </div>
              <div class="mb-3 mt-2 col-2">
                <label for="exampleInputEmail1" class="form-label">Sala</label>
                <select
                  class="form-select form-select-sm"
                  aria-label="Small select example"
                >
                  <option selected>Selecione</option>
                  <option value="1">Buscar do banco</option>
                </select>
              </div>
              <div class="mb-3 mt-2 col-2">
                <label for="exampleInputEmail1" class="form-label"
                  >Consultório</label
                >
                <select
                  class="form-select form-select-sm"
                  aria-label="Small select example"
                >
                  <option selected>Selecione</option>
                  <option value="1">Buscar do banco</option>
                </select>
              </div>
              <div class="mb-2 mt-2 col-3">
                <label for="exampleInputEmail1" class="form-label"
                  >Algum tipo de alergia Alergia ?</label
                >
                <input
                  type="text"
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
                  class="form-control form-control-sm"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Qual?"
                />
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
                id="select"
                name="select"
                aria-label="Small select example"
              >
                <option selected>Selecione</option>
                <option value="particular">Particular</option>
                <option value="convenio">Convênio</option>
              </select>
            </div>
            <div class="row" id="convenio">
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
              <div class="mb-3 mt-2 col-2">
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
              <div class="mb-3 mt-2 col-2">
                <label for="exampleInputEmail1" class="form-label">Valor</label>
                <input
                  type="text"
                  class="form-control form-control-sm"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="R$"
                />
              </div>
              <hr />
            </div>

            <div class="row" id="particular">
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
              <button type="button" class="btn btn-outline-success">
                Gerar ficha
              </button>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
    <!--fim do formulário ficha-->
    <!--inicio do formulário laudo-->
    <div class="collapse" id="formulario_laudo">
      <div class="container-fluid">
        <div class="card mt-2 p-3">
          <div class="text-center h4 mt-2 mb-3">
            Formulário para puxar o laudo do paciente
          </div>
          <fieldset class="border rounded-3 h6 p-3">
            <legend class="float-none w-auto px-3 h6">Laudo do paciente</legend>
            <nav class="navbar bg-body-tertiary">
              <div class="container-fluid">
                <form class="d-flex w-100" role="search">
                  <input
                    class="form-control me-2"
                    type="search"
                    placeholder="Digite o nome do paciente ou o número do registro"
                    aria-label="Search"
                  />
                  <button class="btn btn-outline-success" type="submit">
                    Buscar
                  </button>
                </form>
              </div>
            </nav>
          </fieldset>
        </div>
      </div>
    </div>
    <!--fim do formulário laudo-->
    <!--inicio do formulário exames-->
    <div class="collapse" id="formulario_exames">
      <div class="container-fluid">
        <div class="card mt-2 p-3">
          <div class="text-center h4 mt-2 mb-3">
            Formulário para puxar os exames do paciente
          </div>
          <fieldset class="border rounded-3 h6 p-3">
            <legend class="float-none w-auto px-3 h6">
              Exames do paciente
            </legend>
            <nav class="navbar bg-body-tertiary">
              <div class="container-fluid">
                <form class="d-flex w-100" role="search">
                  <input
                    class="form-control me-2"
                    type="search"
                    placeholder="Digite o nome do paciente ou o número do registro"
                    aria-label="Search"
                  />
                  <button class="btn btn-outline-success" type="submit">
                    Buscar
                  </button>
                </form>
              </div>
            </nav>
          </fieldset>
        </div>
      </div>
    </div>
    <!--fim do formulário exames-->
    <!--inicio do formulário receita-->
    <div class="collapse" id="formulario_receita">
      <div class="container-fluid">
        <div class="card mt-2 p-3">
          <div class="text-center h4 mt-2 mb-3">
            Formulário para puxar as receitas do paciente
          </div>
          <fieldset class="border rounded-3 h6 p-3">
            <legend class="float-none w-auto px-3 h6">
              Receita do paciente
            </legend>
            <nav class="navbar bg-body-tertiary">
              <div class="container-fluid">
                <form class="d-flex w-100" role="search">
                  <input
                    class="form-control me-2"
                    type="search"
                    placeholder="Digite o nome do paciente ou o número do registro"
                    aria-label="Search"
                  />
                  <button class="btn btn-outline-success" type="submit">
                    Buscar
                  </button>
                </form>
              </div>
            </nav>
          </fieldset>
        </div>
      </div>
    </div>
    <!--fim do formulário receita-->
    <!--inicio do formulário procedimentos-->
    <div class="collapse" id="formulario_procedimento">
      <div class="container-fluid">
        <div class="card mt-2 p-3">
          <div class="text-center h4 mt-2 mb-3">
            Formulário para puxar os procedimentos solicitado ao paciente
          </div>
          <fieldset class="border rounded-3 h6 p-3">
            <legend class="float-none w-auto px-3 h6">
              Procedimentos do paciente
            </legend>
            <nav class="navbar bg-body-tertiary">
              <div class="container-fluid">
                <form class="d-flex w-100" role="search">
                  <input
                    class="form-control me-2"
                    type="search"
                    placeholder="Digite o nome do paciente ou o número do registro"
                    aria-label="Search"
                  />
                  <button class="btn btn-outline-success" type="submit">
                    Buscar
                  </button>
                </form>
              </div>
            </nav>
          </fieldset>
        </div>
      </div>
    </div>
    <!--fim do formulário procedimentos-->
  </div>
</template>
<script setup>
import Sidebar from "../components/Sidebar.vue";
import CadastrarPacienteComponent from "../components/Recepcao/CadastrarPacienteComponent.vue";
import CadastrarProfissionalComponent from "../components/Recepcao/CadastrarProfissionalComponent.vue";
import AgendaComponent from "../components/Recepcao/AgendaComponent.vue";
import { shallowRef } from "vue";

const tabAtual = shallowRef("CadastrarPacienteComponent");

const tabs = {
  CadastrarPacienteComponent,
  CadastrarProfissionalComponent,
  AgendaComponent
};
</script>

<style scoped>
.botoes:hover, .botoes.active {
  background-color: var(--dark);
  transform: scale(1.1);
  transition: all 0.5s;
}

.fade-enter-active,
.fade-leave-active {
  transition: height 0.2s ease-out, opacity 0.4s ease-in;
  overflow: hidden;
}

.fade-enter-from,
.fade-leave-to {
  height: 0;
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  height: 100%;
  opacity: 1;
}
</style>