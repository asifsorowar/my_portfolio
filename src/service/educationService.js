import http from "./http";
import { apiUrl } from "../config.json";

const apiEndPoint = apiUrl + "/educations";

export const getEducations = () => {
  return http.get(apiEndPoint);
};
