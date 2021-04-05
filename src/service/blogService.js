import http from "./http";
import { apiUrl } from "../config.json";

const apiEndPoint = apiUrl + "/blogs";

export const loadBlogs = () => {
  return http.get(apiEndPoint);
};
