export default function initScrollSuave() {
  const linksInt = document.querySelectorAll("[data-anime='menu'] a[href^='#']");

  function scrollSection(event) {
    event.preventDefault();
    const href = this.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // FORMA ALTERNATIVA
    // const top = section.offsetTop;
    // window.scrollTo({
    //   top: top,
    //   behavior: "smooth"
    // })
  }

  linksInt.forEach((link) => {
    link.addEventListener("click", scrollSection);
  });
}