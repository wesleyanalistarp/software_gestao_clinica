import axios from 'axios';

// Definindo a URL base da API
const API_URL = import.meta.env.VITE_API_HOST;

// Criando uma instância do Axios com a URL base configurada
const api = axios.create({
  baseURL: API_URL,
});

const token = localStorage.getItem('token')

if (token) {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

// Exportando a instância do Axios para uso em outras partes da aplicação
export default api;