function showProduct(): void {
  var $box: HTMLElement = document.getElementById('js-product-list');
  for (var i = 0; i < arrProduct.length; i++) {
    $box.innerHTML +=
      '<li class="product-item">' +
      '<img class="product-img" src="images/' + arrProduct[i].image + '">' +
      '<div class="product-detail">' +
      '<h3 class=""product-name>' + arrProduct[i].name + '</h3>' +
      '<p class="product-desc">' + arrProduct[i].description + '</p>' +
      '<p class="product-price">' + arrProduct[i].price + '</p>' +
      '<button type="button" class="btn-add" data-id="' + arrProduct[i].id + '">Add to cart</button>' +
      '</div>' +
      '</li>'
  }
}
showProduct();

function addToCart(): void {
  var $add: HTMLCollection = document.getElementsByClassName('btn-add');
  var quantity: number = 1;
  var object: product;
  for (var i: number = 0; i < $add.length; i++) {
    $add[i].addEventListener('click', function (event) {
      var btnValue: string = event.target.dataset.id;
      for (var j: number = 0; j < arrProduct.length; j++) {
        var index: number = -1;
        if (arrProduct[j].id === parseInt(btnValue)) {
          for (var k: number = 0; k < listCart.length; k++) {
            if (arrProduct[j].id === listCart[k].object.id) {
              index = k;
            }
          }
          if (index === -1) {
            object = arrProduct[j];
            listCart.push({ object, quantity });
          }
          else {
            listCart[index].quantity += 1;
          }
          localStorage.setItem('cart', JSON.stringify(listCart));
        }
      }
      count_cart();
    });
  }
}
addToCart();
