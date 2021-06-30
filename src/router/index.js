import Vue from 'vue'
import VueRouter from 'vue-router'
import demoMap from '@/components/demoMap'

Vue.use(VueRouter)

const routes = [
  {
    name: 'demoMap',
    path: '/demoMap',
    component: demoMap
  },
  {
    name: 'default',
    path: '/',
    redirect: { name: 'demoMap' }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router