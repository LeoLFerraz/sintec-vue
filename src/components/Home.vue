<template>
  <div class="container-fluid layout-default rounded-bottom" id="HomeContainer">
    <div class="homeCardContainer container-fluid">
      <div class="row">
        <HomeCard titulo="Calendário" icon="calendar-alt" link="/about" />
        <HomeCard titulo="Inscrever-se" icon="user-plus" link="/about" />
        <HomeCard titulo="Sobre o Evento" icon="book-open" link="/about" />
      </div>
    </div>
  </div>
</template>

<script>
import HomeCard from './HomeCard'
export default {
  name: 'Home',
  components: {
    HomeCard
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

  .homeColumn {
    overflow: hidden;
    padding: 30px 15px;
  }

  .row {
    padding: 0;
  }

  .homeCardContainer {
    padding: 0;
    flex: 1;
  }

  @media only screen and (min-width: 769px) {
    .homeCardContainer {
      margin-bottom: 20px;
    }
  }

  @media only screen and (max-width: 768px) {
    .row {
      padding: 10px 20px;
    }
  }
</style>
