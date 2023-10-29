$(document).ready(function() {
  let balloons = $(".balloon");
  let isBalloonShown = false;

  $(window).on('scroll', function() {
      let scrollTop = $(this).scrollTop();
      if (!isBalloonShown && scrollTop > 10) { 
          // Show balloons in order with a delay between each
          balloons.each(function(index, balloon) {
              setTimeout(function() {
                  $(balloon).css('opacity', '1').animate({bottom: '+=17vw'}, 1000);
              }, index * 400); // 1000ms delay between each balloon
          });

          isBalloonShown = true;
      }
  });
});
