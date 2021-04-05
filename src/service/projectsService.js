import http from "./http";

export const getCatagories = () => {
  const apiEndPoint = "/project-catergories";
  return http.get(apiEndPoint);
};

export const getProjects = () => {
  const apiEndPoint = "/projects";
  return http.get(apiEndPoint);
};

export default {
  getCatagories,
  getProjects,
};
