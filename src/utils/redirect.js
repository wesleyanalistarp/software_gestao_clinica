import router from "../router";
import { useAuthStore } from "../stores/AuthStore";

export const redirectPattern = function () {

    const useAuth = useAuthStore()

    console.log(router)

    switch (useAuth.user.perfis[0]) {
        case '001':
            router.push('recepcao')
            break;
        case '002':
            router.push('profissional')
            break;
        case '003':
            router.push('administracao')
            break;
        default:
            router.push('home')
            break;

    }
}
