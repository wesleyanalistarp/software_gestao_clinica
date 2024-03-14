<template>
  <!-- <Sidebar /> -->
  <div class="page_content">
    <div class="card text-center" style="width: 100%">
      <div class="col mt-1 mb-1">
        <button class="btn btn-outline-success border 1px solid botoes"
          :class="{ 'active': tabAtual == 'CadastrarPacienteComponent' }"
          @click="tabAtual = 'CadastrarPacienteComponent'" style="height: 70px; width: 130px; margin: 5px">
          <i class="bi bi-person-add"></i>
          Cadastrar Paciente
        </button>
        <button type="button" class="btn btn-outline-success border 1px solid botoes"
          :class="{ 'active': tabAtual == 'CadastrarProfissionalComponent' }"
          @click="tabAtual = 'CadastrarProfissionalComponent'" style="height: 70px; width: 130px; margin: 5px">
          <i class="fa-solid fa-user-doctor"></i>
          Cadastrar Profissional
        </button>
        <button type="button" class="btn btn-outline-success border 1px solid botoes"
          :class="{ 'active': tabAtual == 'CadastrarConsultorioComponent' }"
          @click="tabAtual = 'CadastrarConsultorioComponent'" style="height: 70px; width: 130px; margin: 5px">
          <i class="fa-solid fa-plus"></i>
          Cadastrar Consultório
        </button>
        <button type="button" class="btn btn-outline-success border 1px solid botoes"
          :class="{ 'active': tabAtual == 'AgendaComponent' }" @click="tabAtual = 'AgendaComponent'"
          style="height: 70px; width: 110px; margin: 5px">
          <i class="bi bi-calendar2-day"></i>
          Agenda
        </button>
        <button type="button" class="btn btn-outline-success border 1px solid botoes"
          :class="{ 'active': tabAtual == 'FormularioFichaComponent' }" @click="tabAtual = 'FormularioFichaComponent'" 
          style="height: 70px; width: 130px; margin: 5px">
          <i class="bi bi-person-lines-fill"></i> Ficha
        </button>
        <button type="button" class="btn btn-outline-success border 1px solid botoes" data-bs-toggle="collapse"
          data-bs-target="#formulario_editar" role="button" area-expanded="false" aria-controls="formulario_busca"
          style="height: 70px; width: 110px; margin: 5px">
          <i class="bi bi-pencil-square"></i> Editar
        </button>
        <button type="button" class="btn btn-outline-success border 1px solid botoes" data-bs-toggle="collapse"
          data-bs-target="#formulario_laudo" role="button" area-expanded="false" aria-controls="collapseExample"
          style="height: 70px; width: 110px; margin: 5px">
          <i class="bi bi-file-earmark-medical"></i> Laudo
        </button>
        <button type="button" class="btn btn-outline-success border 1px solid botoes" data-bs-toggle="collapse"
          data-bs-target="#formulario_exames" role="button" area-expanded="false" aria-controls="collapseExample"
          style="height: 70px; width: 110px; margin: 5px">
          <i class="bi bi-clipboard2-pulse"></i> Exames
        </button>
        <button type="button" class="btn btn-outline-success border 1px solid botoes" data-bs-toggle="collapse"
          data-bs-target="#formulario_receita" role="button" area-expanded="false" aria-controls="collapseExample"
          style="height: 70px; width: 110px; margin: 5px">
          <i class="bi bi-file-text"></i> Receita
        </button>
        <button type="button" class="btn btn-outline-success border 1px solid botoes" data-bs-toggle="collapse"
          data-bs-target="#formulario_procedimento" role="button" area-expanded="false" aria-controls="collapseExample"
          style="height: 70px; width: 160px; margin: 5px">
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
            Editar Informação do Paciente
          </div>
          <fieldset class="border rounded-3 h6 p-3">
            <legend class="float-none w-auto px-3 h6">Editar</legend>
            <nav class="navbar bg-body-tertiary">
              <div class="container-fluid">
                <form class="d-flex w-100" role="search">
                  <input class="form-control me-2" type="search" placeholder="Digite o nome do paciente"
                    aria-label="Search" />
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

    <!--inicio do formulário laudo-->
    <div class="collapse" id="formulario_laudo">
      <div class="container-fluid">
        <div class="card mt-2 p-3">
          <div class="text-center h4 mt-2 mb-3">
            Formulário Puxar Laudo do Paciente
          </div>
          <fieldset class="border rounded-3 h6 p-3">
            <legend class="float-none w-auto px-3 h6">Laudo do paciente</legend>
            <nav class="navbar bg-body-tertiary">
              <div class="container-fluid">
                <form class="d-flex w-100" role="search">
                  <input class="form-control me-2" type="search"
                    placeholder="Digite o nome do paciente ou o número do registro" aria-label="Search" />
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
            Formulário Puxar Exames do Paciente
          </div>
          <fieldset class="border rounded-3 h6 p-3">
            <legend class="float-none w-auto px-3 h6">
              Exames do paciente
            </legend>
            <nav class="navbar bg-body-tertiary">
              <div class="container-fluid">
                <form class="d-flex w-100" role="search">
                  <input class="form-control me-2" type="search"
                    placeholder="Digite o nome do paciente ou o número do registro" aria-label="Search" />
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
            Formulário Puxar Receita do Paciente
          </div>
          <fieldset class="border rounded-3 h6 p-3">
            <legend class="float-none w-auto px-3 h6">
              Receita do paciente
            </legend>
            <nav class="navbar bg-body-tertiary">
              <div class="container-fluid">
                <form class="d-flex w-100" role="search">
                  <input class="form-control me-2" type="search"
                    placeholder="Digite o nome do paciente ou o número do registro" aria-label="Search" />
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
            Formulário Puxar os Procedimentos Solicitado ao Paciente
          </div>
          <fieldset class="border rounded-3 h6 p-3">
            <legend class="float-none w-auto px-3 h6">
              Procedimentos do paciente
            </legend>
            <nav class="navbar bg-body-tertiary">
              <div class="container-fluid">
                <form class="d-flex w-100" role="search">
                  <input class="form-control me-2" type="search"
                    placeholder="Digite o nome do paciente ou o número do registro" aria-label="Search" />
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
import CadastrarConsultorioComponent from "../components/Recepcao/CadastrarConsultorioComponent.vue";
import FormularioFichaComponent from "../components/Recepcao/FormularioFichaComponent.vue";
import AgendaComponent from "../components/Recepcao/AgendaComponent.vue";
import { shallowRef } from "vue";

const tabAtual = shallowRef("CadastrarPacienteComponent");

const tabs = {
  CadastrarPacienteComponent,
  CadastrarProfissionalComponent,
  CadastrarConsultorioComponent,
  FormularioFichaComponent,
  AgendaComponent
};
</script>

<style scoped>
.page_content {
  height: 100vh;
}

.botoes:hover,
.botoes.active {
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

/* .retorno{
  background: rgb(74, 219, 69);
  margin: 0;
  padding-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
}

.posicao{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  margin-right: 30px;
  padding-left: 40px;
  padding-top: 20px;
  position: relative;
} */
</style>../components/Recepcao/CadastrarConsultorioComponent.vue