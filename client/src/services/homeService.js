import axios from "axios";

const API = const API = "https://portfolio-cms-backend-8jty.onrender.com/api/home";;

export const getHome = async () => {
  const res = await axios.get(API);
  return res.data;
};

export const updateHome = async (data) => {
  const token = localStorage.getItem("token");

  const res = await axios.put(API, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};