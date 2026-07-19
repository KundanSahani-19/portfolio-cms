import axios from "axios";

const API =
  "http://localhost:8000/api/projects";

// =========================
// GET ALL PROJECTS
// =========================

export const getProjects = async () => {
  const res = await axios.get(API);

  return res.data;
};

// =========================
// GET SINGLE PROJECT
// =========================

export const getProject = async (id) => {
  const res = await axios.get(
    `${API}/${id}`
  );

  return res.data;
};

// =========================
// CREATE PROJECT
// =========================

export const createProject = async (
  project
) => {
  const token =
    localStorage.getItem("token");

  const res = await axios.post(
    API,
    project,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};

// =========================
// UPDATE PROJECT
// =========================

export const updateProject = async (
  id,
  project
) => {
  const token =
    localStorage.getItem("token");

  const res = await axios.put(
    `${API}/${id}`,
    project,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};

// =========================
// DELETE PROJECT
// =========================

export const deleteProject = async (
  id
) => {
  const token =
    localStorage.getItem("token");

  const res = await axios.delete(
    `${API}/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};