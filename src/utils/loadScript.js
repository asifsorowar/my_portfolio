const addScript = (url) => {
  const script = document.createElement("script");
  script.src = process.env.PUBLIC_URL + "/js/" + url;
  script.async = true;
  document.body.appendChild(script);
};

export const load = () => {
  addScript("menu.js");
  addScript("section.js");
  addScript("mobile-menu.js");
  addScript("contacts.js");
  addScript("mbclicker.min.js");
};
