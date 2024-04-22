import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from "../stores/AuthStore";
import { verifyAuth } from '../config/auth';
import { redirectPattern } from '../utils/redirect';


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
			name: 'profissional',
			component: () => import('../views/Profissional.vue'),
			meta: { requiresAuth: true, showSidebar: true, perfil: '002' }
		},
		{
			path: '/administracao',
			name: 'administracao',
			component: () => import('../views/Administracao.vue'),
			meta: { requiresAuth: true, showSidebar: true, perfil: '003' }
		},
		{
			path: '/recepcao',
			name: 'recepcao',
			component: () => import('../views/Recepcao.vue'),
			meta: { requiresAuth: true, showSidebar: true, perfil: '001' }
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
			meta: { requiresAuth: false, showSidebar: false },
			beforeEnter: (to, from, next) => {
				console.log('opa2')

				const authStore = useAuthStore()

				if (authStore.user.senha_padrao) {
					return next()
				}


				return next({name: redirectPattern()})
			}
		},
		{
			path: '/not_permission',
			name: 'not_permission',
			component: () => import('../views/SemPermissao.vue'),
			meta: { requiresAuth: false, showSidebar: false }
		},
		{
			path: '/:catchAll(.*)',
			redirect: '/login'
		}

	],
})

router.beforeEach(async (to, from, next) => {

	const authStore = useAuthStore()

	let isAuth = false
	if (authStore.token) {
		isAuth = await authStore.checkToken();
	}

	if (isAuth && to.name === 'login') {
		return next({name: redirectPattern()})
	}


	if (to.meta?.requiresAuth) {
		if (isAuth) {
			if (authStore.user.senha_padrao)
				return next({ name: 'alterar_senha' })

			if (!authStore.user.perfis.includes(to.meta?.perfil) && !authStore.user.administrador)
				return next({ name: 'not_permission' })

			return next()
		}

		return next({ name: 'login' })
	}
	return next()

})

export default router