"use strict";

//Validation forms
function validateForm(selector) {
  Array.from(document.querySelectorAll(selector)).forEach((item) => {
    item.addEventListener("input", (e) => {
      if (e.target.value === "") {
        item.dataset.touched = false;
      }
    });
    item.addEventListener("invalid", () => {
      item.dataset.touched = true;
    });
    item.addEventListener("blur", () => {
      if (item.value !== "") item.dataset.touched = true;
    });
  });
}

validateForm(".js-form .form-field");
