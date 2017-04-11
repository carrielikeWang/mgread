import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/Home'
import Rank from '@/view/Rank'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/rank',
      name: 'Rank',
      component: Rank
    }
  ]
})
