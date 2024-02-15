import axios from 'axios';

// Definindo a URL base da API
const API_URL = 'http://localhost:8000';

// Criando uma instância do Axios com a URL base configurada
const api = axios.create({
  baseURL: API_URL,
});

// Exportando a instância do Axios para uso em outras partes da aplicação
export default api;