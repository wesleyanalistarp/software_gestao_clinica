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
		<!--inicio do formulário atender-->
		<div class="collapse" id="formulario_atender">
			<div class="container ">
				<div class="card mt-2 p-3">
					<div class="text-center h4 mt-2 mb-3">Lista dos Pacientes em Espera</div>
					<fieldset class="border rounded-3 h6 p-3 ">
						<legend class="float-none w-auto px-3 h6 ">Fila prioritária</legend>
						<table class="table table-hover">
							<thead>
								<tr>
									<th scope="col">#</th>
									<th scope="col">Paciente</th>
									<th scope="col">Idade</th>
									<th scope="col">Profissional</th>
									<th scope="col">Procedimento</th>
									<th scope="col">Comorbidade</th>
									<th scope="col">Prioridade</th>
									<th scope="col">Ultima consulta</th>
									<th scope="col" class="text-center">Ação</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th scope="row">1</th>
									<td>Wesley Ramon</td>
									<td>34</td>
									<td>Dr. jair Brandão</td>
									<td>Exame</td>
									<td>Puxar do select</td>
									<td>Puxar do select</td>
									<td>10/02/2024</td>
									<td>
										<router-link :to="{ name: 'anamnese', params: { id: '1' } }"
											class="btn btn-outline-success btn-sm m-1">Atender</router-link>
										<button type="button" class="btn btn-outline-warning btn-sm m-1">Chamar</button>
										<button type="button" class="btn btn-outline-danger btn-sm m-1"
											data-bs-toggle="modal" data-bs-target="#modal_desistiu">Desistiu</button>
									</td>
								</tr>
								<tr>
									<th scope="row">2</th>
									<td>Erica Silva</td>
									<td>26</td>
									<td>Dr. jair Brandão</td>
									<td>Consulta</td>
									<td>Puxar do select</td>
									<td>Puxar do select</td>
									<td>10/02/2024</td>
									<td>
										<button type="button"
											class="btn btn-outline-success btn-sm m-1">Atender</button>
										<button type="button" class="btn btn-outline-warning btn-sm m-1">Chamar</button>
										<button type="button"
											class="btn btn-outline-danger btn-sm m-1">Desistiu</button>
									</td>
								</tr>
							</tbody>
						</table>
					</fieldset>
					<fieldset class="border rounded-3 h6 p-3 ">
						<legend class="float-none w-auto px-3 h6 ">Fila simples</legend>
						<table class="table table-hover">
							<thead>
								<tr>
									<th scope="col">#</th>
									<th scope="col">Paciente</th>
									<th scope="col">Idade</th>
									<th scope="col">Profissional</th>
									<th scope="col">Procedimento</th>
									<th scope="col">Comorbidade</th>
									<th scope="col">Ultima consulta</th>
									<th scope="col" class="text-center">Ação</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th scope="row">1</th>
									<td>Joaquim Rodrig</td>
									<td>56</td>
									<td>Dr. jair Brandão</td>
									<td>Exame</td>
									<td>Hipertenção</td>
									<td>10/02/2024</td>
									<td>
										<button type="button"
											class="btn btn-outline-success btn-sm m-1">Atender</button>
										<button type="button" class="btn btn-outline-warning btn-sm m-1">Chamar</button>
										<button type="button"
											class="btn btn-outline-danger btn-sm m-1">Desistiu</button>
									</td>
								</tr>
							</tbody>
						</table>
					</fieldset>
				</div>
			</div>
		</div>
		<!--Inicio do Modal do botão desistiu-->
		<div class="modal fade" id="modal_desistiu" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
			aria-labelledby="staticBackdropLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h1 class="modal-title fs-5" id="staticBackdropLabel">Mensagem informativa</h1>
					</div>
					<div class="modal-body">
						<p class="fw-bold text-center">Tem certeza que deseja cancelar o atendimento?</p>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-danger" data-bs-dismiss="modal">Não</button>
						<button type="button" class="btn btn-success">Sim</button>
					</div>
				</div>
			</div>
		</div>
		<!--fim do Modal do botão desistiu-->
		<!--inicio do formulário buscar-->
		<div class="collapse" id="formulario_buscar">
			<div class="container-fluid">
				<div class="card mt-2 p-3">
					<div class="text-center h4 mt-2 mb-3">Buscar Paciente</div>
					<fieldset class="border rounded-3 h6 p-3 ">
						<legend class="float-none w-auto px-3 h6 ">Localizar</legend>
						<nav class="navbar bg-body-tertiary">
							<div class="container-fluid">
								<form class="d-flex w-100" role="search">
									<input class="form-control me-2" type="search"
										placeholder="Digite o nome do paciente" aria-label="Search">
									<button class="btn btn-outline-success" type="submit">Buscar</button>
								</form>
							</div>
						</nav>
					</fieldset>
				</div>
			</div>
		</div>
		<!--fim do formulário buscar-->
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