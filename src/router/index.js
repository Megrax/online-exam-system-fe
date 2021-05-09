import Vue from 'vue'
import VueRouter from 'vue-router'
import apps from './apps'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
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
    component: () => import('@/views/Practice.vue'),
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
  ...apps,
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
