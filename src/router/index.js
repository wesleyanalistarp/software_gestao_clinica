import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/AuthStore';
import { verifyAuth } from '../config/auth';


const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/laboratorio',
			component: () => import('../views/Laboratorio.vue'),
			meta: { requiresAuth: true, showSidebar: true }
		},
		{
			path: '/paciente',
			name: 'paciente',
			component: () => import('../views/Paciente.vue'),
			meta: { requiresAuth: true, showSidebar: true }
		},
		{
			path: '/profissional',
			component: () => import('../views/Profissional.vue'),
			meta: { requiresAuth: true, showSidebar: true }
		},
		{
			path: '/administracao',
			component: () => import('../views/Administracao.vue'),
			meta: { requiresAuth: true, showSidebar: true }
		},
		{
			path: '/recepcao',
			component: () => import('../views/Recepcao.vue'),
			meta: { requiresAuth: true, showSidebar: true }
		},
		{
			path: '/anamnese',
			name: 'anamnese',
			component: () => import('../views/Anamnese.vue'),
			meta: { requiresAuth: true, showSidebar: true }
		},
		{
			path: '/login',
			name: 'login',
			component: () => import('../views/Login.vue'),
			meta: { requiresAuth: false, showSidebar: false }
		},
		{
			path: '/alterar_senha',
			name: 'alterar_senha',
			component: () => import('../views/AlterarSenha.vue'),
			meta: { requiresAuth: false, showSidebar: false }
		},

	],
})

router.beforeEach(async (to, from, next) => {
	

	const authStore = useAuthStore();

	if (!authStore.token) {
		const {senha_padrao, token} = await verifyAuth();

		
		if (token) {
			authStore.token = token;
			authStore.isAuth = true;
		}

		if (senha_padrao == true) {
			return next('/alterar_senha')
		}
	}

	if ((to.meta.requiresAuth && !authStore.isAuth)) {
		// Se a rota requer autenticação e o usuário não está autenticado, redirecione para a página de login ou para onde desejar
		return next('/login')
	} else {
		// Se a autenticação não é necessária ou o usuário está autenticado, continue normalmente
		return next()
	}
})

export default router