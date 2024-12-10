$(document).ready(function(){

    // var prevScrollpos = $(window).scrollTop();
    // $(window).on('scroll', function() {
    //     var currentScrollPos = $(window).scrollTop();
    //     if (prevScrollpos > currentScrollPos) {
    //         $('nav').show().addClass("bg-dark");
    //         if ($(window).scrollTop() === 0) {
    //             $('nav').removeClass("bg-dark");
    //         }
    //     } else {
    //         $('nav').hide();
    //     }
    //     prevScrollpos = currentScrollPos;
    // });

    $('.owl-carousel').owlCarousel({
        loop:true,
        nav:false,
        items:1,
        dots:true,
        dotsData:true
    })

});
  
