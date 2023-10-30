$(document).ready(function() {
  $('.balloon3').on('click', function() {
      // List of vegetable photos
      const veges = ['.tomato2', '.cabbage', '.pumpkin', '.nasu'];

      // Randomly select one vegetable from the list
      const randomIndex = Math.floor(Math.random() * veges.length);
      const selectedVegeClass = veges[randomIndex];
      const $selectedVege = $(selectedVegeClass);

      // Calculate random left position and rotation
      const randomLeftPosition = Math.random() * ($(window).width() - $selectedVege.width());
      const randomRotation = Math.random() * 360;

      // Set initial properties, show the image, and animate its fall
      $selectedVege.css({
          'left': randomLeftPosition + 'px',
          'transform': 'rotate(' + randomRotation + 'deg)'
      }).show().animate({
          'top': $(window).height() + 'px'  // Make it fall off the screen
      }, 2000, function() {
          // Hide and reset position after animation
          $selectedVege.hide().css('top', '0');
      });
  });
});
