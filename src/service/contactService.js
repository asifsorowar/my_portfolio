import http from "./http";
import { apiUrl } from "../config.json";

const apiEndPoint = apiUrl + "/contacts";

export const postMessage = (info) => {
  return http.post(apiEndPoint, info);
};
