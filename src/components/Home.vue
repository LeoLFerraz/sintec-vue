<template>
  <div class="container container-fluid layout-default rounded-bottom" id="HomeContainer">
    <div class="homeCardContainer">
      <div class="row">
        <div class="col">
          <p class="homeCardText text-center">Verifique nosso calendário!</p>
        </div>
        <div class="col-3">
          <font-awesome-icon icon="calendar-alt" class="homeCardIcon"/>
        </div>
      </div>
    </div>
    <div class="homeCardContainer">
      <div class="row">
        <div class="col">
          <p class="homeCardText text-center">Inscreva-se como palestrante!</p>
        </div>
        <div class="col-3">
          <font-awesome-icon icon="calendar-alt" class="homeCardIcon"/>
        </div>
      </div>
    </div>
    <div class="homeCardContainer">
      <div class="row">
        <div class="col">
          <p class="homeCardText text-center">Verifique nosso calendário!</p>
        </div>
        <div class="col-3">
          <font-awesome-icon icon="calendar-alt" class="homeCardIcon"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
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
  }

  .homeCardContainer:nth-child(even) {
    background-color: #0D0628;
  }
  .homeCardContainer:nth-child(odd) {
    background-color: #6A95BD;
  }

  .homeCardIcon {
    color: whitesmoke;
    width: 100%;
    height: auto;
  }

  .homeCardText {
    color: whitesmoke;
  }

  .row {
    padding: 20px;
  }
</style>
