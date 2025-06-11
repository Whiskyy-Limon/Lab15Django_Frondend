import axios from "axios";

const baseUrl = 'http://127.0.0.1:8000/api/categories/';

export const getCategories = async () => {
    const response = await axios.get(baseUrl);
    return response;
}

export const createCategory = async (data) => {
    const response = await axios.post(baseUrl, data);
    return response;
}

export const updateCategory = async (id, data) => {
    const response = await axios.put(`${baseUrl}${id}/`, data);
    return response;
}

export const deleteCategory = async (id) => {
    const response = await axios.delete(`${baseUrl}${id}/`);
    return response;
}