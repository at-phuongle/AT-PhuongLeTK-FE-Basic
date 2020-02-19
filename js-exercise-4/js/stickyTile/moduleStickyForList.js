var stickyHandle = (function () {
  function ftSticky(selector) {
    // select an element(*) was declared to use the sticky module
    var $list = document.querySelector(selector);
    // set style for list
    $list.classList.add('sticky-product-list');
    // select all elements LI as child of element(*)
    var $items = $list.querySelectorAll(selector + ' > li');
    var $titles = [];
    // get length of list of item 
    var lengthItem = $items.length;
    for (var i = 0; i < lengthItem; i++) {
      // set style for item
      $items[i].classList.add('sticky-product-group');
      // select title of Li
      var $title = $items[i].querySelector('h1, h2, h3, h4, h5, h6');
      // push title to list of title
      $titles.push($title);
    }
    // add event whrn scroll list
    $list.addEventListener('scroll', function () {
      // variable to assign the smallest distance from top item to list
      var minHeight = 0;
      // variable to assign the maximum distance from bottom item to list
      var maxHeight = -25;
      var j = 0;
      // get length of list of tiltle
      var lengthTitle = $titles.length;
      while (j < lengthTitle) {
        // set style for item of list
        $titles[j].classList.add('sticky-group-title');
        // set maximum += height of the item j
        maxHeight += $items[j].offsetHeight;
        // compare scroll distance with distance from top and bottom item to list
        if (($list.scrollTop > minHeight) && ($list.scrollTop < maxHeight)) {
          // set style TOP from list to title
          $titles[j].style.top = $list.scrollTop + 10 + 'px';
        }
        // set minHeight += height of the item j
        minHeight += $items[j].offsetHeight;
        j += 1;
      }
    });
  }
  return {
    sticky: ftSticky
  }
})();
