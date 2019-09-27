// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Header from './components/BaseHeader.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCalendarAlt, faUserPlus, faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.config.productionTip = false
library.add(faCalendarAlt)
library.add(faUserPlus)
library.add(faBookOpen)
library.add(faFacebook)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// eslint-disable-next-line
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
// eslint-disable-next-line
new Vue({
  el: '#header',
  router,
  components: { Header },
  template: '<Header/>'
})

Vue.use(BootstrapVue)
