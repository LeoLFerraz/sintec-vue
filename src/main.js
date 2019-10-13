// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCalendarAlt, faUserPlus, faBookOpen, faMapMarker } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayersText, FontAwesomeLayers } from '@fortawesome/vue-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import Firebase from './firebase'

Vue.config.productionTip = false
Vue.use(Firebase)
library.add(faCalendarAlt)
library.add(faUserPlus)
library.add(faBookOpen)
library.add(faFacebook)
library.add(faMapMarker)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)

// eslint-disable-next-line
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

Vue.use(BootstrapVue)
