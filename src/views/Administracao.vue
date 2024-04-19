<template>
	<div class="page_content">
	<div class="container-fluid ">
		<div class="card text-center">
			<div class="col mt-1 mb-1">
				<div class="container-fluid mb-1">
					<button type="button" class="btn btn-outline-success border 1px solid botoes"
						style="height: 70px; width: 140px; margin: 5px; "><i class="fa-solid fa-list-check"></i>>
						Indicadores</button>
					<button type="button" class="btn btn-outline-success border 1px solid botoes"
						style="height: 70px; width: 140px; margin: 5px; "><i class="fa-solid fa-hand-holding-dollar"></i>
						Financeiro</button>
					<button type="button" class="btn btn-outline-success border 1px solid botoes"
						data-bs-toggle="collapse" data-bs-target="#formulario_buscar" role="button"
						area-expanded="false" aria-controls="collapseExample"
						style="height: 70px; width: 140px; margin: 5px; "><i class="fa-solid fa-hospital-user"></i>
						Convênio</button>
					<button type="button" class="btn btn-outline-success border 1px solid botoes"
						style="height: 70px; width: 140px; margin: 5px; "><i class="fa-solid fa-chart-pie"></i>
						Patrimônio</button>
					<button type="button" class="btn btn-outline-success border 1px solid botoes"
						style="height: 70px; width: 140px; margin: 5px; "><i class="fa-regular fa-file"></i>
						Notas</button>
					<button type="button" class="btn btn-outline-success border 1px solid botoes"
						style="height: 70px; width: 150px; margin: 5px; "><i class="fa-solid fa-stethoscope"></i>
						Profissionais</button>
					<button type="button" class="btn btn-outline-success border 1px solid botoes"
					:class="{ 'active': tabAtual == 'CadastrarEstabelecimentoComponent' }"
						@click="tabAtual = 'CadastrarEstabelecimentoComponent'"
						style="height: 70px; width: 150px; margin: 5px; ">
						<i class="fa-solid fa-plus"></i>
						Cadastrar estabelecimento</button>
					<button type="button" class="btn btn-outline-success border 1px solid botoes"
						:class="{ 'active': tabAtual == 'CadastrarConsultorioComponent' }"
						@click="tabAtual = 'CadastrarConsultorioComponent'" style="height: 70px; width: 130px; margin: 5px">
						<i class="fa-solid fa-plus"></i>
						Cadastrar sala
					</button>
					<button type="button" class="btn btn-outline-success border 1px solid botoes"
						:class="{ 'active': tabAtual == 'CadastrarProfissionalComponent' }"
						@click="tabAtual = 'CadastrarProfissionalComponent'" style="height: 70px; width: 130px; margin: 5px">
						<i class="fa-solid fa-user-doctor"></i>
						Cadastrar Profissional
					</button>
				</div>
			</div>
		</div>
		<transition name="fade" mode="out-in">
      <component :is="tabs[tabAtual]"></component>
    </transition>
	</div>
</div>
</template>
<script setup>
import Sidebar from "../components/Sidebar.vue";
import { shallowRef } from "vue";
import CadastrarConsultorioComponent from "../components/Recepcao/CadastrarConsultorioComponent.vue";
import CadastrarEstabelecimentoComponent from "../components/Recepcao/CadastrarEstabelecimentoComponent.vue";
import CadastrarProfissionalComponent from "../components/Recepcao/CadastrarProfissionalComponent.vue";


const tabAtual = shallowRef("CadastrarConsultorioComponent");

const tabs = {
  CadastrarConsultorioComponent,
  CadastrarEstabelecimentoComponent,
  CadastrarProfissionalComponent
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
</style>