import axios from "axios";
const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

export async function fetchCamps() {
  try {
    const response = await axios.get(`${API_URL}/api/camps?populate=*`, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });
    return response.data;
  } catch (err) {
    throw err;
  }
}

export async function fetchCampsById(id: number) {
  try {
    const response = await axios.get(`${API_URL}/api/camps/${id}?populate=*`, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });
    return response.data;
  } catch (err) {
    throw err;
  }
}
