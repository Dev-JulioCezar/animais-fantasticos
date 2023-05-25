export default class AnimaScroll {
  constructor(section) {
    this.section = document.querySelectorAll(section);
    this.windowPosition = window.innerHeight * 0.5;

    this.checkDistance = this.checkDistance.bind(this);
  }

  // Pega a distância de cada item em relação ao topo
  // do site
  getDistance() {
    this.distance = [...this.section].map((item) => {
      const offset = item.offsetTop;
      return {
        element: item,
        offset: Math.floor(offset - this.windowPosition),
      };
    });
  }

  // verifica a distancia em cada objeto
  // em relação ao scroll do site
  checkDistance() {
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add("ativo");
      } else if (item.element.classList.contains("ativo")) {
        item.element.classList.remove("ativo");
      }
    });
  }

  init() {
    if (this.section.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener("scroll", this.checkDistance);
    }
    return this
  }

  // remove o event de scroll
  stop(){
    window.removeEventListener("scroll", this.checkDistance);
  }
}
