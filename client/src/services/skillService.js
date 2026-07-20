import axios from "axios";

const API = "https://YOUR-RENDER-URL.onrender.com/api/skills";

export const getSkills = async () => {
  const response = await axios.get(API);

  return response.data;
};