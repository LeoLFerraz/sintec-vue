<template>
  <div class="container container-fluid layout-default rounded-bottom" id="BaseHeaderContainer">
    <div class="jumbotron jumbotron-fluid p-0">

      <!-- Card image -->
      <div class="view overlay text-center">
          <img src="../public/img/SINTECLogo.png" class="img-fluid" alt="Logo S.I.N.T.E.C." id="SINTECLogo">
      </div>

      <!-- Card content -->
      <div class="card-body text-center">
        <!-- Title -->
        <h3 class="noSB myFontOrange font-weight-bolder"><strong>Semana Integrada de Tecnologia e Ciência</strong></h3>
        <hr>
        <h4 class="noSB myFontOrange font-weight-bold">21 a 25 de Outubro - Website em construção!</h4>
      </div>

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
    position: relative;
    top: 0;
    left: 0;
    z-index: 5;
    margin: 10px auto 20px auto;
  }
  .noSB {
    text-shadow: 2px 2px 3px #DDD;
  }
  .myFontOrange {
    color: hsl(11, 64%, 68%);
  }
  .jumbotron {
    margin: 0 auto;
    border: 7px solid darkgoldenrod;
    border-radius:30%;
    overflow: hidden;
    box-shadow: 0px 0px 10px darkgoldenrod, 0px 0px 40px white;
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
      font-size: 1.3rem;
    }
    h4 {
      font-size: 1rem;
    }
    hr {
      display: none;
    }
  }
</style>
