<template>
  <div class="container container-fluid layout-default rounded-bottom" id="HomeContainer">
    <div class="homeCardContainer">
      <div class="row">
        <div class="col d-flex align-content-center align-items-center justify-content-center">
          <p class="homeCardText text-center">Verifique nosso calendário!</p>
        </div>
        <div class="w-100 d-block d-sm-none"></div>
        <div class="col-4 d-block d-sm-none"></div>
        <div class="col-md-2 col-4 d-flex align-items-center homeCardIconContainer">
          <router-link to="/calendar">
            <font-awesome-icon icon="calendar-alt" class="homeCardIcon"/>
          </router-link>
        </div>
        <div class="col-4 d-block d-sm-none"></div>
      </div>
    </div>
    <div class="homeCardContainer">
      <div class="row">
        <div class="col d-flex align-content-center align-items-center justify-content-center">
          <p class="homeCardText text-center">Inscreva-se como palestrante :D</p>
        </div>
        <div class="w-100 d-block d-sm-none"></div>
        <div class="col-4 d-block d-sm-none"></div>
        <div class="col-md-2 col-4 d-flex align-items-center homeCardIconContainer">
        <router-link to="/signup">
          <font-awesome-icon icon="user-plus" class="homeCardIcon"/>
        </router-link>
        </div>
        <div class="col-4 d-block d-sm-none"></div>
      </div>
    </div>
    <div class="homeCardContainer">
      <div class="row">
        <div class="col d-flex align-content-center align-items-center justify-content-center">
          <p class="homeCardText text-center">Sobre a SINTEC</p>
        </div>
        <div class="w-100 d-block d-sm-none"></div>
        <div class="col-4 d-block d-sm-none"></div>
        <div class="col-md-2 col-4 d-flex align-items-center homeCardIconContainer">
        <router-link to="/about">
          <font-awesome-icon icon="book-open" class="homeCardIcon"/>
        </router-link>
        </div>
        <div class="col-4 d-block d-sm-none"></div>
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
    display: flex;
    flex-direction: column;
  }

  .homeCardContainer {
    padding: 5px 40px;
    flex: 1;
  }

  .homeCardContainer:nth-child(even) {
    background-color: #325478;
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

  @media only screen and (max-width: 768px) {
    .row {
      padding: 10px 20px;
    }
    .homeCardIconContainer {
      padding: 0;
    }
  }
</style>
