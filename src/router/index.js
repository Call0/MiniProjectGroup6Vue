import Vue from 'vue'
import VueRouter from 'vue-router'
import register from '@/views/register.vue'
import login from '@/views/login.vue'
import search from '@/views/search.vue'
import train from '@/views/train.vue'
import auth from '@/views/auth.vue'

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
    path: '/search',
    name: 'Search',
    component: search
  },
  {
    path: '/train',
    name: 'Train',
    component: train
  },
  {
    path: '/',
    name: 'Auth',
    component: auth
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
