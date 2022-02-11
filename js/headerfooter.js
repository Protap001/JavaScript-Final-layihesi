
$(window).on("scroll", function() {
  if($(window).scrollTop() > 50) {
      $("#header").addClass("active");
  } else {
      //remove the background property so it comes transparent again (defined in your css)
     $("#header").removeClass("active");
  }
});

// $("#main-a").click(function(event){
//   event.stopPropagation();
// });

var bars = document.getElementsByClassName("bars")[0];
var ham = document.querySelector(".ham");
var listing = document.querySelector('.listing');
var body =document.querySelector("body") ;

function toggleNav() {
  listing.classList.toggle('nav-active'); 
  body.classList.toggle('hidebody') ;
     
}


ham.addEventListener("click", function(){

if(bars.classList.contains("active")){
  bars.classList.remove("active");
}
else{
  bars.classList.add("active");
}
toggleNav() ;

});


$(function() {
if($(window).width() < 992){
  $('.listing .main-li').on('click', function(e){
  e.preventDefault();
  $(this).children('.drop-ul').slideToggle();
  $(this).find( ".down" ).toggleClass( 'actived');
  $(this).find( "#main-a" ).toggleClass( 'actived');
  // return false;
  return true;
});
}
}); 

$(function() {
if($(window).width() < 992) {
$('.drop-ul li').on('click', function(e){
  e.preventDefault();
  $(this).children('.drop-ul-2').slideToggle();
  $(this).find('.right').toggleClass('actived');
  $(this).find('#drop-a').toggleClass('actived'); 
  return false;
});
}

});

$(".main-li a").click(function(event){
event.stopPropagation();
});



$(document).ready(function(){

$('#searchbar-icon').click(function(){
  $(".searchbox").fadeIn(300);
  $(".listing,.search,.quat").fadeOut(3);
});

$('.cross').click(function(){
  $(".searchbox").fadeOut(3);
  $(".listing,.search,.quat").fadeIn(300);

});

});
