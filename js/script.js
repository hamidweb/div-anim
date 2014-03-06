(function() {

  window.img = document.querySelector('.img')
  var imgWrap = document.querySelector('.img-wrap');
  var x = 0;
  var y = 0;
  var moveReverse = false;

  var imgPlay = setInterval(function() {

    var imgWidth = img.clientWidth;
    var imgHeight = img.clientHeight;
    var imgWrapWidth = imgWrap.clientWidth;
    var imgWrapHeight = imgWrap.clientHeight;
    var ratio = (imgWrapHeight - (imgHeight)) / (imgWrapWidth - (imgHeight));

    $(img).css({
      'left': moveReverse ? --x : ++x,
      'top': moveReverse ? (y = y - ratio) : (y = y + ratio)
    });

    x = x >= imgWrapWidth - imgWidth ? imgWrapWidth - imgWidth : x;
    y = y >= imgWrapHeight - imgHeight ? imgWrapHeight - imgHeight : y;
    if (x + imgWidth >= imgWrapWidth && y + imgHeight >= imgWrapHeight) {
      x = imgWrapWidth - imgWidth;
      moveReverse = true;
    }

    x = x <= 0 ? 0 : x;
    y = y <= 0 ? 0 : y;
    if (x <= 0 && y <= 0) {
      moveReverse = false;
    }

  }, 1);

  setInterval(function() {
    var tempImgWrapWidth = (Math.floor(Math.random() * 400) + 200);
    var tempImgWrapHeight = (Math.floor(Math.random() * 400) + 200);
    $(imgWrap).stop(true, true).animate({
      width: tempImgWrapWidth,
      height: tempImgWrapHeight
    }, 1000);

    var tempImgWidth = (Math.floor(Math.random() * 100) + 20);
    var tempImgHeight = (Math.floor(Math.random() * 100) + 20);
    $(img).stop(true, true).animate({
      width: tempImgWidth,
      height: tempImgHeight
    }, 700);
  }, 2000);

})();
