import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

const rootRoutes :RouteRecordRaw[] = [
    {
        path: 'home',
        name:'Home',
        component: () => import('@/views/Home/Home.vue'),
        meta: {
            title: '首页',
            cache:true
        }
    },
    {
        path: 'games',
        name:'Games',
        component: () => import('@/views/Games/Games.vue'),
        meta: {
            title: '游戏库',
            cache:true
        }
    },
    {
        path: 'mine',
        name:'Mine',
        component: () => import('@/views/My/Mine.vue'),
        meta: {
            title: '我的',
            cache:false
        }
    },
    {
        path: 'assistant',
        name:'Assistant',
        component: () => import('@/views/Assistant/Assistant.vue'),
        meta: {
            title: 'AI助手',
            cache:true
        }
    }
]

const routes :RouteRecordRaw[] = [
    {
        path: '/',
        name:'App',
        component: () => import('@/views/KeepAlive.vue'),
        redirect: '/home',
        children:rootRoutes
    },
    {
        path:'/login',
        name:'login',
        component:() => import('@/views/Login/Login.vue')
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, _from, next) => {

    document.title = to.meta.title as string;
    next()

})

export default router;
