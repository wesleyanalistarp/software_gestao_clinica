<template>
    <Sidebar />
    <div>
        <div class="container-fluid">
            <div class="card" width="100%" height="60px">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque fuga rerum ex. Quisquam,
                    sapiente voluptas assumenda exercitationem quo aut sunt officia quam fugit perspiciatis
                    praesentium quidem libero nisi corrupti fugiat?</p>
            </div>

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
                        type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Anexar exames</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-disabled"
                        type="button" role="tab" aria-controls="pills-disabled" aria-selected="false">Disabled</button>
                </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"
                    tabindex="0">
                    <div class="card">
                        <fieldset class="border rounded-3 h6 p-3 ">
                            <legend class="float-none w-auto px-3 h6 ">Anamnese</legend>
                            <div class="row">
                                <!-- <div class="container"> -->
                                <fieldset class="border rounded-3 h6 p-2 ">
                                    <legend class="float-none w-auto px-3 h6 ">Informações:</legend>
                                    <div class="row">
                                        <div class="mb-3 mt-2 col-2">
                                            <label for="exampleInputEmail1" class="form-label">PA</label>
                                            <input type="text" class="form-control form-control-sm " id="exampleInputEmail1"
                                                placeholder="12/08">
                                        </div>
                                        <div class="mb-3 mt-2 col-2">
                                            <label for="exampleInputEmail1" class="form-label">Altura</label>
                                            <input type="number" class="form-control form-control-sm input-number"
                                                id="exampleInputEmail1" aria-describedby="emailHelp"
                                                placeholder="Qual altura?">
                                        </div>
                                        <div class="mb-3 mt-2 col-2">
                                            <label for="exampleInputEmail1" class="form-label">Peso</label>
                                            <input type="number" class="form-control form-control-sm input-number"
                                                id="exampleInputEmail1" aria-describedby="emailHelp"
                                                placeholder="Qual peso?">
                                        </div>
                                        <div class="mb-3 mt-2 col-2">
                                            <label for="exampleInputEmail1" class="form-label">IMC</label>
                                            <input type="number" class="form-control form-control-sm input-number"
                                                id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="IMC">
                                        </div>
                                    </div>
                                </fieldset>
                                <!-- </div> -->

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
                                <fieldset class="border rounded-3 h6 p-2 ">
                                    <legend class="float-none w-auto px-3 h6 ">Alergia algum medicamento?</legend>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="alergia" id="alergia1">
                                        <label class="form-check-label" for="alergia1">Sim</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="alergia" id="alergia2">
                                        <label class="form-check-label" for="alergia2">Não</label>
                                        <div class="mb-3 mt-2 col-6">
                                            <label for="exampleInputEmail1" class="form-label">Qual?</label>
                                            <input type="text" class="form-control form-control-sm" id="exampleInputEmail1"
                                                aria-describedby="emailHelp" placeholder="Qual medicamento?">
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                        </fieldset>
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
                                <div class="form-floating">
                                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                                        style="height: 100px"></textarea>
                                    <label for="floatingTextarea2">Queixa principal</label>
                                </div>
                                <div class="mb-3 mt-2 col-2">
                                    <label for="exampleInputEmail1" class="form-label">CID </label>
                                    <input type="number" class="form-control form-control-sm input-number"
                                        id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Cid">
                                    <div class="mb-3 mt-2 col-2">
                                        <button type="button" class="btn btn-outline-success">Adicionar</button>
                                    </div>
                                </div>
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
                            <legend class="float-none w-auto px-3 h6 ">Anexar exames</legend>
                            <div class="row">

                            </div>
                        </fieldset>
                    </div>
                </div>
                <div class="tab-pane fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab"
                    tabindex="0">...
                </div>
            </div>
        </div>
</div>
</template>

<script setup>
import Sidebar from '../components/Sidebar.vue'


</script>

<style scoped>.input-number::-webkit-inner-spin-button {
    -webkit-appearance: none;
}</style>