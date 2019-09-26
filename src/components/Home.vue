<template>
  <div class="container-fluid layout-default rounded-bottom" id="HomeContainer">

    <div class="homeCardContainer container-fluid">
      <div class="row">
        <div class="col-lg-4 col-md-12 homeColumn">
          <div class="container-fluid d-flex flex-column align-items-center align-content-center justify-content-center">
            <div>
              Calendário
            </div>
            <div class="linkIconContainer">
            <router-link to="/about">
              <font-awesome-icon icon="calendar-alt" class="homeCardIcon"/>
            </router-link>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-12 homeColumn">
          <div class="container-fluid d-flex flex-column align-items-center align-content-center justify-content-center">
            <div>
              Inscrever-se
            </div>
            <router-link to="/about">
              <font-awesome-icon icon="user-plus" class="homeCardIcon"/>
            </router-link>
          </div>
        </div>
        <div class="col-lg-4 col-md-12 homeColumn">
          <div class="container-fluid d-flex flex-column align-items-center align-content-center justify-content-center">
            <div>
              Sobre o Evento
            </div>
            <router-link to="/about">
              <font-awesome-icon icon="book-open" class="homeCardIcon"/>
            </router-link>
          </div>
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

  .homeColumn:nth-child(even) {
    background-color: rgba(100,100,200,0.5);
  }
  .homeColumn:nth-child(odd) {
    background-color: rgba(150,120,130,0.5);
  }

  .homeCardIcon {
    color: whitesmoke;
    width: 100%;
    max-width: 150px;
    height: auto;
  }

  .homeCardText {
    color: whitesmoke;
  }

  .homeCardIconButton {
    width: 50%;
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
    .homeCardIconContainer {
      padding: 0;
    }
  }
</style>
