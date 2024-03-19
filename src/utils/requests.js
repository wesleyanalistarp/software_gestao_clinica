import axios from 'axios';

export const buscaCep = async (cep) => {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)

    if (response.data.erro) {
        return false;
    }

    return response.data
}

export const buscaEstados = async () => {

    try {

        const response = await axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")

        return response.data;
    } catch (err) {
        return false;
    }

}

export const buscaMunicipios = async (estado) => {
    try {

        const response = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/municipios`)

        return response.data;
    } catch (err) {
        return false;
    }



}