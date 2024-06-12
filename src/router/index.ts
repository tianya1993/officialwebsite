

// 第一步：引入createRouter
import { createRouter,  createWebHashHistory} from "vue-router";


//创建路由器
const routes = [
    {
    path: '/',
    redirect: "/index"
    },
    {
    path: '/index',
    name: 'index',
    component: ()=>import("@/views/index/index.vue")
    },
    {
    path: '/house',  //全屋设计
    name: 'house',
        component: ()=>import("@/views/house/index.vue")
    },
     {
    path: '/kitchen',  //厨房设计
    name: 'kitchen',
        component: ()=>import("@/views/kitchen/index.vue")
    },
     {
    path: '/collocation',  //家居搭配
    name: 'collocation',
        component: ()=>import("@/views/collocation/index.vue")
    },
     {
    path: '/case',  //case
    name: 'case',
        component: ()=>import("@/views/case/index.vue")
    },
     {
    path: '/about',  //about
    name: 'about',
        component: ()=>import("@/views/about/index.vue")
    },
     {
    path: '/history',  //history

    name: 'history',
        component: ()=>import("@/views/history/history.vue")
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes:routes,

}) 

export default  router