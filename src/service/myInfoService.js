import http from "./http";
import { apiUrl } from "../config.json";

const apiEndPoint = apiUrl + "/my-infos";

export const getMyInfos = () => {
  return http.get(apiEndPoint);
};

export const getMyProfilePicture = () => {
  const apiEndPoint = apiUrl + "/profile-picture";
  return http.get(apiEndPoint);
};

export const getCv = () => {
  const apiEndPoint = apiUrl + "/cv";
  return http.get(apiEndPoint);
};
