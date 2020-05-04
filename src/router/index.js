import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
import Login from "../views/Login";
import Arhive from "../views/Arhive";
import Main from "../views/Main";

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '',
    name: 'Login',
    component: Login

  },
  {
    path:'/Arhive',
    name: 'Arhive',
    component: Arhive,
  },
  {
    path:'/main',
    name: 'Main',
    component: Main
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
