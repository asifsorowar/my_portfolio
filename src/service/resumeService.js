import http from "./http";
import { apiUrl } from "../config.json";

const apiEndPoint = apiUrl + "/resumes";

export const getResumes = () => {
  return http.get(apiEndPoint);
};
