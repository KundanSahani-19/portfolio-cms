import axios from "axios";

const API =
  "https://YOUR-RENDER-URL.onrender.com/api/educations";


// GET ALL EDUCATION

export const getEducations = async () => {
  const response = await axios.get(API);

  return response.data;
};


// GET SINGLE EDUCATION

export const getEducation = async (id) => {
  const response = await axios.get(
    `${API}/${id}`
  );

  return response.data;
};