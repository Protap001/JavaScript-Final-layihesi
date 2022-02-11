jQuery(document).ready(function() {

  var mouseX = 0, mouseY = 0;
  var xp = 0, yp = 0;
 
  jQuery(document).mousemove(function(e){
    mouseX = e.clientX - 30;
    mouseY = e.clientY - 30;
  });
 
  setInterval(function(){
    xp += ((mouseX - xp)/3);
    yp += ((mouseY - yp)/3);
    jQuery(".circle").css({left: xp +'px', top: yp +'px'});
  }, 20);
 
 });


$(document).ready(function () {
    setTimeout(function () {
        $('#page-preloader').hide();
    }, 1000);
});


var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


var textWrapper = document.querySelector('.ml12');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
anime.timeline({loop: true})
.add({
  targets: ' .ml12 .letter',
  translateX: [40,0],
  translateZ: 0,
  opacity: [0,1],
  easing: "easeOutExpo",
  duration: 1200,
  delay: (el, i) => 500 + 30 * i
}).add({
  targets: '.ml12 .letter',
  translateX: [0,-30],
  opacity: [1,0],
  easing: "easeInExpo",
  duration: 1100,
  delay: (el, i) => 100 + 30 * i
});

