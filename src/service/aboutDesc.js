import http from "./http";

const apiEndPoint = "/about-me";

export const getAboutDesc = () => {
  return http.get(apiEndPoint);
};
