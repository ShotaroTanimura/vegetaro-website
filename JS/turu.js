$(document).ready(function() {
  $('.balloon2').on('click', function() {
      // Check if turu1 is visible
      if ($('.turu1').css('opacity') == '0') {
          $('.turu1, .turu2').css('opacity', '1');
      } else {
          $('.turu1, .turu2').css('opacity', '0');
      }
  });
});