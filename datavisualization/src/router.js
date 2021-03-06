import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import Layout from "./layout"
import pvuv from "./components/pvuv/index"
// import { component } from "vue/types/umd";

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [
    {
        path:'/',
        component: Layout,
        redirect:'/pvuv',
        children: [
            {
                path: '/pvuv',
                component: pvuv
            }
            
        ]
    },
    {
        path:"/pvuv",
        component: Layout,
    }
]

var router =  new VueRouter({
    routes
})
export default router;

