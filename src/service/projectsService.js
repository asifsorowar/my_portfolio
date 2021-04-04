import http from "./http";
import { apiUrl } from "../config.json";

export const getCatagories = () => {
  const apiEndPoint = apiUrl + "/project-catergories";
  return http.get(apiEndPoint);
};

export const getProjects = () => {
  const apiEndPoint = apiUrl + "/projects";
  return http.get(apiEndPoint);
};

export default {
  getCatagories,
  getProjects,
};
