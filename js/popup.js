var contactLink = document.querySelector(".map-address-block .btn");
var popup = document.querySelector(".modal-content");
var popup_overlay = document.querySelector(".modal-overlay")
var name_input = popup.querySelector("[name=name]");
var close = popup.querySelector(".modal-content-close");
var popup_close_array = [close, popup_overlay]

contactLink.addEventListener("click", function(event) {
  event.preventDefault();
  popup_overlay.classList.add("modal-content-show");
  popup.classList.add("modal-content-show");
  name_input.focus();
});

popup_close_array.forEach(function(element) {
  element.addEventListener("click", function(event) {
  event.preventDefault();
  popup_overlay.classList.remove("modal-content-show");
  popup.classList.remove("modal-content-show");
});
});
