import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/', redirect: '/home',
        },
        {
            path: "/home", component: () => import('../views/home/home.vue'),
        },
        {
            path: '/order/:id', component: () => import('../views/order/order.vue'),
        },
        {
            path: '/favor', component: () => import('../views/favor/favor.vue'),
            children: [
                {
                    path: '/add',
                    component: () => import('@/views/favor/cpns/cpncpns/add.vue'),
                    name: '添加账单'
                }
            ]
        },
        {
            path: '/message', component: () => import('../views/message/message.vue'),
        },
        ,
        {
            path: '/city',
            component: () => import('../views/home/cpns/city-location.vue'),
        },
        {
            path: '/:pathMatch(.*)*',
            component: () => import('../NOTFOUND.vue'),
        },
        {
            path: '/search',
            component: () => import('../views/search/search.vue'),
            meta: {
                whetherHide: true
            }
        },
        {
            path: '/detail/:id',
            component: () => import('../views/detail/detail.vue'),
        },
    ]
})



export default router 