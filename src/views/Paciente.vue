<template>
	<Sidebar />
	<div>
		<div class="container-fluid">
			<div class="card">
				<div class="row">
					<div class="col">
						<div class="card-botoes mt-1">
							<button type="button" class="btn btn-outline-success mt-5 border 1px solid" style="height: 80px; width: 120px; margin: 10px; "><i class="bi bi-person-add"></i> Cadastrar</button>
							<button type="button" class="btn btn-outline-success mt-5 border 1px solid" style="height: 80px; width: 120px; margin: 10px; "><i class="bi bi-pencil-square"></i> Editar</button>
							<button type="button" class="btn btn-outline-success mt-5 border 1px solid" style="height: 80px; width: 130px; margin: 10px; "><i class="bi bi-search"></i> Buscar</button>
							<button type="button" class="btn btn-outline-success mt-5 border 1px solid" style="height: 80px; width: 120px; margin: 10px; "><i class="bi bi-file-earmark-medical"></i> Laudo</button>
							<button type="button" class="btn btn-outline-success mt-5 border 1px solid" style="height: 80px; width: 120px; margin: 10px; "><i class="bi bi-clipboard2-pulse"></i> Exames</button>
							<button type="button" class="btn btn-outline-success mt-5 border 1px solid" style="height: 80px; width: 120px; margin: 10px; "><i class="bi bi-file-text"></i> Receita</button>
							<button type="button" class="btn btn-outline-success mt-5 border 1px solid" style="height: 80px; width: 160px; margin: 10px; "><i class="bi bi-heart-pulse"></i> Procedimento</button>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>
</template>

<script setup>
import Sidebar from '../components/Sidebar.vue'
</script>