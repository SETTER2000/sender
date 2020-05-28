import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "about" */ '@/components/Home.vue')
    },
    {
        path: '/help',
        name: 'help',
        component: () => import(/* webpackChunkName: "about" */ '@/components/Help.vue')
    },
    {
        path: '/add/:id',
        props: true,
        name: 'add',
        component: () => import(/* webpackChunkName: "about" */ '@/components/Store/Add.vue')
    },
    {
        path: '/edit',
        name: 'edit',
        component: () => import(/* webpackChunkName: "about" */ '@/components/Store/Edit.vue')
    },
    {
        path: '/list',
        name: 'list',
        component: () => import(/* webpackChunkName: "about" */ '@/components/Store/List.vue')
    },
    {
        path: '/new',
        name: 'new',
        component: () => import(/* webpackChunkName: "about" */ '@/components/Store/NewAd.vue')
    },
    {
        path: '/reg',
        name: 'reg',
        component: () => import(/* webpackChunkName: "about" */ '@/components/Auth/Reg.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "about" */ '@/components/Auth/Login.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
