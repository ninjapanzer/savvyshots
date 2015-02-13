// Galleria
$(function(){
  Galleria.loadTheme('/stylesheets/galleria-folio/galleria.folio.min.js');
  Galleria.configure({
    transition: 'pulse',
    thumbCrop: 'width',
    lightbox: true,
    imageCrop: false,
    carousel: false,
    show: false,
    easing: 'galleriaOut',
    fullscreenDoubleTap: true,
  });
  Galleria.run('.galleria');
});