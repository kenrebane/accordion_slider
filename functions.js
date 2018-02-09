$(document).ready( function () {
  var action = "click",
      speed = 500;

  $(".section_heading").on(action, function() {

    //Slide toggle next element
    
    $(this).next().slideToggle(speed);


    //Get active elements image
    var img = $(this).children("img");

    //Remove class rotate from image except active on
    $("img").not(img).removeClass('rotate');

    //Toggle class rotate
    img.toggleClass('rotate');
  });


});
