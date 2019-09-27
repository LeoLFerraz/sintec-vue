<template>
  <div class="container-fluid baseFooterContainer">
    <div class="sponsorLogosContainer">
      <img src="../public/img/UNIRIOLogo.png" class="sponsorLogo">
    </div>
    <div class="socialMediaContainer d-flex justify-content-center align-content-center align-items-center">
      <div class="socialMediaText">Siga-nos no facebook:</div>
      <font-awesome-icon class="socialMediaIcon" :icon="{ prefix: 'fab', iconName: 'facebook' }"></font-awesome-icon>
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

  .socialMediaContainer {
  }

  .sponsorLogo {
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
    font-size: 1.3em;
    color: white;
    padding: 1rem;
  }
</style>
