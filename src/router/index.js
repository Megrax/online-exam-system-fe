import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/Register.vue')
  },
  {
    path: '/practice',
    name: 'Practice',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/Practice.vue'),
  },
  {
    path: '/exam',
    name: 'Exam',
    component: () => import('@/views/Exam.vue')
  },
  {
    path: '/practice-analysis',
    name: 'PracticeAnalysis',
    component: () => import('@/views/PracticeAnalysis.vue')
  },
  {
    path: '/exam-record',
    name: 'ExamRecord',
    component: () => import('@/views/ExamRecord.vue')
  },
  {
    path: '/test/:id',
    name: 'Test',
    component: () => import('@/components/SingleChoice.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/views/Profile.vue')
  },
  {
    path: '/notification',
    name: 'Notification',
    component: () => import('@/views/Notification.vue')
  },
  // {
  //   path: '/upload',
  //   name: 'Upload',
  //   component: ()=>import('@/views/UploadQuestions.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
