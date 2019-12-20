import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

import Layout from '@/layout/index.vue'
import path from 'path';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        meta: {
          title: 'Dashboard',
          icon: 'dashboard'
        }
      }
    ]
  },
  {
    path: '/login',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/login/index.vue'),
        // component: () => import('@/views/Home.vue'),
        meta: {
          title: 'asdfasdf',
          icon: 'dashboard'
        }
      }
    ]
  },
  {
    path: '/loging',
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/404',
    component: () => import('@/views/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  // scrollBehavior: (to, from, savedPosition) => {
  //   if (savedPosition) {
  //     return savedPosition
  //   } else {
  //     return { x: 0, y: 0 }
  //   }
  // },
  routes
})

export default router
