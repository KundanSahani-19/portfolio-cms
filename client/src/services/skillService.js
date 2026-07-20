import axios from "axios";

const API =
  "https://portfolio-cms-backend-8jty.onrender.com/api/skills";

export const getSkills = async () => {
  const response = await axios.get(API);

  return response.data;
};