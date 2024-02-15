import api from './axios'

export const verifyAuth = async (token) => {

    const config = {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json', // Pode variar dependendo do seu endpoint
        }
    }

    try {
        const response = await api.post('/auth/verify', {}, config)

        return true;
    } catch (err) {

        return false;
    }

}