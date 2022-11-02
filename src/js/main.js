$(document).ready(
    function(){
        $('#slider').slick({
            // autoplay: true,
            autoplaySpeed: 1000,
            // dots: true,
            infinite: false
        });
        
        $('#slider-secondary').slick({
            // autoplay: true,
            autoplaySpeed: 1000,
            // dots: true,
            infinite: true,
            slidesToShow: 5,
            centerMode: true
        });
    } 
  );