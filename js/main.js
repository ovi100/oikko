/*------------------------------------
 *Author:Abu Sayed
 *Template:Oikko Store
 *Version:1.1
 *-------------------------------------
 */


$(document).ready(function() {

  $(window).scroll(function(){
      if ($(this).scrollTop()>150){
        $('.main-nav').addClass('fixed-nav');
      } 
      else {
        $('.main-nav').removeClass('fixed-nav');
      }
    });

  $('.body').on('shown.bs.collapse', function () {
    $(this).parent().find('.fa-angle-down')
                    .removeClass('fa-angle-down')
                    .addClass('fa-angle-up');
  }).on('hidden.bs.collapse', function () {
      $(this).parent().find(".fa-angle-up")
                      .removeClass("fa-angle-up")
                      .addClass("fa-angle-down");
  });

  $('.carousel').carousel({
    interval: 2000
  })


  /*
    * ----------------------------------------------
    *-----------------Vegas Slider------------------
    * ----------------------------------------------
  */
      
  var slider = $("#homeslider");
  slider.vegas({
    overlay: false,
    cover:true,
    transition: 'fade',
    transitionDuration: 4000,
    delay: 10000,
    timer:true,
    animation: 'random',
    animationDuration: 20000,
    slides: [
      {
        src: 'https://placehold.jp/cccccc/8c8c8c/1920x500.png?text=slider-1'
      },
      {
        src: 'https://placehold.jp/cccccc/8c8c8c/1920x500.png?text=slider-2'
      },
      {
        src: 'https://placehold.jp/cccccc/8c8c8c/1920x500.png?text=slider-3'
      },
      {
        src: 'https://placehold.jp/cccccc/8c8c8c/1920x500.png?text=slider-4'
      },
      {
        src: 'https://placehold.jp/cccccc/8c8c8c/1920x500.png?text=slider-5'
      },
      {
        src: 'https://placehold.jp/cccccc/8c8c8c/1920x500.png?text=slider-6'
      },
      {
        src: 'https://placehold.jp/cccccc/8c8c8c/1920x500.png?text=slider-7'
      },
      {
        src: 'https://placehold.jp/cccccc/8c8c8c/1920x500.png?text=slider-8'
      },
      {
        src: 'https://placehold.jp/cccccc/8c8c8c/1920x500.png?text=slider-9'
      },
      {
        src: 'https://placehold.jp/cccccc/8c8c8c/1920x500.png?text=slider-10'
      }
    ]
  });

  $('a.previous').on('click', function () {
    $("#homeslider").vegas('options', 'transition', 'fade').vegas('previous');
  });

  $('a.next').on('click', function () {
    $("#homeslider").vegas('options', 'transition', 'fade').vegas('next');
  });


  /*
   * -----------------------------------------------------------------
   *---------------------------ElevateZoom----------------------------
   * -----------------------------------------------------------------
   */


  $(".pdd-img").elevateZoom({
    gallery:'controls',
    galleryActiveClass: 'active',
    responsive:true,
    lensSize:50
  });  

});




  
