// Galleria
$(function(){
  Galleria.loadTheme('/stylesheets/galleria-folio/galleria.folio.min.js');
  Galleria.configure({
    transition: 'pulse',
    thumbCrop: 'width',
    lightbox: true,
    imageCrop: false,
    carousel: false,
    show: true,
    easing: 'galleriaOut',
    fullscreenDoubleTap: false,
  });
  Galleria.run('.galleria');
  Galleria.ready(function() {
    var gallery = this;
    this.bind('thumbnail', function(e) {
      $(e.thumbTarget).parent().mousedown(function() {
        $(this).unbind('click');
        gallery.openLightbox(e.index);
      });
    });
  });
});