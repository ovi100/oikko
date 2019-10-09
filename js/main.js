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
   *---------------------------------------------
   *-------------OwlCarousel/Product--------------
   *---------------------------------------------
   */


   /*
   *---------------------------------------------
   *----------------Price Slide-----------------
   *---------------------------------------------
   */


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




  
