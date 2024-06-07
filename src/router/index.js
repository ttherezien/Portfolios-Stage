import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Stuckwin from '../views/Stuckwin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/stuckwin',
    name: 'stuckwin',
    component: Stuckwin
  },
  {
    path: '/stage',
    name: 'stage',
    component: () => import('../views/StageView.vue')
  },
  {
    path: '/modal',
    name: 'modal',
    component: () => import('../views/Modal.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
