const addScript = (url) => {
  const script = document.createElement("script");
  script.src = process.env.PUBLIC_URL + "/js/" + url;
  script.async = true;
  document.body.appendChild(script);
};

export const load = () => {
  addScript("jquery-2.2.4.min.js");
  addScript("popper.min.js");
  addScript("menu.js");
  addScript("jquery.waypoints.js");
  addScript("progress-list.js");
  addScript("section.js");
  addScript("portfolio-filter.js");
  addScript("slider-carousel.js");
  addScript("mobile-menu.js");
  addScript("contacts.js");
  addScript("mbclicker.min.js");
};
