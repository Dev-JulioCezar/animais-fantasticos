export default function animaNumber() {
  const numerosAnimal = document.querySelectorAll("[data-numero]");

  function animaNumeros() {
    numerosAnimal.forEach((item) => {
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
    });
  }

  const observerTarget = document.querySelector(".numeros");
  let observer;

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      observer.disconnect();
      animaNumeros();
    }
  }
  observer = new MutationObserver(handleMutation);
  observer.observe(observerTarget, { attributes: true });
}
