export default class Modal {
  constructor(buttonOpen, buttonClose, container) {
    this.botaoAbrir = document.querySelector(buttonOpen);
    this.botaoFechar = document.querySelector(buttonClose);
    this.containerModal = document.querySelector(container);

    // bind this ao callback para
    // fazer referência ao objeto
    // da classe
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueForaDoModal = this.cliqueForaDoModal.bind(this);
  }

  // abre ou fecha o modal
  toggleModal() {
    this.containerModal.classList.toggle("ativo");
  }

  // adiciona o evento de toggle ao modal
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  // fecha o madal ao clicar do lado de fora
  cliqueForaDoModal(event) {
    if (event.target === this.containerModal) {
      this.toggleModal();
    }
  }

  // adiciona os eventos aos elementos do modal
  modalEvent() {
    this.botaoAbrir.addEventListener("click", this.eventToggleModal);
    this.botaoFechar.addEventListener("click", this.eventToggleModal);
    this.containerModal.addEventListener("click", this.cliqueForaDoModal);
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.modalEvent();
    }
    return this;
  }
}
