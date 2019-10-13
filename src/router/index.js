import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Calendar from '@/components/Calendar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/calendario',
      name: 'Calendar',
      component: Calendar
    }
  ]
})
