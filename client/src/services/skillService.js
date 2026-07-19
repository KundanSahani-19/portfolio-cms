import axios from "axios";

const API = "http://localhost:8000/api/skills";

export const getSkills = async () => {
  const response = await axios.get(API);

  return response.data;
};