<template>
  <div id="app">
    <BaseHeader id="header"/>
    <router-view/>
  </div>
</template>

<script>
import BaseHeader from './components/BaseHeader'
export default {
  name: 'App',
  components: {
    BaseHeader
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
  max-width: 1600px;
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
