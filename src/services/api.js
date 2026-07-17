import axios from "axios";


const api = axios.create({
    baseURL: 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io'
})

export default api;

export async function getCampers() {
    const response = await api.get('/campers')
    return response.data
    
};

export async function getCamperById(id) {
    const response = await api.get(`/campers/${id}`)
    return response.data
}
