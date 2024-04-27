<template>
  <div class="mt-2">
    <div class="card p-3">
      <div class="card mb-3">
        <div class="input-group mb-3">
          <span class="input-group-text m-2" id="inputGroup-sizing-default"
            >Consultar agenda
            <input
              type="text"
              class="form-control m-2"
              placeholder="Digite o nome do médico "
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
          /></span>

          <select class="form-select font-size-sm m-2" style="width: 190px">
            <option selected>Buscar agenda por Especialidade</option>
            <option value="1">Puxar do banco</option>
          </select>
          <button
            type="button"
            class="btn btn-outline-success btn-sm mt-2"
            style="height: 68px"
          >
            Buscar agenda
          </button>
        </div>
        <div class="button">
          <button
            type="submit"
            class="btn btn-outline-success"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            style="height: 40px; width: 199px; margin: 10px"
          >
            <i class="fa-solid fa-plus"></i>
            Criar agenda médico
          </button>
          <button
            type="submit"
            class="btn btn-outline-success"
            data-bs-toggle="modal"
            data-bs-target="#agendamento_paciente"
            style="height: 40px; width: 270px; margin: 10px"
          >
            <i class="fa-solid fa-eye"></i>
            Agendamento do paciente
          </button>
          <button
            type="submit"
            class="btn btn-outline-success"
            data-bs-toggle="modal"
            data-bs-target="#lista_especialidade"
            style="height: 40px; width: 290px; margin: 10px"
          >
            <i class="fa-solid fa-magnifying-glass"></i>
            Consultar lista por especialidade
          </button>
        </div>
      </div>
      <!--Inicio do modal para criar a agenda médica-->
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">
                Criar agenda médica
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="input-group mb-3">
                <Combobox :load-options="loadUsers" v-model="loadUser" />
              </div>
              <div class="texto">
                Selecione a data:
                <input type="date" />
              </div>
              <div class="time">
                <p class="subscribe">
                  Das <input type="time" /> as <input type="time" />
                  <a href="#">
                    <button
                      class="btn btn-outline-success btn-sm"
                      type="button"
                      id="button-addon2"
                    >
                      <i class="fa-solid fa-plus"></i> Adicionar
                    </button></a
                  >
                </p>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckIndeterminate"
                />
                <label class="form-check-label" for="flexCheckIndeterminate">
                  Atenderá todos os dias da semana horário comércial
                </label>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-success"
                data-bs-dismiss="modal"
              >
                Criar agenda
              </button>
            </div>
          </div>
        </div>
      </div>
      <!--fim do modal para criar a agenda médica-->
      <!--**************************************************************************************************-->
      <!--Inicio do modal para consultar a agenda do paciente-->
      <div
        class="modal fade"
        id="agendamento_paciente"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">
                Consultar agendamento do paciente
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Digite o nome do paciente"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  class="btn btn-outline-success"
                  type="button"
                  id="button-addon2"
                >
                  <i class="fa-solid fa-magnifying-glass"></i> Localizar
                </button>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-success"
                data-bs-dismiss="modal"
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      </div>
      <!--fim do modal para consultar a agenda do paciente-->
      <!--*******************************************************************************-->
      <!--inicio do modal para consultar a lista de frequência por especialidade-->
      <div
        class="modal fade"
        id="lista_especialidade"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">
                Consultar lista de paciente por especialidade
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <select class="form-select font-size-sm m-2 col-12">
                <option selected>Consultar por Especialidade</option>
                <option value="1">Puxar do banco</option>
              </select>
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Paciente</th>
                    <th scope="col">Profissional</th>
                    <th scope="col">Horário</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Wesley</td>
                    <td>Dr.Jefersson</td>
                    <td>10:30</td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>Wesley</td>
                    <td>Dr.Jefersson</td>
                    <td>10:30</td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>Wesley</td>
                    <td>Dr.Jefersson</td>
                    <td>10:30</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-success"
                data-bs-dismiss="modal"
              >
                Imprimir lista
              </button>
            </div>
          </div>
        </div>
      </div>
      <!--fim do modal para consultar a lista de frequência por especialidade-->

      <div class="card-body">
        <div class="text-center h4">Agenda</div>
        <div class="demo-app">
          <div class="demo-app-main"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Combobox from "../Combobox.vue";
import axiosInstance from "../../config/axios";
import { useAuthStore } from "../../stores/AuthStore";
const useAuth = useAuthStore();

const loadUser = ref();

function loadUsers(query, setOptions) {
  axiosInstance
    .get(`/profissional/findByNome/${query}`, {
      headers: {
        Authorization: `Bearer ${useAuth.token}`,
      },
    })
    .then((response) => response.data.profissionais)
    .then((results) => {
      setOptions(
        results.map((profissional) => {
          return {
            value: profissional.id,
            label: profissional.nome,
          };
        })
      );
    })
    ;
}
</script>

<style>
.demo-app a {
  text-decoration: none;
  color: black;
}

.demo-app {
  display: flex;
  min-height: 100%;
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  font-size: 14px;
}

.demo-app-main {
  flex-grow: 1;
}

.fc {
  /* the calendar root */
  max-width: 1100px;
  margin: 0 auto;
}

.time {
  margin: 5px;
}
</style>