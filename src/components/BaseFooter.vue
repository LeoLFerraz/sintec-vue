<template>
  <div class="container-fluid baseFooterContainer row">
    <div class="sponsorLogosContainer d-flex justify-content-center align-content-center align-items-center col-lg-6 col-md-12">
      <a href="http://www.unirio.br/" target="_blank">
        <img src="../public/img/UNIRIOLogo2.png" class="sponsorLogo">
      </a>
    </div>
    <div class="socialMediaContainer d-flex flex-column justify-content-center align-content-center align-items-center col-lg-6 col-md-12">
      <div class="d-flex justify-content-center align-content-center align-items-center">
        <a href="https://www.facebook.com/sintecunirio/" target="_blank" class="socialMediaLink">
          <div class="socialMediaText">Siga-nos no facebook:</div>
        </a>
        <a href="https://www.facebook.com/sintecunirio/" target="_blank">
          <font-awesome-icon class="socialMediaIcon" :icon="{ prefix: 'fab', iconName: 'facebook' }"></font-awesome-icon>
        </a>
      </div>
      <div>
        <div class="socialMediaText text-center">
          <a href="https://goo.gl/maps/kasRYdWr8Y3LTUMn7" target="_blank" class="socialMediaLink">
            <font-awesome-icon class="socialMediaIcon" :icon="{ prefix: 'fa', iconName: 'map-marker' }"></font-awesome-icon>
            CCET: Av. Pasteur, 458, Urca - Rio de Janeiro <br>
            <small>(clique para abrir o mapa)</small>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseFooter'
}
</script>

<style scoped>
  .baseFooterContainer {
    background-color: rgba(180,180,180,0.28);
    display: flex;
    justify-content: space-around;
  }

  .sponsorLogo {
    width: 100%;
    max-width: 200px;
    padding: 10px 0;
  }

  .socialMediaIcon {
    color: white;
    font-size: 1.5em;
    background-color: rgba(50,50,180,0.3);
    border-radius:50%;
  }

  .socialMediaLink {
    color: inherit;
  }

  .socialMediaLink:hover {
    text-decoration: none;
  }

  .socialMediaText {
    font-size: 1.3rem;
    color: white;
    padding: 1rem;
  }

  @media only screen and (max-width:768px) {
    .socialMediaText {
      font-size: 1rem;
    }

    .sponsorLogo {
      padding-top: 5px;
      padding-bottom: 0;
    }
  }

  .row {
    margin: 0;
  }
</style>
