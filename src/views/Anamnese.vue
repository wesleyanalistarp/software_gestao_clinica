<template>
    <Sidebar />
    <div>
        <div class="container-fluid">
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
                                <a href="#"><abbr title="Alergias clique no icone"><i class="fa-solid fa-triangle-exclamation icone1" data-bs-toggle="modal"
                                        data-bs-target="#alergias"></i></abbr></a>
                                <a href="#"><abbr title="Histórico do paciente clique no icone "><i class="fa-solid fa-binoculars icone2" data-bs-toggle="modal"
                                        data-bs-target="#historico"></i></abbr></a>
                                <a href="#"><abbr title="Exames do paciente clique no icone "><i class="fa-solid fa-hospital-user icone3" aria-hidden="true"></i></abbr></a>
                                <a href="#"><abbr title="Uso de clique no icone "><i class="fa-solid fa-capsules icone3"></i></abbr></a>
                                <div class="position-absolute top-0 end-0">
                                    <button type="button" class="btn btn-outline-success m-2">
                                        <i class="fa-solid fa-play"></i> Iniciar Atendimento
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </table>
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
                                                data-bs-target="#collapseOne" aria-expanded="true"
                                                aria-controls="collapseOne">
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
                                            <button class="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                aria-expanded="false" aria-controls="collapseTwo">
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
                                            <button class="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                aria-expanded="false" aria-controls="collapseThree">
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
                                    <textarea class="form-control" cols="133" placeholder="Leave a comment here" id="floatingTextarea2"
                                        ></textarea>
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
                            <legend class="float-none w-auto px-3 h6">Anexar exames</legend>
                            <div class="row">
                                <div class="wrapper">
                                    <div class="box">
                                        <div class="input-box">
                                            <h2 class="upload-area">Carregar Arquivos</h2>
                                            <form action="">
                                                <input type="file" id="upload" accept=".doc, .docs, .pdf, .jpeg, .png" hidden>
                                                <label for="upload" class="uploadlabel">
                                                    <span><i class="fa-solid fa-cloud-arrow-up"></i></span>
                                                    <p>Clique para adicionar</p>
                                                </label>
                                            </form>
                                        </div>
                                        <div id="filewrapper">
                                            <h3 class="uploader">Documento carregado</h3>
                                            <div class="showfilebox">
                                                <div class="left">
                                                    <!-- <span class="filetype">pdf</span>
                                                    <h3>Ravi web.pdf</h3> -->
                                                </div>
                                                <div class="right">
                                                    <!-- <span>&#215;</span> -->
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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


window.addEventListener("load", ()=>{
    const input = document.getElementById("upload");
    const filewrapper = document.getElementById("filewrapper");

    input.addEventListener("change",(e)=>{
    let fileName = e.target.files[0].name;
    let filetype = e.target.value.split(".").pop();
       fileshow(fileName, filetype);
    })

    const fileshow=(fileName, filetype)=>{
        const showfileboxElem = document.createElement("div");
        showfileboxElem.classList.add("showfilebox");
        const leftElem = document.createElement("div");
        leftElem.classList.add("left");
        const fileTypeElem = document.createElement("span");
        fileTypeElem.classList.add("filetype");
        fileTypeElem.innerHTML=filetype;
        leftElem.append(fileTypeElem);
        const filetitleElem = document.createElement("h3");
        filetitleElem.innerHTML=fileName;
        leftElem.append(filetitleElem);
        showfileboxElem.append(leftElem);
        const rightElem = document.createElement("div");
        rightElem.classList.add("right");
        showfileboxElem.append(rightElem);
        const crossElem = document.createElement("span");
        crossElem.innerHTML="&#215;";
        rightElem.append(crossElem);
        filewrapper.append(showfileboxElem);

        crossElem.addEventListener("click",()=>{
            filewrapper.removechild(showfileboxElem);
        })
    }

})

</script>

<style scoped>
.input-number::-webkit-inner-spin-button {
    -webkit-appearance: none;
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

.wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    width: 100%;
    min-height: 100vh;
}

.upload-area{
    text-align: center;
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: 600;
}

.uploadlabel{
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

.uploadlabel span{
    font-size:70px;
    color: #18a7ff82;
}


.uploadlabel p{
    color: #18a7ff82;
    font-size: 20px;
    font-weight: 800;
    font-family: cursive;
}

.uploader{
    margin: 30px 0;
    font-size: 16px;
    font-weight: 700;
    color:#a5a5a5;
}

.showfilebox{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;
    padding: 10px 15px;
    box-shadow: #0000000d 0px 0px 0px 1px, #d1d5db3b, 0px 0px 0px 1px inset;

}

.showfilebox .left{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
}

.filetype{
    background: #18a7ff;
    color: #fff;
    padding: 5px 15px;
    font-size: 20px;
    text-transform: capitalize;
    font-weight: 700;
    border-radius: 3px;
    -webkit-border-radius:3px;
    -moz-border-radius:3px;
    -ms-border-radius:3px;
    -o-border-radius:3px;
}

.left h3{
    font-weight: 600;
    font-size: 18px;
    color: #292f42;
    margin: 0;
}


.right span{
    background: #18a7ff;
    color:#fff;
    width: 25px;
    height: 25px;
    font-size: 25px;
    line-height: 25px;
    display: inline-block;
    text-align: center;
    font-weight:700;
    cursor: pointer;
    border-radius:50%;
}

</style>