var $box = document.getElementById('js-cart-list');
var $total = document.getElementById('js-total');
var j;

function showCart() {
  $box.innerHTML = '';
  var listCartLength = listCart.length;
  for (var i = 0; i < listCartLength; i++) {
    j = i + 1;
    $box.innerHTML +=
      '<tr id="js-remove' + j + '" >' +
      '<td class="td-product-stt" id="js-stt">' + j + '</td>' +
      '<td class="td-image"><img class="td-cart-img" src="./images/' + listCart[i].object.image + '"></td>' +
      '<td class="td-product-name">' + listCart[i].object.name + '</td>' +
      '<td class="td-product-quantity">' + listCart[i].quantity + '</td>' +
      '<td class="td-product-price">$' + listCart[i].object.price + '</td>' +
      '<td class="td-product-sub-total">$' + (listCart[i].object.price * listCart[i].quantity) + '</td>' +
      //'<td class="td-product-delete" data-id="1" onclick="deleteItem(' + listCart[i].object.id + ')"><i class="fa fa-times"></i></td>' +
      '<td class="td-product-delete"><button type="button" class="btn-delete js-bt-delete" data-id="' + listCart[i].object.id + '">X</button></td>' +
      '</tr>';
  }
  $total.innerHTML = '$' + sumTotal();
  countCart();
  deleteItem();
}
showCart();

function sumTotal() {
  var sum = 0;
  var listCartLength = listCart.length;
  for (var i = 0; i < listCartLength; i++) {
    sum += listCart[i].object.price * listCart[i].quantity;
  }
  return sum;
}

function deleteItem() {
  var dele = document.getElementsByClassName('js-bt-delete');
  var deleLength = dele.length;
  for (var i = 0; i < deleLength; i++) {
    dele[i].addEventListener('click', function (event) {
      var btnValue = event.target.dataset.id;
      for (var d = 0; d < listCart.length; d++) {
        if (listCart[d].object.id === parseInt(btnValue)) {
          listCart.splice(d, 1);
        }
      }
      localStorage.setItem('cart', JSON.stringify(listCart));
      showCart();
    });
  }
}
