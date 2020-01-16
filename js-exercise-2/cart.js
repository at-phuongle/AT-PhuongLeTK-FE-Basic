var getData = JSON.parse(localStorage.getItem('CART'));
var $box = document.getElementById('js-cart-list');
var $trTotal = document.getElementById('js-cart-total');
var j;
function showCart() {
  for (var i = 0; i < getData.length; i++) {
    j = i + 1;
    $box.innerHTML +=
      '<tr id="js-remove' + j + '" >' +
      '<td class="td-product-stt" id="js-stt">' + j + '</td>' +
      '<td class="td-product-name">' + getData[i].object.name + '</td>' +
      '<td class="td-product-quantity">' + getData[i].quantity + '</td>' +
      '<td class"td-product-price">$' + getData[i].object.price + '</td>' +
      '<td class="td-product-sub-total">$' + (getData[i].object.price * getData[i].quantity) + '</td>' +
      '<td class="td-product-delete" onclick="deleteItem(' + j + ')"><i class="fa fa-times"></i></td>' +
      '</tr>';
  }
}
showCart();
function sumTotal() {
  var sum = 0;
  for (var i = 0; i < getData.length; i++) {
    sum += getData[i].object.price * getData[i].quantity;
  }
  return sum;
}
function showTotal() {
  $trTotal.innerHTML +=
    '<tr class="tr-total" id="js-total">' +
    '<td></td>' +
    '<td></td>' +
    '<td></td>' +
    '<td class="td-total"> Total </td>' +
    '<td>$' + sumTotal() + '</td>' +
    '<td></td>' +
    '</tr>';
}
showTotal();
function deleteItem(id) {
  document.getElementById("js-remove" + id).remove();
  getData.splice(id - 1, 1);
  localStorage.setItem('CART', JSON.stringify(getData));
  count_cart();
  document.getElementById("js-total").remove();
  showTotal();
}
