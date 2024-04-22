<template>
    <div class="card-body mt-2">
        <div class="card mt-2 p-3">
            <div class="text-center h4 mt-2 mb-3">
                Formulário de Cadastro da Clínica
            </div>
            <fieldset class="border rounded-3 h6 p-3">
                <legend class="float-none w-auto px-3 h6">
                    Formulário
                </legend>
                <div class="row">
                    <div class="mb-2 mt-2 col-md-4 col-12">
                        <label for="nome" class="form-label">Nome</label>
                        <input type="text" class="form-control form-control-sm" id="nome" placeholder="Digite o nome da clínica" required />
                    </div>
                    <div class="mb-2 mt-2 col-md-4 col-2">
                        <label for="nome" class="form-label">CNES</label>
                        <input type="number" class="form-control form-control-sm " id="cnes" placeholder="Cadastro nacional de estabelecimentos de saúde" required />
                    </div>
                    <div class="mb-2 mt-2 col-md-4 col-2">
                        <label for="nome" class="form-label">CNPJ</label>
                        <input type="number" class="form-control form-control-sm " id="cnpj" placeholder="Digite o CNPJ" required />
                    </div>
                    <div class="mb-2 mt-2 col-md-4 col-12">
                        <label for="nome" class="form-label">Nome Empresarial</label>
                        <input type="text" class="form-control form-control-sm " id="cnpj" placeholder="Digite o nome empresarial" required />
                    </div>
                    <div class="mb-2 mt-2 col-md-4 col-12">
                        <label for="nome" class="form-label">Natureza Jurídica (Grupo)</label>
                        <input type="text" class="form-control form-control-sm " id="natureza" placeholder="Digite a natureza" />
                    </div>
                    <div class="mb-2 mt-2 col-md-4 col-12">
                        <label for="nome" class="form-label">Logradouro</label>
                        <input type="text" class="form-control form-control-sm " id="logradouro" placeholder="Avenida, rua/" />
                    </div>
                    <div class="mb-2 mt-2 col-md-4 col-2">
                        <label for="nome" class="form-label">Número</label>
                        <input type="text" class="form-control form-control-sm " id="logradouro" placeholder="Digite o número" />
                    </div>
                    <div class="mb-2 mt-2 col-md-4 col-3">
                        <label for="nome" class="form-label">Complemento</label>
                        <input type="text" class="form-control form-control-sm " id="complemento" placeholder="Digite o complemento" />
                    </div>
                    <div class="mb-2 mt-2 col-md-4 col-4">
                        <label for="nome" class="form-label">Bairro</label>
                        <input type="text" class="form-control form-control-sm " id="bairro" placeholder="Digite o bairro" />
                    </div>
                    <div class="mb-2 mt-2 col-md-4 col-4">
                        <label for="nome" class="form-label">Município</label>
                        <input type="text" class="form-control form-control-sm " id="municipio" placeholder="Digite o município" />
                    </div>
                    <div class="mb-2 mt-2 col-md-4 col-2">
                        <label for="nome" class="form-label">UF</label>
                        <input type="text" class="form-control form-control-sm " id="uf" placeholder="Digite a UF" />
                    </div>
                    <div class="mb-2 mt-2 col-md-4 col-3">
                        <label for="nome" class="form-label">CEP</label>
                        <input type="text" class="form-control form-control-sm " id="cep" placeholder="Digite o cep" />
                    </div>
                    <div class="mb-2 mt-2 col-md-4 col-3">
                        <label for="nome" class="form-label">Telefone</label>
                        <input type="number" class="form-control form-control-sm " id="telefone" placeholder="Digite o telefone" />
                    </div>
                    <div class="mb-2 mt-2 col-md-4 col-3">
                        <label for="nome" class="form-label">Dependência</label>
                        <input type="text" class="form-control form-control-sm " id="dependencia" placeholder="Individual/" />
                    </div>
                    <div class="mb-2 mt-2 col-md-4 col-2">
                        <label for="nome" class="form-label">Regional de saúde</label>
                        <input type="number" class="form-control form-control-sm " id="regional" placeholder="Digite o número da regional " />
                    </div>
                    <div class="mb-2 mt-2 col-md-4 col-3">
                        <label for="nome" class="form-label">Tipo de estabelecimento</label>
                        <input type="text" class="form-control form-control-sm " id="estabelecimento" placeholder="Policlínica/ " />
                    </div>
                    <div class="mb-2 mt-2 col-md-4 col-2">
                        <label for="nome" class="form-label">Subtipo de estabelecimento</label>
                        <input type="text" class="form-control form-control-sm " id="subtipo" placeholder="Digite o subtipo " />
                    </div>
                    <div class="mb-2 mt-2 col-md-4 col-3">
                        <label for="nome" class="form-label">Gestão</label>
                        <input type="text" class="form-control form-control-sm " id="gestao" placeholder="Municipal/ " />
                    </div>
                    
                    <button type="button" class="btn btn-outline-success mt-3 ">
                                Salvar
                    </button>
                  
                 </div>
            </fieldset>
        </div>
    </div>
</template>