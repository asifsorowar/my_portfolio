import http from "./http";

const apiEndPoint = "/blogs";

export const loadBlogs = () => {
  return http.get(apiEndPoint);
};
