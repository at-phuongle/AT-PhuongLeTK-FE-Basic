var $list = document.getElementById('js-product-list');
var $boxs = document.getElementsByClassName("js-gr-pro");
var $titles = document.getElementsByClassName('js-gr-title');

var stickyHandle = (function () {
  function ftSticky() {
    var minHeight = 0;
    var maxHeight = -25;
    var i = 0;
    var lengthTitle = $titles.length;
    while (i < lengthTitle) {
      maxHeight = maxHeight + $boxs[i].offsetHeight;
      if (($list.scrollTop > minHeight) && ($list.scrollTop < maxHeight)) {
        $titles[i].style.top = $list.scrollTop + 10 + 'px';
      }
      minHeight += $boxs[i].offsetHeight;
      i += 1;
    }
  }
  return {
    sticky: ftSticky
  }
})();
$list.addEventListener('scroll', stickyHandle.sticky);
