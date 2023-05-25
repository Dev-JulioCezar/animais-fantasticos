import ScrollSuave from "./modules/scroll-suave.js";
import Accordion from "./modules/accordion.js";
import initAnimaScrol from "./modules/scroll-animation.js";
import TabNav from "./modules/tabNav.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import fetchAnimais from "./modules/animais-fetch.js";
import initDropdown from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initDateObject from "./modules/funcionamento.js";
import initBtcsFetch from "./modules/btc-fetch.js";

const scrollSuave = new ScrollSuave('[data-anime="menu"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav("[data-tab='menu'] li", "[data-tab='content'] section");
tabNav.init();

const modal = new Modal("[data-modal='abrir'", "[data-modal='fechar'", "[data-modal='container'");
modal.init();


const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

fetchAnimais("../../animaisapi.json", ".numeros-grid");

initDropdown();
initMenuMobile();
initDateObject();
initBtcsFetch();
initAnimaScrol();
