<template>
    <Sidebar />
    <div>
        <div class="container">
            <div class="card" width="100%" height="60px">
                <div class="nome">
                    <table>
                        <tr>
                            <td><img src="../assets/teste.webp" width="150px" height="150px"></td>
                            <td class="identi"> Wesley Ramon de Assis <br>
                                34 anos
                                Prontuário:
                                Nº 12
                                <span class="badge text-bg-primary indicador">Particular</span>
                                <span class="badge text-bg-warning indicador">Convênio</span><br>
                                <a href="#"><abbr title="Alergias clique no icone"><i
                                            class="fa-solid fa-triangle-exclamation icone1" data-bs-toggle="modal"
                                            data-bs-target="#alergias"></i></abbr></a>
                                <a href="#"><abbr title="Histórico do paciente clique no icone "><i
                                            class="fa-solid fa-binoculars icone2" data-bs-toggle="modal"
                                            data-bs-target="#historico"></i></abbr></a>
                                <a href="#"><abbr title="Exames do paciente clique no icone "><i
                                            class="fa-solid fa-hospital-user icone3" data-bs-toggle="modal"
                                            data-bs-target="#Exames"></i></abbr></a>
                                <a href="#"><abbr title="Medicamento em uso clique no icone "><i
                                            class="fa-solid fa-capsules icone3" data-bs-toggle="modal"
                                            data-bs-target="#medicacao"></i></abbr></a>

                                <div class="position-absolute top-0 end-0">
                                    <button type="button" class="btn btn-outline-success m-2">
                                        <i class="fa-solid fa-play"></i> Iniciar Atendimento
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>

            <!--inicio do modal dos icones-->
            <div class="modal fade" id="alergias" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Alergia</h1>
                        </div>
                        <div class="modal-body">
                            <p class="Subscrible">Puxando informações do banco quando fez o cadastro do paciente já
                                cadastrou a alergia</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Fechar</button>
                        </div>
                    </div>
                </div>
            </div>
            <!--*********************************************************-->
            <div class="modal fade" id="medicacao" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Medicamento em uso</h1>
                        </div>
                        <div class="modal-body">
                            <p class="Subscrible">Puxando informações do banco quando fez o cadastro do paciente já
                                cadastrou a alergia</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Fechar</button>
                        </div>
                    </div>
                </div>
            </div>
            <!--*********************************************************-->
            <div class="modal fade" id="historico" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Histórico</h1>
                        </div>
                        <div class="modal-body">
                            <div class="accordion" id="accordionExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Atendimento: 12/02/2024
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show"
                                        data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <strong>This is the first item's accordion body.</strong> It is shown by
                                            default, until the collapse plugin adds the appropriate classes that we use
                                            to style each element. These classes control the overall appearance, as well
                                            as the showing and hiding via CSS transitions. You can modify any of this
                                            with custom CSS or overriding our default variables. It's also worth noting
                                            that just about any HTML can go within the <code>.accordion-body</code>,
                                            though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Atendimento: 22/01/2024
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse"
                                        data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <strong>This is the second item's accordion body.</strong> It is hidden by
                                            default, until the collapse plugin adds the appropriate classes that we use
                                            to style each element. These classes control the overall appearance, as well
                                            as the showing and hiding via CSS transitions. You can modify any of this
                                            with custom CSS or overriding our default variables. It's also worth noting
                                            that just about any HTML can go within the <code>.accordion-body</code>,
                                            though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree" aria-expanded="false"
                                            aria-controls="collapseThree">
                                            Atendimento: 16/01/2023
                                        </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse"
                                        data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <strong>This is the third item's accordion body.</strong> It is hidden by
                                            default, until the collapse plugin adds the appropriate classes that we use
                                            to style each element. These classes control the overall appearance, as well
                                            as the showing and hiding via CSS transitions. You can modify any of this
                                            with custom CSS or overriding our default variables. It's also worth noting
                                            that just about any HTML can go within the <code>.accordion-body</code>,
                                            though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Fechar</button>
                        </div>
                    </div>
                </div>
            </div>
            <!--*******************************************************************************************************************-->

            <div class="modal fade" id="Exames" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Exames</h1>
                        </div>
                        <div class="modal-body">
                            <div class="accordion" id="accordionExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Exames do dia: 12/02/2024
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show"
                                        data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <strong>This is the first item's accordion body.</strong> It is shown by
                                            default, until the collapse plugin adds the appropriate classes that we use
                                            to style each element. These classes control the overall appearance, as well
                                            as the showing and hiding via CSS transitions. You can modify any of this
                                            with custom CSS or overriding our default variables. It's also worth noting
                                            that just about any HTML can go within the <code>.accordion-body</code>,
                                            though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Exames do dia: 22/01/2024
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse"
                                        data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <strong>This is the second item's accordion body.</strong> It is hidden by
                                            default, until the collapse plugin adds the appropriate classes that we use
                                            to style each element. These classes control the overall appearance, as well
                                            as the showing and hiding via CSS transitions. You can modify any of this
                                            with custom CSS or overriding our default variables. It's also worth noting
                                            that just about any HTML can go within the <code>.accordion-body</code>,
                                            though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree" aria-expanded="false"
                                            aria-controls="collapseThree">
                                            Exames do dia: 16/01/2023
                                        </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse"
                                        data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <strong>This is the third item's accordion body.</strong> It is hidden by
                                            default, until the collapse plugin adds the appropriate classes that we use
                                            to style each element. These classes control the overall appearance, as well
                                            as the showing and hiding via CSS transitions. You can modify any of this
                                            with custom CSS or overriding our default variables. It's also worth noting
                                            that just about any HTML can go within the <code>.accordion-body</code>,
                                            though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Fechar</button>
                        </div>
                    </div>
                </div>
            </div>

            <!--******************************************************************************************************************-->
            <ul class="nav nav-pills mb-3 mt-3" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home"
                        type="button" role="tab" aria-controls="pills-home" aria-selected="true">Anamnese</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile"
                        type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Diagnóstico</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact"
                        type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Anexar imagens</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-disabled"
                        type="button" role="tab" aria-controls="pills-disabled" aria-selected="false">Prescrição</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-exames-tab" data-bs-toggle="pill" data-bs-target="#pills-exames"
                        type="button" role="tab" aria-controls="pills-disabled" aria-selected="false">Solicitar Exames</button>
                </li>
            </ul>

            <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"
                    tabindex="0">
                    <div class="card">
                        <!-- <div class="row"> -->
                        <fieldset class="border rounded-3 h6 p-3 ">
                            <legend class="float-none w-auto px-3 h6 ">Anamnese:</legend>
                            <div class="row">
                                <div class="mb-3 mt-2 col-2">
                                    <label for="exampleInputEmail1" class="form-label">PA</label>
                                    <input type="text" class="form-control form-control-sm " id="exampleInputEmail1"
                                        placeholder="12/08">
                                </div>
                                <div class="mb-3 mt-2 col-2">
                                    <label for="exampleInputEmail1" class="form-label">Altura</label>
                                    <input type="number" class="form-control form-control-sm input-number"
                                        id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Qual altura?">
                                </div>
                                <div class="mb-3 mt-2 col-2">
                                    <label for="exampleInputEmail1" class="form-label">Peso</label>
                                    <input type="number" class="form-control form-control-sm input-number"
                                        id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Qual peso?">
                                </div>
                                <div class="mb-3 mt-2 col-2">
                                    <label for="exampleInputEmail1" class="form-label">IMC</label>
                                    <input type="number" class="form-control form-control-sm input-number"
                                        id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="IMC">
                                </div>

                                <fieldset class="border rounded-3 h6 p-2 ">
                                    <legend class="float-none w-auto px-3 h6 ">Fumante?</legend>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault1">
                                        <label class="form-check-label" for="flexRadioDefault1">Sim</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault2">
                                        <label class="form-check-label" for="flexRadioDefault2">Não </label>
                                    </div>
                                </fieldset>
                                <fieldset class="border rounded-3 h6 p-2 ">
                                    <legend class="float-none w-auto px-3 h6 ">Diabético?</legend>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="diabetico" id="diabetico1">
                                        <label class="form-check-label" for="diabetico1">Sim</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="diabetico" id="diabetico2">
                                        <label class="form-check-label" for="diabetico2">Não</label>
                                    </div>
                                </fieldset>
                                <fieldset class="border rounded-3 h6 p-2 ">
                                    <legend class="float-none w-auto px-3 h6 ">Hipertenso?</legend>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="hipertenso" id="hipertenso1">
                                        <label class="form-check-label" for="hipertenso1">Sim</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="hipertenso" id="hipertenso2">
                                        <label class="form-check-label" for="hipertenso2">Não</label>
                                    </div>
                                </fieldset>
                            </div>
                        </fieldset>
                        <!-- </div> -->
                    </div>
                </div>
            </div>

            <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"
                    tabindex="0">
                    <div class="card">
                        <fieldset class="border rounded-3 h6 p-3 ">
                            <legend class="float-none w-auto px-3 h6 ">Diagnóstico</legend>
                            <div class="row">
                                <div class="mb-3 mt-2 col-12">
                                    <label for="floatingTextarea2">Diagnóstico principal</label>
                                    <textarea class="form-control" cols="133" id="floatingTextarea2"></textarea>
                                </div>
                                <div class="mb-3 mt-2 col-6">
                                    <label for="exampleInputEmail1" class="form-label">CID </label>
                                    <div class="input-group">
                                        <input type="text" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload">
                                        <button class="btn btn-outline-success" type="button" id="inputGroupFileAddon04">Adicionar</button>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3 mt-2 col-2">
                                <button type="button" class="btn btn-outline-success p-7">Salvar</button>
                            </div>
                        </fieldset>
                    </div>
                </div>
            </div>

            <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"
                    tabindex="0">
                    <div class="card">
                        <fieldset class="border rounded-3 h6 p-3 ">
                            <legend class="float-none w-auto px-3 h6 ">Carregar imagens</legend>
                            <div class="row">
                                <div class="input-group">
                                    <input type="file" class="form-control" id="inputGroupFile04"
                                        aria-describedby="inputGroupFileAddon04" aria-label="Upload">
                                    <button class="btn btn-outline-success" type="button"
                                        id="inputGroupFileAddon04">Carregar documento</button>
                                </div>
                                <div class="mb-3 mt-2 col-12">
                                    <label for="floatingTextarea2">Comentários</label>
                                    <textarea class="form-control" cols="90" id="floatingTextarea2"></textarea>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                </div>
            </div>

            <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab"
                    tabindex="0">
                    <div class="card">
                        <fieldset class="border rounded-3 h6 p-3 ">
                            <legend class="float-none w-auto px-3 h6 ">Receita:</legend>
                            <div class="row">
                                <div class="mb-3 mt-2 col-4">
                                    <label for="exampleInputEmail1" class="form-label">Medicamentos</label>
                                    <input type="text" class="form-control form-control-sm " id="exampleInputEmail1"
                                        placeholder="Digite o nome do medicamento">
                                </div>
                                <div class="mb-3 mt-2 col-3">
                                    <label for="exampleInputEmail1" class="form-label">Apresentação</label>
                                    <input type="text" class="form-control form-control-sm input-number"
                                        id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="100mg">
                                </div>
                                <div class="mb-3 mt-2 col-2">
                                    <label for="exampleInputEmail1" class="form-label">Quantidade</label>
                                    <input type="text" class="form-control form-control-sm input-number"
                                        id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="01 caixa">
                                </div>
                                <div class="mb-3 mt-2 col-2">
                                    <label for="exampleInputEmail1" class="form-label">Uso</label>
                                    <input type="text" class="form-control form-control-sm input-number"
                                        id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Interno">
                                </div>
                                <div class="mb-3 mt-2 col-9">
                                    <label for="floatingTextarea2">Possologia</label>
                                    <textarea class="form-control" cols="90" rows="8" placeholder="Administração de uso "
                                        id="floatingTextarea2"></textarea>
                                </div>
                                <div class="mb-3 mt-2 col-6">
                                    <label for="floatingTextarea2">Observação</label>
                                    <textarea class="form-control" cols="90" rows="8"
                                        placeholder="Faça sua observação quanto ao uso do medicamento aqui"
                                        id="floatingTextarea2"></textarea>
                                </div>
                            </div>
                            <div class="col mt-1 mb-1">
                                <button type="button" class="btn btn-outline-success m-2">
                                    <i class="fa-solid fa-plus"></i> Inserir Medicamento
                                </button>
                                <button type="button" class="btn btn-outline-success m-2">
                                    <i class="fa-regular fa-file"></i> Gerar Receita
                                </button>
                            </div>
                        </fieldset>
                    </div>
                </div>
            </div>
            <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade" id="pills-exames" role="tabpanel" aria-labelledby="pills-profile-tab"
                    tabindex="0">
                    <div class="card">
                        <fieldset class="border rounded-3 h6 p-3 ">
                            <legend class="float-none w-auto px-3 h6 ">Exames</legend>
                            <div class="row">
                                <div class="input-group">
                                    <input type="text" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload">
                                    <button class="btn btn-outline-success" type="button" id="inputGroupFileAddon04">Adicionar</button>
                                </div>
                                <div class="mb-3 mt-5 col-12">
                                    <label for="floatingTextarea2">Observação quanto a solicitação dos exames</label>
                                    <textarea class="form-control" cols="133" rows="5" id="floatingTextarea2"></textarea>
                                </div>
                                <div class="col mt-1 mb-1">
                                <button type="button" class="btn btn-outline-success m-2">
                                    <i class="fa-regular fa-folder-open"></i> Salvar
                                </button>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Sidebar from '../components/Sidebar.vue'


</script>

<style scoped>
.input-number::-webkit-inner-spin-button {
    -webkit-appearance: none;
}

.container {
    max-width: 1400px;

}

.indicador {
    padding: 5px;
    margin: 2px;
}

.icones {
    margin-left: 155px;
}

.icone {
    margin: 8px;
    color: var(--dark);
    font-size: 20px;
}

.icone1 {
    margin: 8px;
    color: orange;
    font-size: 20px;
}

.icone2 {
    margin: 8px;
    color: rgb(0, 183, 255);
    font-size: 20px;
}

.icone3 {
    margin: 8px;
    color: rgb(0, 183, 255);
    font-size: 20px;
}

.icone1:hover {
    color: rgb(201, 135, 14);
    transform: scale(1.3);
    transition: all 0.5s ease-in-out;

}

text {
    display: none;
}

text:hover {
    display: inline;
}

.icone2:hover {
    color: rgb(14, 173, 201);
    transform: scale(1.3);
    transition: all 0.5s ease-in-out;

}

.icone3:hover {
    color: rgb(14, 195, 201);
    transform: scale(1.3);
    transition: all 0.5s ease-in-out;

}

.icone:hover {
    color: rgba(7, 132, 235, 0.911);
}

.identi {
    font-size: 20px;
}

.floatingTextarea2 {
    margin: 5px;
}

/* .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    width: 85vw;
    min-height: 70vh;
}

.upload-area {
    text-align: center;
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: 600;
}

.uploadlabel {
    width: 100%;
    min-height: 100px;
    background: #18a7ff0d;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 3px dashed #18a7ff82;
    cursor: pointer;
}

.uploadlabel span {
    font-size: 70px;
    color: #18a7ff82;
}


.uploadlabel p {
    color: #18a7ff82;
    font-size: 20px;
    font-weight: 800;
    font-family: cursive;
}

.uploader {
    margin: 30px 0;
    font-size: 16px;
    font-weight: 700;
    color: #a5a5a5;
}

.showfilebox {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;
    padding: 10px 15px;
    box-shadow: #0000000d 0px 0px 0px 1px, #d1d5db3b, 0px 0px 0px 1px inset;

}

.showfilebox .left {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
}

.filetype {
    background: #18a7ff;
    color: #fff;
    padding: 5px 15px;
    font-size: 20px;
    text-transform: capitalize;
    font-weight: 700;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -ms-border-radius: 3px;
    -o-border-radius: 3px;
}

.left h3 {
    font-weight: 600;
    font-size: 18px;
    color: #292f42;
    margin: 0;
}

.right span {
    background: #18a7ff;
    color: #fff;
    width: 25px;
    height: 25px;
    font-size: 25px;
    line-height: 25px;
    display: inline-block;
    text-align: center;
    font-weight: 700;
    cursor: pointer;
    border-radius: 50%;
} */

fieldset {
    margin: 10px;
}
</style>