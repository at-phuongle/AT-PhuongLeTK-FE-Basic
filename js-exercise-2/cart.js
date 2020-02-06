var getData = JSON.parse(localStorage.getItem('cart'));
var $box = document.getElementById('js-cart-list');
var $total = document.getElementById('js-total');
var j;
function showCart() {
  $box.innerHTML = '';
  for (var i = 0; i < getData.length; i++) {
    j = i + 1;
    $box.innerHTML +=
      '<tr id="js-remove' + j + '" >' +
      '<td class="td-product-stt" id="js-stt">' + j + '</td>' +
      '<td class="td-image"><img class="td-cart-img" src="./images/' + getData[i].object.image + '"></td>' +
      '<td class="td-product-name">' + getData[i].object.name + '</td>' +
      '<td class="td-product-quantity">' + getData[i].quantity + '</td>' +
      '<td class="td-product-price">$' + getData[i].object.price + '</td>' +
      '<td class="td-product-sub-total">$' + (getData[i].object.price * getData[i].quantity) + '</td>' +
      //'<td class="td-product-delete" data-id="1" onclick="deleteItem(' + getData[i].object.id + ')"><i class="fa fa-times"></i></td>' +
      '<td class="td-product-delete"><button type="button" class="btn-delete js-bt-delete" data-id="' + getData[i].object.id + '">X</button></td>' +
      '</tr>';
  }
  $total.innerHTML = '$' + sumTotal();
}
showCart();

function sumTotal() {
  var sum = 0;
  for (var i = 0; i < getData.length; i++) {
    sum += getData[i].object.price * getData[i].quantity;
  }
  return sum;
}

function deleteItem() {
  var dele = document.getElementsByClassName('js-bt-delete');
  for (var i = 0; i < dele.length; i++) {
    dele[i].addEventListener('click', function (event) {
      var btnValue = event.target.dataset.id;
      for (var d = 0; d < getData.length; d++) {
        if (getData[d].object.id === parseInt(btnValue)) {
          getData.splice(d, 1);
        }
      }
      localStorage.setItem('cart', JSON.stringify(getData));
      showCart();
      count_cart();
      deleteItem();
    });
  }
}
deleteItem();
