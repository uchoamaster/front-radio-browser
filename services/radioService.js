import axios from "axios";

const API_URL = "https://de1.api.radio-browser.info/json/stations/search?limit=10";

export const fetchRadios = async (query = "") => {
  try {
    const response = await axios.get(`${API_URL}&name=${query}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar rádios:", error);
    return [];
  }
};
