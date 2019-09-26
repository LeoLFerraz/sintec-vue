<template>
  <div class="container-fluid layout-default rounded-bottom" id="BaseHeaderContainer">
      <!-- Card image -->
      <div class="text-center">
          <img src="../public/img/SINTECLogoInverted.png" class="img-fluid" alt="Logo S.I.N.T.E.C." id="SINTECLogo">
      </div>

      <!-- Card content -->
      <div class="subtitle text-center">
        <!-- Title -->
        <h3 class="noSB myFontOrange font-weight-bolder"><strong>Semana Integrada de Tecnologia e Ciência</strong></h3>
        <hr>
        <h4 class="noSB myFontOrange font-weight-bold">21 a 25 de Outubro - Website em construção!</h4>
      </div>
  </div>
</template>

<script>
export default {
  name: 'BaseHeader'
}

</script>

<style scoped>
  #BaseHeaderContainer {
    width: 100%;
  }

  .subtitle {
    background-color: rgba(100,100,100,0.2);
    margin: 10px auto;
    padding: 10px 0;
  }

  .myFontOrange {
    color: hsl(11, 64%, 68%);
  }

  @media only screen and (max-width: 768px) {
    #BaseHeaderContainer {
      margin: 0 auto;
    }
    .jumbotron {
      border: none;
      border-radius: 0;
      box-shadow: none;
    }
    .card-body {
      padding: 5px;
    }
    h3, h4 {
      font-weight: normal !important;
      text-shadow: none !important;
    }
    h3 {
      font-size: 1.1rem;
    }
    h4 {
      font-size: 1rem;
    }
    hr {
      display: none;
    }
  }
</style>
