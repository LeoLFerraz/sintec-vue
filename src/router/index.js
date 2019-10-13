import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Inscricao from '@/components/Inscricao'
import Calendario from '@/components/Calendario'
import Sobre from '@/components/Sobre'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/inscricao',
      name: 'Inscricao',
      component: Inscricao
    },
    {
      path: '/calendario',
      name: 'Calendario',
      component: Calendario
    },
    {
      path: '/sobre',
      name: 'Sobre',
      component: Sobre
    }
  ]
})
