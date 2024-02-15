import api from './axios'

export const verifyAuth = async () => {

    const token = localStorage.getItem('token')

    if (!token) return false;

    const config = {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json', // Pode variar dependendo do seu endpoint
        }
    }

    try {
        await api.post('/auth/verify', {}, config)

        return token;
    } catch (err) {

        return false;
    }

}