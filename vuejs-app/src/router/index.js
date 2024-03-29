import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Produse from '../views/Produse.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/produse',
    name: 'Produse',
    component: Produse
  },
]

const router = new VueRouter({
  routes
})

export default router
