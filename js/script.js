import { SlideNavegacao } from './slide.js'

const slide = new SlideNavegacao('.slide','.slide-wrapper');
slide.init();

slide.addControl();

slide.addArrow('.prev', '.next')