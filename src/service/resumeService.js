import http from "./http";

const apiEndPoint = "/resumes";

export const getResumes = () => {
  return http.get(apiEndPoint);
};
