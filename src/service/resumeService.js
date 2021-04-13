import http from "./http";

export const getEmployment = () => {
  const apiEndPoint = "/employments";
  return http.get(apiEndPoint);
};

export const getSkillLabels = () => {
  const apiEndPoint = "/skill-labels";
  return http.get(apiEndPoint);
};

export const getSkills = () => {
  const apiEndPoint = "skills";
  return http.get(apiEndPoint);
};
