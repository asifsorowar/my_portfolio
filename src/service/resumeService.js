import http from "./http";

const apiEndPoint = "/resumes";

export const getResumes = () => {
  return http.get(apiEndPoint);
};

export const getOtherSkills = () => {
  const apiEndPoint = "/other-skills";
  return http.get(apiEndPoint);
};

export const getEmployment = () => {
  const apiEndPoint = "/employments";
  return http.get(apiEndPoint);
};
