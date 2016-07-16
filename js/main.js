/**********************

Nav Bar Animations

**********************/

// var  topBar = $(".main-nav");
//     topBarTop = topBar.position().top;
    
// $(window).scroll(function() {  
//   if( $(this).scrollTop() > topBarTop ) {
//     topBar.css({
//         "position": "fixed",
//         "top":"0px",
//     });
//       topBar.animate({
//         // backgroundColor: "rgba(255, 255, 255, 0.8)",
//       }, 1000, function() {
//         // Animation complete.
//       });
//   } else {
//     topBar.css({
//         "position": "relative",
//     });
//   }
// });

$( window ).resize(function() {
    var box = $(".leaBox");
    console.log($(this).width());

    var boxSize = $(this).width();
    console.log(boxSize);
    if (boxSize > 850) {
      boxSize = $(this).width()/5;
    }
    box.css({
      "width": boxSize + "px",
      "height": boxSize + "px"
    });
});

/**********************

Content Box Toggles

**********************/

$(document).ready(function() {

    $(".head").click(function () {

    $header = $(this);
    //getting the next element
    $content = $header.next();
    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
    $content.slideToggle(500, function () {
        //execute this after slideToggle is done
        //change text of header based on visibility of content div
    });

	});

    var box = $(".leaBox");
    var width = $(window).width();

    var boxSize = width;
    if (width > 850) {
      boxSize = width/5;
    } 
    
    var imgNum = Math.floor((Math.random() * 15) + 1);

    box.css({
      "width": boxSize + "px",
      "height": boxSize + "px",
      // "background-image": "url(\"../plc/15.png\")"
    });

    var evenBox = $(".leaBox:nth-child(2)");
    evenBox.css({
      "width": boxSize + "px",
      "height": boxSize*2 + "px",
      // "background-image": "url(\"../plc/15.png\")"
    });

});