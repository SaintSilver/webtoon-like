var navs = $('.nav-top, .nav-bottom');
var menu = $('.nav-top > ul')
$('.contents').click(function(){
   menu.fadeOut();
   navs.toggle();
});

$(window).scroll(function(){
  if ($(window).scrollTop() === 0 || $(window).scrollTop() == $(document).height() - $(window).height()) {
    navs.fadeIn();
  }else{
    navs.fadeOut();
  }
});

$('.open-menu').click(function(){
    menu.toggle();
});

$('.to-the-top').click(function(e){
  e.preventDefault();
  $('html,body').animate({scrollTop:0},600);
});
