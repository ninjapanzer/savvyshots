// Galleria
$(function(){
  Galleria.loadTheme('/stylesheets/galleria-folio/galleria.folio.min.js');
  Galleria.configure({
    transition: 'pulse',
    thumbCrop: 'width',
    lightbox: false,
    imageCrop: false,
    carousel: false,
    show: false,
    variation: 'dark',
    easing: 'galleriaOut',
    fullscreenDoubleTap: false,
  });
  Galleria.run('.galleria');
});