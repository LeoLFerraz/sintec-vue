<template>
  <div class="col-lg-4 col-md-12 homeColumn">
    <div class="container-fluid d-flex flex-column align-items-center align-content-center justify-content-center">
      <div class="container-fluid linkIconContainer">
        <router-link :to="link">
          <font-awesome-layers full-width class="fa-10x container-fluid">
            <font-awesome-icon :icon="icon" class="homeCardIcon"/>
            <font-awesome-layers-text class="texto" transform="shrink-12" :value="titulo" />
          </font-awesome-layers>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeCard',
  props: ['titulo', 'link', 'icon']
}
</script>

<style scoped>
  .homeColumn:nth-child(even) {
    background-color: rgba(100,100,200,0.5);
  }
  .homeColumn:nth-child(odd) {
    background-color: rgba(150,120,130,0.5);
  }
  .homeCardIcon {
    color: rgba(255,255,255,0.3);
    width: 100%;
    max-width: 150px;
    height: auto;
  }
  .linkIconContainer{
    text-align: center;
  }
  .texto{
    color: #FFFFFF;
    font-weight: bold;
    white-space: nowrap;
    text-shadow: 3px 3px #000000;
  }
</style>
