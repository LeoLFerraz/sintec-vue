<template>
  <div class="container-fluid baseFooterContainer row">
    <div class="sponsorLogosContainer d-flex justify-content-center align-content-center align-items-center col-lg-6 col-md-12">
      <img src="../public/img/UNIRIOLogo.png" class="sponsorLogo">
    </div>
    <div class="socialMediaContainer d-flex flex-column justify-content-center align-content-center align-items-center col-lg-6 col-md-12">
      <div class="d-flex justify-content-center align-content-center align-items-center">
        <div class="socialMediaText">Siga-nos no facebook:</div>
        <font-awesome-icon class="socialMediaIcon" :icon="{ prefix: 'fab', iconName: 'facebook' }"></font-awesome-icon>
      </div>
      <div>
        <div class="socialMediaText">CCET: Av. Pasteur, 458, Urca - Rio de Janeiro</div>
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
    background-color: rgba(100,100,100,0.2);
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

  .socialMediaText {
    font-size: 1.3rem;
    color: white;
    padding: 1rem;
  }

  @media only screen and (max-width:768px) {
    .socialMediaText {
      font-size: 1rem;
    }
  }

  .row {
    margin: 0;
  }
</style>
