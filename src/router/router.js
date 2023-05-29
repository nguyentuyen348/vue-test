import { createRouter, createWebHistory } from 'vue-router'



const routes = [
    {
        path: '/home',
        component: import('../components/Home.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router