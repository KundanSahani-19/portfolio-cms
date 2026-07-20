import axios from "axios";

const API =
  "https://YOUR-RENDER-URL.onrender.com/api/experiences";


// =========================
// GET ALL EXPERIENCES
// =========================

export const getExperiences = async () => {
  const response = await axios.get(API);

  return response.data;
};


// =========================
// GET SINGLE EXPERIENCE
// =========================

export const getExperience = async (id) => {
  const response = await axios.get(
    `${API}/${id}`
  );

  return response.data;
};