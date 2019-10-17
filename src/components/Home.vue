<template>
  <div class="layout-default rounded-bottom" id="HomeContainer">
    <div class="homeCardContainer">
      <div class="row no-gutters">
        <HomeCard titulo="Calendário" icon="calendar-alt" link="/calendario" />
        <HomeCard titulo="Inscrever-se" icon="user-plus" link="/inscricao" />
        <HomeCard titulo="Sobre o Evento" icon="book-open" link="/sobre" />
      </div>
    </div>
    <Carousel></Carousel>
  </div>
</template>

<script>
import HomeCard from './HomeCard'
import Carousel from './Carousel'

export default {
  name: 'Home',
  components: {
    HomeCard,
    Carousel
  },
  data () {
    return {
      msg: 'Testing home'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #HomeContainer {
    position: relative;
    z-index: 6;
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  @media only screen and (min-width: 769px) {
    .homeCardContainer {
      margin-bottom: 20px;
    }
  }
</style>
