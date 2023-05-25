export default class AnimaNumber {
  constructor(numeros, observerTarget, observerClass) {
    this.numerosAnimal = document.querySelectorAll(numeros);
    this.observerClass = observerClass;
    this.observerTarget = document.querySelector(observerTarget);

    // bind o this do objeto ao callback da mutação
    this.handleMutation = this.handleMutation.bind(this);
  }

  // recebe um elemento do dom, com o número em seu texto
  // incrementa do 0 ate o numero final
  static incrementarNumero(item) {
    let start = 0;
    const totalAnimal = +item.innerText;
    const incremento = Math.floor(totalAnimal / 100);

    const timer = setInterval(() => {
      start += incremento;
      item.innerText = start;
      if (start > totalAnimal) {
        item.innerText = totalAnimal;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }

  // Ativa o incrementar numero a cada elemento selecionado do DOM
  animaNumeros() {
    this.numerosAnimal.forEach((item) =>
      this.constructor.incrementarNumero(item)
    );
  }

  // Função que ativa quando as mutações ocorrerem
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }

  // Adiciona o MutationObserver para verificar
  // quando a classe ativo é adicionado ao elemento target
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numerosAnimal && this.observerTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}
