import AnimaNumber from "./anima-number.js";

export default function fetchAnimais(url, target) {
  // cria a div contendo informações
  // com o total dos animais
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  // preenche cada animal no DOM
  const numerosGrid = document.querySelector(target);
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  // Anima os números de cada animal
  function animaAnimaisNumeros() {
    const animaNumber = new AnimaNumber("[data-numero]", ".numeros", "ativo");
    animaNumber.init();
  }

  // Puxa os animais através de um arquivo json
  // e cria cada animal ultilizando o crateAnimal
  async function criarAnimais() {
    try {
      // Fetch e espera a resposta e trasnforma em json
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();

      // Após a trasnformação de json ativa
      // as funções para preencher e animar os numeros
      animaisJSON.forEach((animal) => preencherAnimais(animal));
      animaAnimaisNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }

  return criarAnimais();
}
