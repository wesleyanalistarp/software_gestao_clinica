<template>
    <div class="card-body mt-2">
        <div class="card mt-2 p-3">
            <div class="text-center h4 mt-2 mb-3">
                Formulário Puxar Exames do Paciente
            </div>
            <fieldset class="border rounded-3 h6 p-3">
                <legend class="float-none w-auto px-3 h6">
                    Exames do paciente
                </legend>
                <nav class="navbar bg-body-tertiary">
                    <div class="container-fluid">
                        <form class="d-flex w-100" role="search">
                            <input class="form-control me-2" type="search"
                                placeholder="Digite o nome do paciente ou o número do registro" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">
                                Buscar
                            </button>
                        </form>
                    </div>
                </nav>
            </fieldset>
        </div>
    </div>
</template>