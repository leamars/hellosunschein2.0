/**********************

Nav Bar Animations

**********************/

var  topBar = $(".main-nav");
    topBarTop = topBar.position().top;
    
$(window).scroll(function() {  
  if( $(this).scrollTop() > topBarTop ) {
    topBar.css({
        "position": "fixed",
        "top":"0px",
    });
      topBar.animate({
        // backgroundColor: "rgba(255, 255, 255, 0.8)",
      }, 1000, function() {
        // Animation complete.
      });
  } else {
    topBar.css({
        "position": "relative",
    });
  }
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

});