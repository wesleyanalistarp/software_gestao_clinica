<template>
	<Sidebar />
	<div>
		<div class="container-fluid">
			<div class="card">
				<div class="row">
					<div class="col">
						<div class="card-botoes mt-1">
							<button type="button" class="btn btn-outline-success mt-5 border 1px solid"
								data-bs-toggle="collapse" data-bs-target="#collapseExample" role="button"
								area-expanded="false" aria-controls="collapseExample"
								style="height: 80px; width: 120px; margin: 10px; "><i class="bi bi-person-add"></i>
								Cadastrar</button>
							<button type="button" class="btn btn-outline-success mt-5 border 1px solid"
								style="height: 80px; width: 120px; margin: 10px; "><i class="bi bi-pencil-square"></i>
								Editar</button>
							<button type="button" class="btn btn-outline-success mt-5 border 1px solid"
								style="height: 80px; width: 130px; margin: 10px; "><i class="bi bi-search"></i>
								Buscar</button>
							<button type="button" class="btn btn-outline-success mt-5 border 1px solid"
								style="height: 80px; width: 120px; margin: 10px; "><i
									class="bi bi-file-earmark-medical"></i> Laudo</button>
							<button type="button" class="btn btn-outline-success mt-5 border 1px solid"
								style="height: 80px; width: 120px; margin: 10px; "><i class="bi bi-clipboard2-pulse"></i>
								Exames</button>
							<button type="button" class="btn btn-outline-success mt-5 border 1px solid"
								style="height: 80px; width: 120px; margin: 10px; "><i class="bi bi-file-text"></i>
								Receita</button>
							<button type="button" class="btn btn-outline-success mt-5 border 1px solid"
								style="height: 80px; width: 160px; margin: 10px; "><i class="bi bi-heart-pulse"></i>
								Procedimento</button>
						</div>
					</div>
				</div>

			</div>
			<!--inicio do formulário do paciente-->
			<div class="collapse" id="collapseExample">
				<div class="card-body mt-2 ">
					<div class="card  p-3">
						<div class="text-center h4 mt-2 mb-3">Formulário de cadastro do paciente</div>
						<fieldset class="border rounded-3 h6 p-3 ">
							<legend class="float-none w-auto px-3 h6 ">Informações</legend>
							<div class="row">
								<div class="mb-2 mt-2 col-4">
									<label for="exampleInputEmail1" class="form-label">Nome</label>
									<input type="text" class="form-control form-control-sm" id="exampleInputEmail1"
									aria-describedby="emailHelp" placeholder="Digite o nome do paciente">
								</div>
								<div class="mb-3 mt-2 col-2">
									<label for="exampleInputEmail1" class="form-label">Nascimento</label>
									<input type="date" class="form-control form-control-sm" id="exampleInputEmail1"
										aria-describedby="emailHelp" placeholder="Digite o nome do paciente">
								</div>
								<div class="mb-3 mt-2 col-2">
									<label for="exampleInputEmail1" class="form-label">CPF</label>
									<input type="number" class="form-control form-control-sm" id="exampleInputEmail1"
										aria-describedby="emailHelp" placeholder="Digite o CPF">
								</div>
								<div class="mb-3 mt-2 col-2">
									<label for="exampleInputEmail1" class="form-label">RG</label>
									<input type="number" class="form-control form-control-sm" id="exampleInputEmail1"
										aria-describedby="emailHelp" placeholder="Digite o número da identidade">
								</div>
								<div class="mb-3 mt-2 col-2">
									<label for="exampleInputEmail1" class="form-label">Telefone</label>
									<input type="number" class="form-control form-control-sm" id="exampleInputEmail1"
										aria-describedby="emailHelp" placeholder="Digite o número do telefone">
								</div>
								<div class="mb-3 mt-2 col-3">
									<label for="exampleInputEmail1" class="form-label">CNS</label>
									<input type="number" class="form-control form-control-sm" id="exampleInputEmail1"
										aria-describedby="emailHelp" placeholder="Número do cartão do SUS">
								</div>
								<div class="mb-3 mt-2 col-3">
									<label for="exampleInputEmail1" class="form-label">Nome da mãe</label>
									<input type="text" class="form-control form-control-sm" id="exampleInputEmail1"
										aria-describedby="emailHelp" placeholder="Digite o nome da mãe">
								</div>

								<div class="mb-3 mt-2 col-2">
									<label for="exampleInputEmail1" class="form-label">Estado Civil</label>
									<select class="form-select form-select-sm" aria-label="Small select example">
										<option selected>Selecione</option>
										<option value="1">Solteiro</option>
										<option value="2">Casado</option>
										<option value="3">União Estável</option>
									</select>
								</div>
								<div class="mb-3 mt-2 col-2">
									<label for="exampleInputEmail1" class="form-label">Sexo</label>
									<select class="form-select form-select-sm" aria-label="Small select example">
										<option selected>Selecione</option>
										<option value="1">Masculino</option>
										<option value="2">Feminino</option>
										<option value="3">Outros</option>
									</select>
								</div>
								<div class="mb-3 mt-2 col-2">
									<label for="exampleInputEmail1" class="form-label">Escolaridade</label>
									<select class="form-select form-select-sm" aria-label="Small select example">
										<option selected>Selecione</option>
										<option value="1">Não alfabetizado</option>
										<option value="2">Ensino fundamental completo</option>
										<option value="3">Ensino fundamental incompleto</option>
										<option value="4">Ensino médio completo</option>
										<option value="4">Ensino médio incompleto</option>
										<option value="4">Nível superior completo</option>
										<option value="4">Nível superior incompleto</option>
									</select>
								</div>
							</div>
						</fieldset>
						<br>
						<!--declaração do endereço do paciente-->
						<fieldset class="border rounded-3 h6 p-3 ">
							<legend class="float-none w-auto px-3 h6 ">Endereço</legend>
							<div class="row">
								<div class="mb-3 mt-2 col-2">
									<label for="exampleInputEmail1" class="form-label">estado</label>
									<select class="form-select form-select-sm" aria-label="Small select example">
										<option selected>Selecione</option>
										<option value="1">AC</option>
										<option value="1">AL</option>
										<option value="1">AP</option>
										<option value="1">AM</option>
										<option value="1">BA</option>
										<option value="1">CE</option>
										<option value="1">ES</option>
										<option value="1">GO</option>
										<option value="1">MA</option>
										<option value="1">MT</option>
										<option value="1">MS</option>
										<option value="1">MG</option>
										<option value="1">PA</option>
										<option value="1">PB</option>
										<option value="1">PR</option>
										<option value="1">PE</option>
										<option value="1">PI</option>
										<option value="1">RJ</option>
										<option value="1">RN</option>
										<option value="1">RS</option>
										<option value="1">RO</option>
										<option value="1">RR</option>
										<option value="1">SC</option>
										<option value="1">SP</option>
										<option value="1">SE</option>
										<option value="1">TO</option>
									</select>
								</div>
								<div class="mb-2 mt-2 col-3">
									<label for="exampleInputEmail1" class="form-label">Cidade</label>
									<input type="text" class="form-control form-control-sm" id="exampleInputEmail1"
										aria-describedby="emailHelp" placeholder="Nome da cidade">
								</div>
								<div class="mb-3 mt-2 col-3">
									<label for="exampleInputEmail1" class="form-label">Bairro</label>
									<input type="text" class="form-control form-control-sm" id="exampleInputEmail1"
										aria-describedby="emailHelp" placeholder="Nome do bairro">
								</div>
								<div class="mb-3 mt-2 col-3">
									<label for="exampleInputEmail1" class="form-label">Rua</label>
									<input type="text" class="form-control form-control-sm" id="exampleInputEmail1"
										aria-describedby="emailHelp" placeholder="Nome da rua">
								</div>
								<div class="mb-3 mt-2 col-1">
									<label for="exampleInputEmail1" class="form-label">Número</label>
									<input type="text" class="form-control form-control-sm" id="exampleInputEmail1"
										aria-describedby="emailHelp" placeholder="Número">
								</div>
								<div class="mb-3 mt-2 col-2">
									<label for="exampleInputEmail1" class="form-label">CEP</label>
									<input type="number" class="form-control form-control-sm" id="exampleInputEmail1"
										aria-describedby="emailHelp" placeholder="Cep da cidade">
								</div>
							</div>
						</fieldset>
						<br>
						<!--decalração do convênio do paciente-->
						<fieldset class="border rounded-3 h6 p-3 ">
							<legend class="float-none w-auto px-3 h6 ">Convênio</legend>
							<div class="row">
								<div class="mb-3 mt-2 col-2">
									<label for="exampleInputEmail1" class="form-label">Tipo do Convênio</label>
									<select class="form-select form-select-sm" aria-label="Small select example">
										<option selected>Selecione</option>
										<option value="1">Unimed</option>
										<option value="2">Sulamérica</option>
										<option value="3">Bradesco</option>
									</select>
								</div>
								<div class="mb-3 mt-2 col-3">
									<label for="exampleInputEmail1" class="form-label">Matrícula</label>
									<input type="text" class="form-control form-control-sm" id="exampleInputEmail1"
										aria-describedby="emailHelp" placeholder="Número da matrícula">
								</div>
								<div class="mb-3 mt-2 col-3">
									<label for="exampleInputEmail1" class="form-label">Nº</label>
									<input type="number" class="form-control form-control-sm" id="exampleInputEmail1"
										aria-describedby="emailHelp" placeholder="Digite o número">
								</div>
								<div class="mb-3 mt-2 col-3">
									<label for="exampleInputEmail1" class="form-label">Registro</label>
									<input type="text" class="form-control form-control-sm" id="exampleInputEmail1"
										aria-describedby="emailHelp" placeholder="Digite o registro">
								</div>
							</div>
						</fieldset>
						<br>
						<div class="button">
							<button type="submit" class="btn btn-outline-success">Cadastrar</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!--fim do formulário do paciente-->
</template>

<script setup>
import Sidebar from '../components/Sidebar.vue'
</script>

<style scope>

</style>