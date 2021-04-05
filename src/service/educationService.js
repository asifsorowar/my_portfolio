import http from "./http";

const apiEndPoint = "/educations";

export const getEducations = () => {
  return http.get(apiEndPoint);
};
