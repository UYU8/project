import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Login.vue'),
      meta:{
        title:'登录'
      }
    },
    {
      path: '/noteClass',
      name: 'NoteClass',
      component: () => import('../views/NoteClass.vue'),
      meta:{
        title:'笔记分类'
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../views/Register.vue'),
      meta:{
        title:'注册'
      }
    },
    {
      path: '/',
      redirect: '/noteClass'
    },
    {
      path: '/note',
      name: 'Note',
      component: () => import('../views/Note.vue'),
      meta:{
        title:'笔记'
      }
    },
    {
      path: '/noteDetail',
      name: 'NoteDetail',
      component: () => import('../views/NoteDetail.vue'),
      meta:{
        title:'笔记详情'
      }
    },
    {
      path: '/notePublish',
      name: 'NotePublish',
      component: () => import('../views/NotePublish.vue'),
      meta:{
        title:'写笔记'
      }
    }
  ]
})
// 添加路由守卫
const whilePath = ['/login','/register','/noteClass']
router.beforeEach((to,from,next) => {
  document.title = to.meta.title;
  if(!whilePath.includes(to.path)){//需要登录，不在whilePath中
    if(!localStorage.getItem('userInfo')){
      router.push('/login')
    }else{
      next()
    }
  }
  next()
  return
})


export default router
