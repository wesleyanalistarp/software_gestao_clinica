import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Recepcao from '../views/Recepcao.vue'
import { useAuthStore } from '../stores/AuthStore';
import Anamnese from '../views/Anamnese.vue'
import { verifyAuth } from '../config/auth';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: Home,
			meta: { requiresAuth: true }
		},
		{
			path: '/paciente',
			name: 'paciente',
			component: () => import('../views/Paciente.vue'),
			meta: { requiresAuth: true }
		},
		{
			path: '/team',
			component: () => import('../views/Team.vue'),
			meta: { requiresAuth: true }
		},
		{
			path: '/contact',
			component: () => import('../views/Contacte.vue'),
			meta: { requiresAuth: true }
		},
		{
			path: '/recepcao',
			component: () => import('../views/Recepcao.vue'),
			meta: { requiresAuth: true }
		},
		{
			path: '/anamnese',
			name: 'anamnese',
			component: () => import('../views/Anamnese.vue')
		},
		{
			path: '/login',
			component: Login
		},

	],
})

router.beforeEach(async (to, from, next) => {
	

	const authStore = useAuthStore();

	if (!authStore.token) {
		const token = await verifyAuth();
		if (token) {
			authStore.token = token;
			authStore.isAuth = true;
		}
	}

	if (to.meta.requiresAuth && !authStore.isAuth && false) {
		// Se a rota requer autenticação e o usuário não está autenticado, redirecione para a página de login ou para onde desejar
		next('/login')
	} else {
		// Se a autenticação não é necessária ou o usuário está autenticado, continue normalmente
		next()
	}
})

export default router