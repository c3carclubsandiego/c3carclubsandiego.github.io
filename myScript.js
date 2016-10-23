var menu = document.getElementById('slider-menu');

function toggleShow () {
  var leftPosition = window.getComputedStyle(menu,null).getPropertyValue("left");
  if (leftPosition !== "0px") {
    menu.classList.add('slideright');
    return;
  }
  else {
    menu.classList.remove('slideright');
    return;
  }
}

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
