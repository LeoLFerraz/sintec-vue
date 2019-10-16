<template>
  <div id="app" class="d-flex flex-column justify-content-between">
    <BaseHeader id="header"/>
    <router-view/>
    <BaseFooter id="footer"/>
  </div>
</template>

<script>
import BaseHeader from './components/BaseHeader'
import BaseFooter from './components/BaseFooter'
import Calendario from './components/Calendario'
import Inscricao from './components/Inscricao'
import Sobre from './components/Sobre'
export default {
  name: 'App',
  components: {
    BaseHeader,
    BaseFooter,
    Calendario,
    Inscricao,
    Sobre
  }
}

</script>

<style>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

#barra-ccet {
  display:none !important;
}

.access-button {
  visibility: hidden;
  display: none;
}

body, html {
  overflow-x: visible;
}

body {
  margin: auto;
  background: url("./public/img/SINTECBackgroundImage.jpg") no-repeat;
  background-size: cover;
  min-height: 100vh;
}

@media only screen and (max-width: 768px) {
  body {
    background: url("./public/img/SINTECBackgroundImage.jpg") no-repeat;
    background-size: cover;
  }
}
</style>
