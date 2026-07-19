import axios from "axios";

const API = "http://localhost:8000/api/hero";

export const getHero = async () => {
  const res = await axios.get(API);
  return res.data;
};

export const updateHero = async (hero) => {
  const token = localStorage.getItem("token");

  const res = await axios.put(API, hero, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};