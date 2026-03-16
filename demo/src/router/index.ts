import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/buttons'
        },
        {
            path: '/buttons',
            name: 'buttons',
            component: () => import('../views/ButtonsView.vue')
        },
        {
            path: '/forms',
            name: 'forms',
            component: () => import('../views/FormsView.vue')
        },
        {
            path: '/display',
            name: 'display',
            component: () => import('../views/DisplayView.vue')
        },
        {
            path: '/navigation',
            name: 'navigation',
            component: () => import('../views/NavigationView.vue')
        },
        {
            path: '/data',
            name: 'data',
            component: () => import('../views/DataDisplayView.vue')
        },
        {
            path: '/filters',
            name: 'filters',
            component: () => import('../views/FiltersView.vue')
        },
        {
            path: '/form-layouts',
            name: 'form layouts',
            component: () => import('../views/FormLayoutsView.vue')
        },
        {
            path: '/tables',
            name: 'tables',
            component: () => import('../views/TablesView.vue')
        },
        {
            path: '/typography',
            name: 'typography',
            component: () => import('../views/TypographyView.vue')
        },
        {
            path: '/icons',
            name: 'icons',
            component: () => import('../views/IconsView.vue')
        }
    ]
})

export default router
