import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'Index',
    component:  () => import(/* webpackChunkName: "about" */ '../views/Index/index.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component:  () => import(/* webpackChunkName: "about" */ '../views/Cart/index.vue')
  },
  {
    path: '/shop',
    name: 'Shop',
    component:  () => import(/* webpackChunkName: "about" */ '../views/Shop/index.vue')
  },
  {
    path: '/information',
    name: 'Information',
    component:  () => import(/* webpackChunkName: "about" */ '../views/Information/index.vue')
  },
  {
    path: '/collect',
    name: 'Collect',
    component:  () => import(/* webpackChunkName: "about" */ '../views/Collect/index.vue')
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
