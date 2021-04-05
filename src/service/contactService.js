import http from "./http";

const apiEndPoint = "/contacts";

export const postMessage = (info) => {
  return http.post(apiEndPoint, info);
};
