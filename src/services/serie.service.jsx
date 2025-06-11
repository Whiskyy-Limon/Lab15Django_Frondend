import axios from "axios";

const baseUrl = 'http://127.0.0.1:8000/api/series/';

export const getSeries = async () => {
    const response = await axios.get(baseUrl);
    return response;
}

export const createSerie = async (data) => {
    const response = await axios.post(baseUrl, data);
    return response;
}

export const updateSerie = async (id, data) => {
    const response = await axios.put(`${baseUrl}${id}/`, data);
    return response;
}

export const deleteSerie = async (id) => {
    const response = await axios.delete(`${baseUrl}${id}/`);
    return response;
}