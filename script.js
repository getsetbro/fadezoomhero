

function cycleImages(){
  var $active = $('.active');
  var $next = $active.prev();
  $next.addClass('active');
  $active.prependTo('.hero').removeClass('active');
}
//init
$('.hero img').last().addClass('active');
// run every x seconds
setInterval(cycleImages, 6000);
