<template>
  <div>
    <div class="card-body mt-2">
      <div class="card p-3">
        <div class="text-center h4 mt-2 mb-3">
          Formulário de Cadastro do Profissional
        </div>
        <fieldset class="border rounded-3 h6 p-3">
          <legend class="float-none w-auto px-3 h6">Informações</legend>
          <div class="row">
            <div class="mb-2 mt-2 col-4">
              <label for="exampleInputEmail1" class="form-label">Nome</label>
              <input
                type="text"
                class="form-control form-control-sm"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Digite o nome do profissional"
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
              <label for="exampleInputEmail1" class="form-label">CPF</label>
              <input
                type="number"
                class="form-control form-control-sm"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Digite o CPF"
              />
            </div>
            <div class="mb-3 mt-2 col-2">
              <label for="exampleInputEmail1" class="form-label">RG</label>
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
                >Telefone</label
              >
              <input
                type="number"
                class="form-control form-control-sm"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Digite o número"
              />
            </div>
            <div class="mb-3 mt-2 col-3">
              <label for="exampleInputEmail1" class="form-label">CNS</label>
              <input
                type="number"
                class="form-control form-control-sm"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Número do cartão do SUS"
              />
            </div>
            <div class="mb-3 mt-2 col-3">
              <label for="exampleInputEmail1" class="form-label">CRM</label>
              <input
                type="number"
                class="form-control form-control-sm"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Digite o número do CRM"
              />
            </div>
            <div class="mb-3 mt-2 col-3">
              <label for="exampleInputEmail1" class="form-label">CBO</label>
              <input
                type="number"
                class="form-control form-control-sm"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Código brasileiro de ocupação"
              />
            </div>
            <div class="mb-3 mt-2 col-2">
              <label for="exampleInputEmail1" class="form-label"
                >Especialidade</label
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
              <label for="exampleInputEmail1" class="form-label"
                >Estado Civil</label
              >
              <select
                class="form-select form-select-sm"
                aria-label="Small select example"
              >
                <option selected>Selecione</option>
                <option value="1">Solteiro</option>
                <option value="2">Casado</option>
                <option value="3">União Estável</option>
              </select>
            </div>
            <div class="mb-3 mt-2 col-2">
              <label for="exampleInputEmail1" class="form-label">Sexo</label>
              <select
                class="form-select form-select-sm"
                aria-label="Small select example"
              >
                <option selected>Selecione</option>
                <option value="1">Masculino</option>
                <option value="2">Feminino</option>
                <option value="3">Outros</option>
              </select>
            </div>

            <div class="mb-3 mt-2 col-2">
              <label for="exampleInputEmail1" class="form-label"
                >Perfil</label
              >
              <select
                class="form-select form-select-sm"
                aria-label="Small select example"
              >
                <option selected>Selecione</option>
                <option value="1">Médico</option>
                <option value="1">Administrador</option>
                <option value="1">Enfermeiro</option>
                <option value="1">Recepção</option>
              </select>
            </div>
          </div>
        </fieldset>
        <br />
        <!--declaração do endereço do paciente-->
        <fieldset class="border rounded-3 h6 p-3">
          <legend class="float-none w-auto px-3 h6">Endereço</legend>
          <div class="row">
            <div class="mb-3 mt-2 col-2">
              <label for="exampleInputEmail1" class="form-label"
                >estado</label
              >
              <select
                class="form-select form-select-sm"
                aria-label="Small select example"
              >
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
              <label for="exampleInputEmail1" class="form-label"
                >Cidade</label
              >
              <input
                type="text"
                class="form-control form-control-sm"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Nome da cidade"
              />
            </div>
            <div class="mb-3 mt-2 col-3">
              <label for="exampleInputEmail1" class="form-label"
                >Bairro</label
              >
              <input
                type="text"
                class="form-control form-control-sm"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Nome do bairro"
              />
            </div>
            <div class="mb-3 mt-2 col-3">
              <label for="exampleInputEmail1" class="form-label">Rua</label>
              <input
                type="text"
                class="form-control form-control-sm"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Nome da rua"
              />
            </div>
            <div class="mb-3 mt-2 col-2">
              <label for="exampleInputEmail1" class="form-label"
                >Número</label
              >
              <input
                type="text"
                class="form-control form-control-sm"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Número"
              />
            </div>
            <div class="mb-3 mt-2 col-2">
              <label for="exampleInputEmail1" class="form-label">CEP</label>
              <input
                type="number"
                class="form-control form-control-sm"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Cep da cidade"
              />
            </div>
          </div>
        </fieldset>
        <br />
        <div class="button">
          <button type="submit" class="btn btn-outline-success" style="height: 40px; width: 120px; margin: 10px;">
            Cadastrar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: "CadastrarProfissionalComponent",
    data() {
        return {
            
        }
    }
})
</script>