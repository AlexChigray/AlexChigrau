var time = 2, st = 1;
$(window).scroll(function() {
  $('.realcounts__content_block').each(function(){
    var cPos = $(this).offset().top,
    topWindow = $(window).scrollTop();
    if (cPos < topWindow + 400) {
      if (st < 2) {
        $('span').each(function(){
          var 
          i = 1,
          num = $(this).data('num'),
          step = 1000 * time / num,
          that = $(this),
          int = setInterval(function(){
            if (i <= num) {
              that.html(i);
            }
            else {
              st = st + 2;
              clearInterval(int);
            }
            i++;
          },step);
        });
      }
    }    
  });
})


