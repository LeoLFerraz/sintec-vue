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
  },
  mounted () {
    let evento = {
      nome: 'Abertura',
      inicio: '5:00 PM',
      fim: '5:15 PM',
      local: 'Auditório Tércio Pacitti',
      palestrante: 'Nenhum',
      status: 'Especial',
      resumo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel pharetra diam. Ut at diam ultrices, facilisis ligula quis, interdum purus. Donec imperdiet augue sit amet lectus auctor varius. Vivamus a lacus vulputate, egestas leo in, luctus libero. Praesent nec porttitor ex. Vivamus tortor neque, feugiat non luctus sed, semper nec orci. Nullam luctus ex malesuada erat laoreet, tempor molestie augue rhoncus. Fusce at purus dolor. Fusce nec purus sit amet orci ultrices posuere. Integer molestie, nulla id scelerisque mattis, quam sem mattis magna, a malesuada eros purus sed felis. Duis mollis, diam nec ultrices vulputate, diam neque cursus nibh, eu tempus libero tortor a sapien.'
    }
    this.$firebase.database().ref('calendario').child('dia_21').child('evento3').set(evento)
  }
}

</script>

<style>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.access-button {
  visibility: hidden;
  display: none;
}

body, html {
  overflow-x: hidden;
}
body {
  margin: auto;
  background: url("./public/img/SINTECBackgroundImage.jpg") no-repeat;
  background-size: cover;
  min-height: 100vh;
}

@media only screen and (max-width: 768px) {
  body {
    background: #111111;
  }
}

.container-fluid {
  padding: 0;
}
</style>
