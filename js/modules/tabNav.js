export default class TabNav {
  constructor(menu, content){
    this.taBmenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activeClass = "ativo";
  }

 // ativa o tab de acordo com o index da mesma
  activeTab(index) {
    this.tabContent.forEach((section) => {
      section.classList.remove(this.activeClass);
    });
    const direcao = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add(this.activeClass, direcao);
  }

  // adiciona os eventos nas tabs
  addTabNavEvent(){
    this.taBmenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => this.activeTab(index));
    });
  }

  init(){
    if(this.taBmenu.length && this.tabContent.length){
      // ativar primeiro item
      this.activeTab(0)
      this.addTabNavEvent();
    }
    return this
  }
}
