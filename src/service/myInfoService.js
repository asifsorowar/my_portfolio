import http from "./http";

const apiEndPoint = "/my-infos";

export const getMyInfos = () => {
  return http.get(apiEndPoint);
};

export const getMyProfilePicture = () => {
  const apiEndPoint = "/profile-picture";
  return http.get(apiEndPoint);
};

export const getCv = () => {
  const apiEndPoint = "/cv";
  return http.get(apiEndPoint);
};
