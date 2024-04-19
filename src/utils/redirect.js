import router from "../router";
import { useAuthStore } from "../stores/AuthStore";

export const redirectPattern = function () {

    const useAuth = useAuthStore()

    console.log(router)

    switch (useAuth.user.perfis[0]) {
        case '001':
            return 'recepcao'
        case '002':
            return 'profissional'
        case '003':
            return 'administracao'
        default:
            return 'home'
    }
}
