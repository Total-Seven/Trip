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
        },
        {
            path: '/message', component: () => import('../views/message/message.vue'),
        },
        {
            path: '/:pathMatch(.*)*',
            component: () => import('../NOTFOUND.vue'),
        },
    ]
})

export default router 