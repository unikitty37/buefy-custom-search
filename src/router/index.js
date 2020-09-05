import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Rows from '@/views/Rows'
import Both from '@/views/Both'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/rows',
    name: 'Rows',
    component: Rows,
  },
  {
    path: '/both',
    name: 'Both',
    component: Both,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
