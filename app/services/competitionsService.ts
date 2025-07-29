import axios from "axios";
const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

export async function fetchCompetitions() {
  try {
    const response = await axios.get(`${API_URL}/api/competitions?populate=*`, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });
    return response.data;
  } catch (err) {
    throw err;
  }
}

export async function fetchCompetitionsById(id: number) {
  try {
    const response = await axios.get(
      `${API_URL}/api/competitions/${id}?populate=*`,
      {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
        },
      }
    );
    return response.data;
  } catch (err) {
    throw err;
  }
}
