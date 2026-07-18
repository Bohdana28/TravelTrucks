import axios from "axios";

const api = axios.create({
  baseURL: "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io",
});

export default api;

export async function getCampers(filters = {}) {
    const params = {};
    
    params.page = filters.page || 1;
    params.limit = filters.limit || 4;

  if (filters.location) {
    params.location = filters.location;
  }

  if (filters.form) {
    params.form = filters.form;
  }

  if (filters.equipment?.length) {
    filters.equipment.forEach(item => {
      params[item] = true;
    });
  }

  const response = await api.get("/campers", {
    params,
  });

  return response.data;
}

export async function getCamperById(id) {
  const response = await api.get(`/campers/${id}`);
  return response.data;
}