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
  Galleria.ready(function() {
    var thumbcont=this.$('thumbnails-container'),
    thumb=this.$('thumbnails-list'),
    thumbw,thumbmarg,left,contw,
    center=function(){
      contw=thumbcont.width();
      left=((contw-Math.floor(contw/thumbw)*thumbw)/2+thumbmarg)+'px';
      thumb.css('left',left);
    };
    this.bind('thumbnail', function(e) {
      if (!thumbw) {
        var thumbp=$(e.thumbTarget).parent();
        thumbw=thumbp.outerWidth(true);
        thumbmarg=(parseFloat(thumbp.css('margin-right'))-parseFloat(thumbp.css('margin-left')))/2;
        center();
      }
    });
    $(window).on('resize',center);
  });
});