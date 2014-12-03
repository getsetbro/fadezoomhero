function cycleImages(){
  var $active = $('.hero .active');
  var $next = ($active.next().length > 0) ? $active.next() : $('.hero img:first');
  $next.css('z-index',2);//move the next image up the pile
  //$active.animate({"right": "+=100","left": "+=100"}, 5000);
  $active.fadeOut(5000,function(){//fade out the top image
    $active.css('z-index',1).show().removeClass('active');//reset the z-index and unhide the image
    $next.css('z-index',3).addClass('active');//make the next image the top one
  });
}


  // run every 7s
  setInterval('cycleImages()', 5000);
