import http from "./http";
import { apiUrl } from "../config.json";

const apiEndPoint = apiUrl + "/languages";

export const getLanguages = () => {
  return http.get(apiEndPoint);
};
