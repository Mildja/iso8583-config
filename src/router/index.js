import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
//import Bitmap from '../views/Bitmap.vue'
import BuilderView from  '../views/BuilderView.vue'
import DecoderView from '../views/DecoderView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/configure',
      name: 'configure',
      component: () => import('../views/ConfigureView.vue')
    },
    {
      path: '/bitmap',
      name: 'bitmap',
      component: ()=> import('../views/Bitmap.vue')
    },
    {
      path: '/builder',
      name: 'builder',
      component: BuilderView
    },
    {
      path: '/decoder',
      name: 'decoder',
      component: DecoderView
    }

  ]
})

export default router
