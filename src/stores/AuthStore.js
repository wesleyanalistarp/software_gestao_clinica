import { defineStore } from 'pinia'
import { ref } from 'vue'
import axiosInstance from '../config/axios';

export const useAuthStore = defineStore('auth', () => {
    const token = ref(localStorage.getItem('token'));
    const user = ref(JSON.parse(localStorage.getItem('user')));

    function setToken(tokenValue) {
        localStorage.setItem('token', tokenValue)
        token.value = tokenValue
    }

    function setUser(userValue) {
        localStorage.setItem('user', JSON.stringify(userValue))
        user.value = userValue
    }

    async function checkToken() {
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token.value}`
                }
            }
            const {data} = await axiosInstance.get('/auth/verify', config)
            
            setUser(data.usuario)

            return true
        }catch(err){
            return false
        }
    }

    return {
        token,
        user,
        setUser,
        setToken,
        checkToken
    }
})