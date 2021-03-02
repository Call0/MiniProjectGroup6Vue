import Vue from 'vue'
import VueRouter from 'vue-router'
import register from '@/views/register.vue'
import login from '@/views/login.vue'
import home from '@/views/home.vue'
import train from '@/views/train.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/register',
    name: 'Register',
    component: register
  },
  {
    path: '/login',
    name: 'Login',
    component: login
  },
  {
    path: '/home',
    name: 'Home',
    component: home
  },
  {
    path: '/train',
    name: 'Train',
    component: train
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
