import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/HelloWorld.vue'
import BlogPage from '../components/BlogPage.vue'
 
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:lan',
      name: 'home',
      component: HomeView
    },
    { path: '/blog/:lan/:articleSlug', component: BlogPage },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})
 
export default router
