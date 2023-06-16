import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import RegisterView from '../views/RegisterView.vue'
import NotFound from '../views/NotFound.vue'
import DashboardView from '../views/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView
    },

    {
      path: '/register',
      name: 'RegisterRoute',
      component: RegisterView
    },
    {
      path: '/dashboard/:username',
      name: 'DashboardRoute',
      component: DashboardView
    },

    // Catchall 404
    {
      path: '/:catchall(.*)',
      name: 'NotFound',
      component: NotFound
    }

  ]
})

export default router
