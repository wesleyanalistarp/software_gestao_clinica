import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/about',
			component: () => import('../views/About.vue')
		},
		{
			path: '/team',
			component: () => import('../views/Team.vue')
		},
		{
			path: '/contact',
			component: () => import('../views/Contacte.vue')
		},
		{
			path: '/login',
			component: Login
		},
	],
})

export default router