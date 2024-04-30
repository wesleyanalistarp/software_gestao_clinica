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
        <button type="button" class="btn btn-outline-success border 1px solid botoes"
        :class="{ 'active': tabAtual == 'EditarComponent' }" @click="tabAtual = 'EditarComponent'"
          style="height: 70px; width: 110px; margin: 5px">
          <i class="bi bi-pencil-square"></i> Editar
        </button>
        <button type="button" class="btn btn-outline-success border 1px solid botoes" 
        :class="{ 'active': tabAtual == 'LaudoComponent' }" @click="tabAtual = 'LaudoComponent'"
          style="height: 70px; width: 110px; margin: 5px">
          <i class="bi bi-file-earmark-medical"></i> Laudo
        </button>
        <button type="button" class="btn btn-outline-success border 1px solid botoes" 
        :class="{ 'active': tabAtual == 'ExamesComponent' }" @click="tabAtual = 'ExamesComponent'"
          style="height: 70px; width: 110px; margin: 5px">
          <i class="bi bi-clipboard2-pulse"></i> Exames
        </button>
        <button type="button" class="btn btn-outline-success border 1px solid botoes" 
        :class="{ 'active': tabAtual == 'ReceitaComponent' }" @click="tabAtual = 'ReceitaComponent'"
          style="height: 70px; width: 110px; margin: 5px">
          <i class="bi bi-file-text"></i> Receita
        </button>
        <button type="button" class="btn btn-outline-success border 1px solid botoes" 
        :class="{ 'active': tabAtual == 'ProcedimentosComponent' }" @click="tabAtual = 'ProcedimentosComponent'"
          style="height: 70px; width: 160px; margin: 5px">
          <i class="bi bi-heart-pulse"></i> Procedimento
        </button>
      </div>
    </div>

    <transition name="fade" mode="out-in">
      <component :is="tabs[tabAtual]"></component>
    </transition>
  </div>
</template>
<script setup>
import Sidebar from "../components/Sidebar.vue";
import CadastrarPacienteComponent from "../components/Recepcao/CadastrarPacienteComponent.vue";
import FormularioFichaComponent from "../components/Recepcao/FormularioFichaComponent.vue";
import AgendaComponent from "../components/Recepcao/AgendaComponent.vue";
import EditarComponent from "../components/Recepcao/EditarComponent.vue";
import LaudoComponent from "../components/Recepcao/LaudoComponent.vue";
import ExamesComponent from "../components/Recepcao/ExamesComponent.vue";
import ReceitaComponent from "../components/Recepcao/ReceitaComponent.vue";
import ProcedimentosComponent from "../components/Recepcao/ProcedimentosComponent.vue";
import { shallowRef } from "vue";

//const tabAtual = shallowRef("CadastrarPacienteComponent");
const tabAtual = shallowRef("AgendaComponent");

const tabs = {
  CadastrarPacienteComponent,
  FormularioFichaComponent,
  AgendaComponent,
  EditarComponent,
  LaudoComponent,
  ExamesComponent,
  ReceitaComponent,
  ProcedimentosComponent
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
</style>