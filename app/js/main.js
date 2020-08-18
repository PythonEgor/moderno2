$(function(){


    $('.products__slider-inner').slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      dots: true,
      arrows: false
    });

    $(".rate-star").rateYo({
        rating: 5,
        starWidth: "12px",
        readOnly: true,
        spacing: "2px",
      });
    
    var mixer = mixitup('.products__inner-box');
});