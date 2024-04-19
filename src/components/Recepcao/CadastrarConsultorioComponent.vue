<template>
  <div>
    <div class="container-fluid">
      <div class="card p-3 mt-3">
        <div class="card">
          <div class="text-center h4 mt-2 mb-3">Formulário de Cadastro do Consultório</div>
          <fieldset class="border rounded-3 h6 p-3 m-3">
            <legend class="float-none w-auto px-3 h6">Cadastrar Consultório</legend>
            <!-- <div class="row"> -->
              <div class="input-group mb-3">
                  <input type="text" class="form-control" placeholder="Nome do consultório" aria-label="Recipient's username" aria-describedby="button-addon2">
                  <button class="btn btn-outline-success" type="button" id="button-addon2">Adicionar</button>
              </div>
            <!-- </div> -->
          </fieldset>
          <fieldset class="border rounded-3 h6 p-3 m-3">
            <legend class="float-none w-auto px-3 h6">Cadastrar Sala</legend>
            <!-- <div class="row"> -->
              <div class="input-group mb-3">
                  <input type="text" class="form-control" placeholder="Nome da sala" aria-label="Recipient's username" aria-describedby="button-addon2">
                  <button class="btn btn-outline-success" type="button" id="button-addon2">Adicionar</button>
              </div>
            <!-- </div> -->
          </fieldset>
          <div class="button">
            <button type="submit" class="btn btn-outline-success" style="height: 40px; width: 120px; margin: 10px;">
              Salvar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
