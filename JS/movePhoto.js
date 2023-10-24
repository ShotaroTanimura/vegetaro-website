$(document).ready(function() {
  let isPhotoVisible = false;  // State variable to check if the photo is visible

  $(".balloon1").on("click", function() {
      let marginLeftValue = (window.innerWidth > 600) ? '-250px' : '0px';
      let leftValue = (window.innerWidth > 600) ? '50%' : '5%';

      if (!isPhotoVisible) {
          // Show the photo
          $(".move-photo").animate({
              left: leftValue, /* Center it horizontally */
              marginLeft: marginLeftValue, /* Conditionally adjust for exact horizontal centering based on screen size */
              opacity: 1
          }, 1000);
          isPhotoVisible = true;
      } else {
          // Hide the photo
          $(".move-photo").animate({
              left: '-100%',
              opacity: 0
          }, 1000);
          isPhotoVisible = false;
      }
  });
});
