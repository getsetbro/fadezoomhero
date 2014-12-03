

function cycleImages(){
  var $active = $('.active');
  var $next = $active.prev();
  $next.addClass('active');
  $active.prependTo('.hero').removeClass('active next');
  $newactive = $('.active');
  $newnext = $newactive.prev();
  $newnext.addClass('next');
}
//init
$('.hero img').last().addClass('next');
$('.hero img').last().prev().addClass('next');
// run every x seconds
setInterval(cycleImages, 6000);
