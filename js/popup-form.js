var link = document.querySelector(".feedback .style-btn");
var popup = document.querySelector(".feedback-popup");
var overlay = document.querySelector(".modal-overlay");
var close = document.querySelector(".feedback-popup-close");
var form = popup.querySelector(".feedback-form");
var userName = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=fb-email]");
var storage = localStorage.getItem("userName");

link.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.add("modal-overlay-show");
  popup.classList.add("feedback-popup-show");
  if (storage) {
    userName.value = storage;
    email.focus();
    } else {
    userName.focus();
  }
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("feedback-popup-show");
  popup.classList.remove("feedback-popup-error");
  overlay.classList.remove("modal-overlay-show");
});

form.addEventListener("submit", function(event) {
  if (!userName.value || !email.value) {
    event.preventDefault();
    popup.classList.remove("feedback-popup-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("feedback-popup-error");
  } else {
    localStorage.setItem("userName", userName.value);
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("feedback-popup-show")) {
      popup.classList.remove("feedback-popup-show");
      popup.classList.remove("feedback-popup-error");
      overlay.classList.remove("modal-overlay-show");
    }
  }
});
