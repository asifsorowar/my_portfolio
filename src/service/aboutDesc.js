import http from "./http";
import { apiUrl } from "../config.json";

const apiEndPoint = apiUrl + "/about-me";

export const getAboutDesc = () => {
  return http.get(apiEndPoint);
};
