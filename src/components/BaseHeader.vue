<template>
  <div class="container-fluid layout-default rounded-bottom" id="BaseHeaderContainer">
    <router-link to="/" href="/index.html" style="cursor: pointer">
      <!-- Card image -->
      <div id="logoContainer">
          <img src="../public/img/SINTECPlus.svg" alt="Logo SINTEC+" id="SINTECLogo">
      </div>
    </router-link>

      <!-- Card content -->
      <div class="subtitle text-center">
        <!-- Title -->
        <h3 class="noSB myFontOrange font-weight-bolder"><strong>Semana Integrada de Tecnologia, Ciência e Cultura</strong></h3>
        <h4 class="noSB myFontOrange font-weight-bold">21 a 25 de Outubro</h4>
      </div>
    <div v-if="this.$route.name != 'Home'" class="w-100 text-center">
      <router-link to="/" href="/index.html" class="returnLink">Retornar</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseHeader'
}

</script>

<style scoped>
  #header {
    width: 100%;
    background-color: rgba(100,100,100,0.2) !important;
  }

  #logoContainer {
    overflow: hidden;
    text-align: center;
    height: 110px;
    margin: 20px 0 10px 0;
  }

  #SINTECLogo {
    height: 100%;
    width: auto;
    margin: 0 -100%;
  }

  .subtitle {
    margin: 0 auto;
    padding: 3px 0;
  }

  .myFontOrange {
    color: hsl(183, 100%, 96%);
  }

  @media only screen and (max-width: 1028px) {
    #logoContainer {
      height: 100px;
    }
  }

  @media only screen and (max-width: 768px) {
    #BaseHeaderContainer {
      margin: 0 auto;
    }

    #logoContainer {
      height: 40px;
      margin: 10px 0 0 0;
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

    .subtitle {
      margin-bottom: 2px;
    }
  }
</style>
