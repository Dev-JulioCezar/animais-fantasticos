export default function initAnimaScroll() {
  const section = document.querySelectorAll('[data-anime="scroll"]');
  const windowPosition = window.innerHeight * 0.4;

  function animaScroll() {
    section.forEach((item) => {
      const itemTop = item.getBoundingClientRect().top;
      if (itemTop < windowPosition) item.classList.add("ativo");
      else if (item.classList.contains("ativo")) {
        item.classList.remove("ativo");
      }
    });
  }

  if (section.length) {
    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
}
