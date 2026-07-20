import axios from "axios";

const API =
  "https://YOUR-RENDER-URL.onrender.com/api/certificates";

export const getCertificates = async () => {
  const response = await axios.get(API);

  return response.data;
};

export const getCertificate = async (id) => {
  const response = await axios.get(
    `${API}/${id}`
  );

  return response.data;
};