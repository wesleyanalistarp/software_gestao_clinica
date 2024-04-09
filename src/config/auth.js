import axiosInstance from "./axios";

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
        const response = await axiosInstance.get('/auth/verify', {}, config)

        return { senha_padrao: response.data, token: token };
    } catch (err) {

        return false;
    }

}