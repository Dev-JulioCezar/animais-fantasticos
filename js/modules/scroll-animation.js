export default class AnimaScroll {
  constructor(section) {
    this.section = document.querySelectorAll(section);
    this.windowPosition = window.innerHeight * 0.5;

    this.animaScroll = this.animaScroll.bind(this);
  }

  animaScroll() {
    this.section.forEach((item) => {
      const itemTop = item.getBoundingClientRect().top;
      if (itemTop < this.windowPosition) item.classList.add("ativo");
      else if (item.classList.contains("ativo")) {
        item.classList.remove("ativo");
      }
    });
  }

  init() {
    this.animaScroll();
    window.addEventListener("scroll", this.animaScroll);
  }
}
