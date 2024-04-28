<template>
  <div class="mt-2 mb-4">
    <div class="card p-3">
      <div class="card-body">
        <div class="mb-3">
          <div class="text-center h4">Agenda</div>
          <fieldset class="border rounded-3 h6 p-3">
            <legend class="float-none w-auto px-3 h6">Consultar agenda</legend>

            <div class="row">
              <div class="col-md-12">
                <label for="select_profissional" class="form-label"
                  >Buscar por:</label
                >
              </div>
              <div class="col-md-12">
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    v-model="buscarPor"
                    id="radio_profissional"
                    value="1"
                  />
                  <label class="form-check-label" for="radio_profissional"
                    >Profissional</label
                  >
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    v-model="buscarPor"
                    id="radio_especialidade"
                    value="2"
                  />
                  <label class="form-check-label" for="radio_especialidade"
                    >Especialidade</label
                  >
                </div>
              </div>
              <div class="form-group col-md-6">
                <Select2Component id="select_profissional">
                  <option v-for="(busca, index) in buscaProfissionalEspecialidade" :key="index" :value="'opa'">{{ busca.nome }}</option>
                </Select2Component>
              </div>
            </div>
            <button class="btn btn-outline-success my-2">Buscar agenda</button>
          </fieldset>
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
          <div class="demo-app-main">
            <FullCalendar class="demo-app-calendar" :options="calendarOptions">
              <template v-slot:eventContent="arg">
                <b>{{ arg.timeText }}</b>
                <i>{{ arg.event.title }}</i>
              </template>
            </FullCalendar>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Select2Component from "../Select2Component.vue";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import ptBrLocale from "@fullcalendar/core/locales/pt-br";
import moment from "moment";
import { alertInstance, alertModal } from "../../config/alerts";
import axiosInstance from "../../config/axios";
import { useAuthStore } from "../../stores/AuthStore";

const useAuth = useAuthStore();

onMounted(() => {
  getBuscaProfissionalEspecialidade(buscarPor.value)
})

// BUSCAR PROFISSIONAIS OU ESPECIALIDADES PARA FAZER O FILTRO
const buscarPor = ref('1');
const buscaProfissionalEspecialidade = ref([])
async function getBuscaProfissionalEspecialidade(buscaPor) {
  try {
    if (buscaPor == 1) {

      let response = await axiosInstance.get('/profissional/findByPerfil/002', {
        headers: {
          Authorization: `Bearer ${useAuth.token}`,
        },
      })
      buscaProfissionalEspecialidade.value = response.data.profissionais
    } else if (buscaPor == 2) {
      let response = await axiosInstance.get('/profissional/findByPerfil/002', {
        headers: {
          Authorization: `Bearer ${useAuth.token}`,
        },
      })
      buscaProfissionalEspecialidade.value = response.data.profissionais
    }
  }catch(err) {
    alertInstance(3000, err.response.data.message, 'error')
  }
}


// CALENDÁRIO
const calendarOptions = ref({
  locale: ptBrLocale,
  plugins: [
    dayGridPlugin,
    timeGridPlugin,
    interactionPlugin, // needed for dateClick
  ],
  headerToolbar: {
    left: "prev,next today",
    center: "title",
    right: "dayGridMonth,timeGridWeek,timeGridDay",
  },
  initialView: "timeGridWeek",
  initialEvents: [
    {
      groupId: 'agenda',
      start: '2024-04-25T10:00:00',
      end: '2024-04-25T16:00:00',
      display: 'background',
      color: 'green'
    },
    {
      groupId: 'agenda',
      start: '2024-04-27T07:00:00',
      end: '2024-04-27T12:00:00',
      display: 'background',
      color: 'green'
    },
  ], // alternatively, use the `events` setting to fetch from a feed
  editable: true,
  selectable: true,
  selectMirror: true,
  dayMaxEvents: true,
  weekends: true,
  select: handleDateSelect,
  eventClick: handleEventClick,
  eventsSet: handleEvents,
  eventResize: handleEventResize
});
function handleDateSelect(selectInfo) {
  let calendarApi = selectInfo.view.calendar;
  calendarApi.unselect(); // clear date selection

  // Obter todos os eventos
  let allEvents = calendarApi.getEvents();

  // Filtrar eventos com groupId igual a 'agenda'
  let agendaEvents = allEvents.filter(event => event.groupId === 'agenda');

  var isPermition = false
  agendaEvents.forEach(event => {

    if (
      moment(selectInfo.start).isBetween(event.start, event.end, undefined, '[]') &&
      moment(selectInfo.end).isBetween(event.start, event.end, undefined, '[]')
    ) {
      isPermition = true
    }
  });


  if (isPermition) {
    let title = prompt("Agendar paciente");
    if (title) {
      calendarApi.addEvent({
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  } else {
    alertModal('Atenção', 'Não é possível agendar consulta nesse período', 'error')
  }
}
function handleEventClick(clickInfo) {
  if (
    confirm(
      `Are you sure you want to delete the event '${clickInfo.event.title}'`
    )
  ) {
    clickInfo.event.remove();
  }
}
function handleEventResize(info) {
  console.log(moment(info.event.start).format("YYYY-MM-DD HH:MM"));
  console.log(moment(info.event.end).format("YYYY-MM-DD HH:MM"));
}
function handleEvents(events) {
  this.currentEvents = events;
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

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
