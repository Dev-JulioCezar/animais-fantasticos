import ScrollSuave from "./modules/scroll-suave.js";
import Accordion from "./modules/accordion.js";
import initAnimaScrol from "./modules/scroll-animation.js";
import TabNav from "./modules/tabNav.js";
import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initDropdown from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initDateObject from "./modules/funcionamento.js";
import initAnimaisFetch from "./modules/animais-fetch.js";
import initBtcsFetch from "./modules/btc-fetch.js";

const scrollSuave = new ScrollSuave('[data-anime="menu"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav("[data-tab='menu'] li", "[data-tab='content'] section");
tabNav.init();

initModal();
initTooltip();
initDropdown();
initMenuMobile();
initDateObject();
initAnimaisFetch();
initBtcsFetch();
initAnimaScrol();
