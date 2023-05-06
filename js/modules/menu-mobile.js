import outsideClick from "./outSideClick.js";

export default function menuMobile() {
  const menuButton = document.querySelector("[data-menu='button']");
  const menuList = document.querySelector("[data-menu='list']");
  const userEvent = ["click", "touchstart"];

  function openMenu() {
    menuButton.classList.add("active");
    menuList.classList.add("active");
    outsideClick(menuList, userEvent, () => {
      menuList.classList.remove("active");
      menuButton.classList.remove("active");
    });
  }

  if (menuButton) {
    userEvent.forEach((events) => {
      menuButton.addEventListener(events, openMenu);
    });
  }
}
