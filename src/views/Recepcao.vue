<template>
    <Sidebar />
    <div class="container-fluid">
        <div class="card text-center">
            <div class="col mt-1 mb-1">
                <div class="container-fluid mb-1">
                    <button type="button" class="btn btn-outline-success mt-5 border 1px solid" data-bs-toggle="collapse"
                        data-bs-target="#formulario_cadastro" role="button" area-expanded="false"
                        aria-controls="collapseExample" style="height: 70px; width: 120px; margin: 5px; "><i
                            class="bi bi-person-add"></i>
                        Cadastrar</button>
                    <button type="button" class="btn btn-outline-success mt-5 border 1px solid" data-bs-toggle="collapse"
                        data-bs-target="#formulario_editar" role="button" area-expanded="false"
                        aria-controls="formulario_busca" style="height: 70px; width: 110px; margin: 5px; "><i
                            class="bi bi-pencil-square"></i>
                        Editar</button>
                    <button type="button" class="btn btn-outline-success mt-5 border 1px solid" data-bs-toggle="collapse"
                        data-bs-target="#formulario_ficha" role="button" area-expanded="false"
                        aria-controls="collapseExample" style="height: 70px; width: 110px; margin: 5px; "><i
                            class="bi bi-person-lines-fill"></i>
                        Ficha</button>
                    <button type="button" class="btn btn-outline-success mt-5 border 1px solid"
                        style="height: 70px; width: 110px; margin: 5px; "><i class="bi bi-file-earmark-medical"></i>
                        Laudo</button>
                    <button type="button" class="btn btn-outline-success mt-5 border 1px solid"
                        style="height: 70px; width: 110px; margin: 5px; "><i class="bi bi-clipboard2-pulse"></i>
                        Exames</button>
                    <button type="button" class="btn btn-outline-success mt-5 border 1px solid"
                        style="height: 70px; width: 110px; margin: 5px; "><i class="bi bi-file-text"></i>
                        Receita</button>
                    <button type="button" class="btn btn-outline-success mt-5 border 1px solid"
                        style="height: 70px; width: 160px; margin: 5px; "><i class="bi bi-heart-pulse"></i>
                        Procedimento</button>
                </div>
            </div>
        </div>
        <!--inicio do formulário do paciente-->
        <div class="collapse" id="formulario_cadastro">
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
                                    aria-describedby="emailHelp">
                            </div>
                            <div class="mb-3 mt-2 col-2">
                                <label for="exampleInputEmail1" class="form-label">CPF</label>
                                <input type="number" class="form-control form-control-sm" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" placeholder="Digite o CPF">
                            </div>
                            <div class="mb-3 mt-2 col-2">
                                <label for="exampleInputEmail1" class="form-label">RG</label>
                                <input type="number" class="form-control form-control-sm" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" placeholder="Digite o número">
                            </div>
                            <div class="mb-3 mt-2 col-2">
                                <label for="exampleInputEmail1" class="form-label">Telefone</label>
                                <input type="number" class="form-control form-control-sm" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" placeholder="Digite o número">
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
                            <div class="mb-3 mt-2 col-2">
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
                            <div class="mb-3 mt-2 col-2">
                                <label for="exampleInputEmail1" class="form-label">Nº</label>
                                <input type="number" class="form-control form-control-sm" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" placeholder="Digite o número">
                            </div>
                            <div class="mb-3 mt-2 col-2">
                                <label for="exampleInputEmail1" class="form-label">Procedimento</label>
                                <select class="form-select form-select-sm" aria-label="Small select example">
                                    <option selected>Selecione</option>
                                    <option value="1">Puxar do banco</option>
                                </select>
                            </div>
                            <div class="mb-3 mt-2 col-3">
                                <label for="exampleInputEmail1" class="form-label">Registro</label>
                                <input type="text" class="form-control form-control-sm" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" placeholder="Digite o registro">
                            </div><br>
                            
                        </div>
                    </fieldset>
                    <br>
                    <div class="button">
                        <button type="submit" class="btn btn-outline-success">Cadastrar</button>
                    </div>
                </div>
            </div>
        </div>

        <!--fim do formulário do paciente-->
        <!--inicio do formulário editar-->
        <div class="collapse" id="formulario_editar">
            <div class="container-fluid ">
                <div class="card mt-2 p-3">
                    <div class="text-center h4 mt-2 mb-3">Editar informação do paciente</div>
                    <fieldset class="border rounded-3 h6 p-3 ">
                        <legend class="float-none w-auto px-3 h6 ">Editar</legend>
                        <nav class="navbar bg-body-tertiary">
                            <div class="container-fluid">
                                <form class="d-flex w-100" role="search">
                                    <input class="form-control me-2" type="search" placeholder="Digite o nome do paciente"
                                        aria-label="Search">
                                    <button class="btn btn-outline-success" type="submit">Buscar</button>
                                </form>
                            </div>
                        </nav>
                    </fieldset>
                </div>
            </div>
        </div>
        <!--fim do formulário editar-->
        <!--inicio do formulário ficha-->
        <div class="collapse" id="formulario_ficha">
            <div class="container ">
                <div class="card mt-2 p-3">
                    <div class="text-center h4 mt-2 mb-3">Emitir ficha do paciente</div>
                    <fieldset class="border rounded-3 h6 p-3 ">
                        <legend class="float-none w-auto px-3 h6 ">Informações</legend>
                        <div class="alert alert-warning alert-dismissible fade show" role="alert">
                            <strong>Atenção!</strong> Para fazer a ficha é necessário realizar o cadastro do paciente.
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                        <div class="row">
                            <div class="mb-2 mt-2 col-3">
                                <label for="exampleInputEmail1" class="form-label">Paciente</label>
                                <input type="text" class="form-control form-control-sm" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" placeholder="Nome do paciente">
                            </div>
                            <div class="mb-3 mt-2 col-2">
                                <label for="exampleInputEmail1" class="form-label">Nascimento</label>
                                <input type="date" class="form-control form-control-sm" id="exampleInputEmail1"
                                    aria-describedby="emailHelp">
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
                                    <option value="comor3">Cardiopatias congênitas no adulto</option>
                                    <option value="comor4">Cirrose hepática</option>
                                    <option value="comor5">Diabetes mellitus</option>
                                    <option value="comor6">Doença cerebrovascular</option>
                                    <option value="comor7">Doença renal crônica</option>
                                    <option value="comor8">Doenças da aorta, dos grandes vasos e fístulas arteriovenosas
                                    </option>
                                    <option value="comor9">Hemoglobinopatias graves</option>
                                    <option value="comor10">Hipertensão arterial</option>
                                    <option value="comor11">Hipertensão Arterial Resistente (HAR)</option>
                                    <option value="comor12">Hipertensão pulmonar / Cor-pulmonale</option>
                                    <option value="comor13">Imunossuprimidos</option>
                                    <option value="comor14">Insuficiência cardíaca</option>
                                    <option value="comor15">Miocardiopatias e pericardiopatias</option>
                                    <option value="comor16">Obesidade mórbida</option>
                                    <option value="comor17">Pneumopatias crônicas graves</option>
                                    <option value="comor18">Próteses valvares e dispositivos cardíacos implantados</option>
                                    <option value="comor19">Reumáticos como portadores de espondilite anquilosante</option>
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
                                    aria-describedby="emailHelp" placeholder="Digite o nome do médico">
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
                        </div>
                    </fieldset>
                    <!--decalração do convênio do paciente-->
                    <fieldset class="border rounded-3 h6 p-3 ">
                        <legend class="float-none w-auto px-3 h6 ">Forma de pagamento</legend>
                        <div class="mb-3 mt-2 col-2">
                                <label for="exampleInputEmail1" class="form-label">Tipo do atendimento</label>
                                <select class="form-select form-select-sm" id="select" name="select" aria-label="Small select example">
                                    <option selected>Selecione</option>
                                    <option value="particular">Particular</option>
                                    <option value="convenio">Convênio</option>
                                </select>
                            </div>
                        <div class="row" id="convenio">
                            <div class="mb-3 mt-2 col-2">
                                <label for="exampleInputEmail1" class="form-label">Tipo do Convênio</label>
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
                                    aria-describedby="emailHelp" placeholder="Número da matrícula">
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
                                    aria-describedby="emailHelp" placeholder="Digite o número">
                            </div>
                            <div class="mb-3 mt-2 col-2">
                                <label for="exampleInputEmail1" class="form-label">Registro</label>
                                <input type="text" class="form-control form-control-sm" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" placeholder="Digite o registro">
                            </div>
                            <div class="mb-3 mt-2 col-2">
                                <label for="exampleInputEmail1" class="form-label">Valor</label>
                                <input type="text" class="form-control form-control-sm" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" placeholder="R$">
                            </div>
                            <hr>
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
                                    aria-describedby="emailHelp" placeholder="R$ Digite o valor">
                            </div>
                            <div class="mb-2 mt-2 col-2">
                                <label for="exampleInputEmail1" class="form-label">Desconto</label>
                                <input type="number" class="form-control form-control-sm" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" placeholder="% Desconto">
                            </div>
                            <div class="mb-2 mt-2 col-2">
                                <label for="exampleInputEmail1" class="form-label">Total</label>
                                <input type="number" class="form-control form-control-sm" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" placeholder="R$ Valor total">
                            </div>
                            <button type="button" class="btn btn-outline-success">Gerar ficha</button>
                        </div>

                    </fieldset>
                </div>
            </div>
        </div>
        <!--fim do formulário ficha-->
    </div>
</template>
<script setup>
import Sidebar from '../components/Sidebar.vue'


const alertList = document.querySelectorAll('.alert')
const alerts = [...alertList].map(element => new bootstrap.Alert(element))
</script>