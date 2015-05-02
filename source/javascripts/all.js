//= require jquery/dist/jquery.min
//= require jquery-migrate/jquery-migrate.min
//= require nivo-slider/jquery.nivo.slider.pack
//= require galleria/src/galleria
//= require galleria/src/plugins/history/galleria.history

// Nivo
$(function(){
 $('#slider').nivoSlider({
  effect: 'fade',
  pauseTime: 2500,
  animSpeed: 300,
  controlNav: false,
 });
});

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-58107731-1', 'auto');
ga('require', 'linkid', 'linkid.js');
ga('send', 'pageview');

