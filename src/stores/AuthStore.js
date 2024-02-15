import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    //state
    state() {
        return {
            token: '',
            isAuth: false
        }
    },

    actions: {
        setTokenLocalStorage(token) {
            this.token = token
            this.isAuth = true
            localStorage.setItem('token', token)
        }
    },

    getters: {
        getTokenFormatted() {
            if (this.token)
                return `Bearer ${this.token}`

            return ''
        }
    }
})