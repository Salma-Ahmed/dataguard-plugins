import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/marketing',
      name: 'home',
      component: HomeView
    },
    {
      path: '/marketing',
      name: 'marketing',
      component: HomeView
    },
    {
      path: '/finance',
      name: 'finance',
      component: HomeView
    },
    {
      path: '/personnel',
      name: 'personnel',
      component: HomeView
    }
  ]
})

export default router
