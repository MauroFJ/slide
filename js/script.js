import SlideNavegacao from './slide.js'

const slide = new SlideNavegacao('.slide','.slide-wrapper');
slide.init();
slide.addArrow('.prev', '.next');
slide.addControl('.custom-controls');
