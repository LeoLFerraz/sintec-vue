<template>
  <div class="col-lg-4 col-md-12 homeColumn">
    <div class="container-fluid d-flex flex-column align-items-center align-content-center justify-content-center">
      <div class="container-fluid linkIconContainer">
        Dia: {{dia}}
        <br>
        Nome: {{evento.nome}}
        <br>
        Local: {{evento.local}}
        <br>
        Inicio: {{evento.inicio}}
        <br>
        Fim: {{evento.fim}}
        <br>
        Palestrante: {{evento.palestrante}}
        <br>
        Status: {{evento.status}}
        <br>
        Resumo: {{evento.resumo}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalendarCard',
  props: ['evento', 'dia']
}
</script>

<style scoped>
  .homeColumn:nth-child(even) {
    background-color: rgba(100,100,200,0.5);
    border-bottom: solid 8px rgb(100,100,200);
  }
  .homeColumn:nth-child(odd) {
    background-color: rgba(150,120,130,0.5);
    border-bottom: solid 8px rgb(150,120,130);
  }
  .homeCardIcon {
    color: rgba(255,255,255,0.2);
    width: 100%;
    max-width: 150px;
    height: auto;
  }
  .linkIconContainer{
    text-align: center;
  }
  .texto{
    color: #FFFFFF;
    font-weight: bold;
    white-space: nowrap;
    text-shadow: 8px 8px 35px #000000;
    font-size: 2.5rem;
  }

  .homeColumn:nth-child(even):hover {
    background-color: rgba(100,100,200,0.8);
  }
  .homeColumn:nth-child(odd):hover {
    background-color: rgba(150,120,130,0.8);
  }

  @media only screen and (max-width:768px) {
    .texto {
      font-size: 2rem;
    }

    .homeCardIcon {
      max-width: 75px;
    }

    .homeColumn {
      padding: 5px;
    }
  }
</style>
