import http from "./http";

const apiEndPoint = "/languages";

export const getLanguages = () => {
  return http.get(apiEndPoint);
};
