<template>
	<div class="container-fluid ">
		<div class="card text-center">
			<div class="col mt-1 mb-1">
				<div class="container-fluid mb-1">
					<button type="button" class="btn btn-outline-success border 1px solid botoes"
						data-bs-toggle="collapse" data-bs-target="#formulario_atender" role="button"
						area-expanded="false" aria-controls="formulario_busca"
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
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
import Sidebar from "../components/Sidebar.vue";
</script>
<style scoped>
.botoes:hover {
	background-color: var(--dark);
	transform: scale(1.1);
	transition: all 0.5s;
}
</style>../config/axios.js../config/alerts.js