import outsideClick from "./outSideClick.js";

export default function initDropdown() {
  const dropDown = document.querySelectorAll("[data-dropdown] a");
const dropDownAtivo = document.querySelector(".dropdown-menu");

function handleClick(event) {
  event.preventDefault();
  dropDownAtivo.classList.add("ativo");
  outsideClick(this, ["touchstart", "click"], () => {
    dropDownAtivo.classList.remove("ativo");
  });
}

dropDown.forEach((item) => {
  ["touchstart", "click"].forEach((userEvent) => {
    item.addEventListener(userEvent, handleClick);
  });
});
}