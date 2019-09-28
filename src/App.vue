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
export default {
  name: 'App',
  components: {
    BaseHeader,
    BaseFooter
  }
}

</script>

<style>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
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
