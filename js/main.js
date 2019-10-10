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

  $('.sidenav').click(function() {
    /* Act on the event */
    $('#menu-sidenav').toggleClass('show-sidemenu');
  });

  /*
    * ----------------------------------------------
    *----------Accordion with Toggle Icon-----------
    * ----------------------------------------------
  */

  function toggleIcon(e){
    $(e.target)
      .prev('li a')
      .find(".rotate-icon")
      .toggleClass('icofont-thin-right icofont-thin-down');
  }

  $('.sidenav-menu-link').on('hidden.bs.collapse', toggleIcon);
  $('.sidenav-menu-link').on('shown.bs.collapse', toggleIcon);



  /*
    * ----------------------------------------------
    *-----------------Vegas Slider------------------
    * ----------------------------------------------
  */
      
  var slider = $("#homeslider");
  slider.vegas({
    overlay: false,
    cover:true,
    transition: ['fade','slideLeft'],
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
   *---------------------------------------------
   *-----------------Counter UP------------------
   *---------------------------------------------
 */

  $('.count').counterUp({
    delay: 10,
    time: 1000
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




  
