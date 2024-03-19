<template>
    <div>
        <div class="card-body mt-2">
            <div class="card p-3">
                <div class="text-center h4 mt-2 mb-3">
                    Emitir Ficha do Paciente
                </div>
                <!-- <fieldset class="border rounded-3 h6 p-3">
                <legend class="float-none w-auto px-3 h6">Informações</legend> -->
                <div class="row">
                    <!--inicio do formulário ficha-->
                    <!-- <div class="collapse" id="formulario_ficha">
                        <div class="container">
                            <div class="card mt-2 p-3"> -->
                    <!-- <div class="text-center h4 mt-2 mb-3">Emitir Ficha do Paciente</div> -->
                    <fieldset class="border rounded-3 h6 p-3">
                        <legend class="float-none w-auto px-3 h6">Informações</legend>
                        <div class="alert alert-warning alert-dismissible fade show" role="alert">
                            <strong>Atenção!</strong> Para fazer a ficha é necessário realizar
                            o cadastro do paciente.
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                        <div class="row">
                            <div class="mb-2 mt-2 col-3">
                                <label for="exampleInputEmail1" class="form-label">Paciente</label>
                                <input type="text" class="form-control form-control-sm" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" placeholder="Nome do paciente" />
                            </div>
                            <div class="card col-2" style="background: #f2f2f2; height: 80px">
                                <div class="form-check form-switch mt-4 text-center fw-bold">
                                    <label class="form-check-label" for="flexSwitchCheckChecked">Consulta
                                        Retorno
                                        <input class="form-check-input" type="checkbox" role="switch"
                                            id="flexSwitchCheckChecked">
                                    </label>
                                </div>
                            </div>
                            <div class="mb-3 mt-2 col-2">
                                <label for="exampleInputEmail1" class="form-label">Nascimento</label>
                                <input type="date" class="form-control form-control-sm" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3 mt-2 col-2">
                                <label for="exampleInputEmail1" class="form-label">Tipo</label>
                                <select class="form-select form-select-sm" aria-label="Small select example">
                                    <option selected>Selecione</option>
                                    <option value="1">Consulta</option>
                                    <option value="2">Exame</option>
                                </select>
                            </div>
                            <div class="mb-3 mt-2 col-3">
                                <label for="exampleInputEmail1" class="form-label">Exame</label>
                                <select class="form-select form-select-sm" aria-label="Small select example">
                                    <option selected>Selecione</option>
                                    <option value="1">Buscar do banco</option>
                                </select>
                            </div>
                            <div class="mb-3 mt-2 col-2">
                                <label for="exampleInputEmail1" class="form-label">Comorbidade</label>
                                <select class="form-select form-select-sm" aria-label="Small select example">
                                    <option selected>Selecione</option>
                                    <option value="comor1">Arritmias cardíacas</option>
                                    <option value="comor2">Cardiopatia hipertensiva</option>
                                    <option value="comor3">Cardiopatias congênitas no adulto
                                    </option>
                                    <option value="comor4">Cirrose hepática</option>
                                    <option value="comor5">Diabetes mellitus</option>
                                    <option value="comor6">Doença cerebrovascular</option>
                                    <option value="comor7">Doença renal crônica</option>
                                    <option value="comor8">Doenças da aorta, dos grandes vasos e
                                        fístulasarteriovenosas</option>
                                    <option value="comor9">Hemoglobinopatias graves</option>
                                    <option value="comor10">Hipertensão arterial</option>
                                    <option value="comor11">Hipertensão Arterial Resistente (HAR)
                                    </option>
                                    <option value="comor12">Hipertensão pulmonar / Cor-pulmonale
                                    </option>
                                    <option value="comor13">Imunossuprimidos</option>
                                    <option value="comor14">Insuficiência cardíaca</option>
                                    <option value="comor15">Miocardiopatias e pericardiopatias
                                    </option>
                                    <option value="comor16">Obesidade mórbida</option>
                                    <option value="comor17">Pneumopatias crônicas graves</option>
                                    <option value="comor18">Próteses valvares e dispositivos
                                        cardíacos
                                        implantados</option>
                                    <option value="comor19">Reumáticos como portadores de
                                        espondilite
                                        anquilosante</option>
                                    <option value="comor20">Síndrome de Down</option>
                                </select>
                            </div>
                            <div class="mb-3 mt-2 col-3">
                                <label for="exampleInputEmail1" class="form-label">Especialista</label>
                                <select class="form-select form-select-sm" aria-label="Small select example">
                                    <option selected>Selecione</option>
                                    <option value="1">Buscar do banco</option>
                                </select>
                            </div>
                            <div class="mb-3 mt-2 col-3">
                                <label for="exampleInputEmail1" class="form-label">Profissional</label>
                                <input type="text" class="form-control form-control-sm" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" placeholder="Digite o nome do médico" />
                            </div>
                            <div class="mb-3 mt-2 col-2">
                                <label for="exampleInputEmail1" class="form-label">Sala</label>
                                <select class="form-select form-select-sm" aria-label="Small select example">
                                    <option selected>Selecione</option>
                                    <option value="1">Buscar do banco</option>
                                </select>
                            </div>
                            <div class="mb-3 mt-2 col-2">
                                <label for="exampleInputEmail1" class="form-label">Consultório</label>
                                <select class="form-select form-select-sm" aria-label="Small select example">
                                    <option selected>Selecione</option>
                                    <option value="1">Buscar do banco</option>
                                </select>
                            </div>
                            <div class="mb-2 mt-2 col-3">
                                <label for="exampleInputEmail1" class="form-label">Alergia a
                                    medicamento?</label>
                                <input type="text" class="form-control form-control-sm" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" placeholder="Qual?" />
                            </div>
                            <div class="mb-2 mt-2 col-3">
                                <label for="exampleInputEmail1" class="form-label">Toma medicação
                                    contínua
                                    ?</label>
                                <input type="text" class="form-control form-control-sm" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" placeholder="Qual?" />
                            </div>
                            <div class="mb-2 mt-2 col-3">
                                <label for="exampleInputEmail1" class="form-label">Nome da mãe</label>
                                <input type="text" class="form-control form-control-sm" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" placeholder="Nome" />
                            </div>
                            <div class="mb-2 mt-2 col-3">
                                <label for="exampleInputEmail1" class="form-label">Acompanhante</label>
                                <input type="text" class="form-control form-control-sm" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" placeholder="Nome" />
                            </div>
                            <div class="mb-2 mt-2 col-3">
                                <label for="exampleInputEmail1" class="form-label">Gestante</label>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault"
                                        id="flexRadioDefault1">
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        Sim
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault"
                                        id="flexRadioDefault2" checked>
                                    <label class="form-check-label" for="flexRadioDefault2">
                                        Não
                                    </label>
                                </div>
                                <label for="exampleInputEmail1" class="form-label">Quantos mêses?</label>
                                <input type="text" class="form-control form-control-sm" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" placeholder="Nome" />
                            </div>
                            <div class="mb-3 mt-2 col-6">
                                <label for="floatingTextarea2">Observação:</label>
                                <textarea class="form-control" cols="80" rows="5"
                                    placeholder="Faça sua observação"
                                    id="floatingTextarea2"></textarea>
                            </div>
                        </div>
                    </fieldset>
                    <!--decalração do convênio do paciente-->
                    <fieldset class="border rounded-3 h6 p-3">
                        <legend class="float-none w-auto px-3 h6">
                            Forma de pagamento
                        </legend>
                        <div class="mb-3 mt-2 col-2">
                            <label for="exampleInputEmail1" class="form-label">Tipo do
                                atendimento</label>
                            <select class="form-select form-select-sm" id="select" name="select"
                                aria-label="Small select example">
                                <option selected>Selecione</option>
                                <option value="particular">Particular</option>
                                <option value="convenio">Convênio</option>
                            </select>
                        </div>
                        <div class="row" id="convenio">
                            <div class="mb-3 mt-2 col-2">
                                <label for="exampleInputEmail1" class="form-label">Tipo do
                                    Convênio</label>
                                <select class="form-select form-select-sm" aria-label="Small select example">
                                    <option selected>Selecione</option>
                                    <option value="1">Unimed</option>
                                    <option value="2">Sulamérica</option>
                                    <option value="3">Bradesco</option>
                                </select>
                            </div>
                            <div class="mb-3 mt-2 col-2">
                                <label for="exampleInputEmail1" class="form-label">Matrícula</label>
                                <input type="text" class="form-control form-control-sm" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" placeholder="Número da matrícula" />
                            </div>
                            <div class="mb-3 mt-2 col-2">
                                <label for="exampleInputEmail1" class="form-label">Procedimento</label>
                                <select class="form-select form-select-sm" aria-label="Small select example">
                                    <option selected>Selecione</option>
                                    <option value="1">Puxar do banco</option>
                                </select>
                            </div>
                            <div class="mb-3 mt-2 col-2">
                                <label for="exampleInputEmail1" class="form-label">Nº</label>
                                <input type="number" class="form-control form-control-sm" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" placeholder="Digite o número" />
                            </div>
                            <div class="mb-3 mt-2 col-2">
                                <label for="exampleInputEmail1" class="form-label">Registro</label>
                                <input type="text" class="form-control form-control-sm" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" placeholder="Digite o registro" />
                            </div>
                            <div class="mb-3 mt-2 col-2">
                                <label for="exampleInputEmail1" class="form-label">Valor</label>
                                <input type="text" class="form-control form-control-sm" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" placeholder="R$" />
                            </div>
                            <hr />
                        </div>

                        <div class="row" id="particular">
                            <div class="mb-3 mt-2 col-2">
                                <label for="exampleInputEmail1" class="form-label">Tipo</label>
                                <select class="form-select form-select-sm" aria-label="Small select example">
                                    <option selected>Selecione</option>
                                    <option value="1">Consulta</option>
                                    <option value="2">Exame</option>
                                    <option value="3">Procedimento</option>
                                </select>
                            </div>
                            <div class="mb-3 mt-2 col-2">
                                <label for="exampleInputEmail1" class="form-label">Procedimento</label>
                                <select class="form-select form-select-sm" aria-label="Small select example">
                                    <option selected>Selecione</option>
                                    <option value="1">Puxar do banco</option>
                                </select>
                            </div>
                            <div class="mb-2 mt-2 col-2">
                                <label for="exampleInputEmail1" class="form-label">Valor</label>
                                <input type="number" class="form-control form-control-sm" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" placeholder="R$ Digite o valor" />
                            </div>
                            <div class="mb-2 mt-2 col-2">
                                <label for="exampleInputEmail1" class="form-label">Desconto</label>
                                <input type="number" class="form-control form-control-sm" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" placeholder="% Desconto" />
                            </div>
                            <div class="mb-2 mt-2 col-2">
                                <label for="exampleInputEmail1" class="form-label">Total</label>
                                <input type="number" class="form-control form-control-sm" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" placeholder="R$ Valor total" />
                            </div>
                            <button onclick="gerarPdf()" type="button" class="btn btn-outline-success ">
                                Gerar ficha
                            </button>
                        </div>
                    </fieldset>
                    <!--fim do formulário ficha-->
                    <!-- </div>
                        </div>
                    </div> -->
                </div>
                <!-- </fieldset> -->
            </div>
        </div>
    </div>
</template>
<script>

</script>