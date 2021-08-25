import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import hyh from '../views/hyh.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/hyh',
    name: 'hyh',
    component: hyh
  },
  {
    path: '/zx',
    name: 'zx',
    component: () => import( '../views/zx.vue')
  },
  { 
    path: '/zx',
    redirect:"/zx"
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
