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
      '<td class="td-image"><img class="td-cart-img" src="./images/' + getData[i].object.image + '"></td>' +
      '<td class="td-product-name">' + getData[i].object.name + '</td>' +
      '<td class="td-product-quantity">' + getData[i].quantity + '</td>' +
      '<td class"td-product-price">$' + getData[i].object.price + '</td>' +
      '<td class="td-product-sub-total">$' + (getData[i].object.price * getData[i].quantity) + '</td>' +
      '<td class="td-product-delete" data-id="1" onclick="deleteItem(' + getData[i].object.id + ')"><i class="fa fa-times"></i></td>' +
      //'<td class=""><button type="button" class="js-bt-delete" data-id="' + getData[i].object.id + '">X</button></td>' +
      '</tr>';
  }
  $trTotal.innerHTML +=
    '<tr class="tr-total" id="js-total">' +
    '<td></td>' +
    '<td></td>' +
    '<td></td>' +
    '<td></td>' +
    '<td class="td-total"> Total </td>' +
    '<td>$' + sumTotal() + '</td>' +
    '<td></td>' +
    '</tr>';
}
showCart();
function sumTotal() {
  var sum = 0;
  for (var i = 0; i < getData.length; i++) {
    sum += getData[i].object.price * getData[i].quantity;
  }
  return sum;
}

// function deleteItem() {
//   var dele = document.getElementsByClassName("js-bt-delete");
//   for (var i = 0; i < dele.length; i++) {
//     dele[i].addEventListener('click', function (event) {
//       var btnValue = event.target.dataset.id;
//       console.log(btnValue);
//       for (var d = 0; d < getData.length; d++) {
//         if (getData[d].object.id === btnValue) {
//           getData.splice(d, 1);
//         }
//       }
//     })
//     localStorage.setItem('CART', JSON.stringify(getData));
//     $box.innerHTML = [];
//     $trTotal.innerHTML = [];
//     count_cart();
//     showCart();
//   }
// }
// deleteItem();
function deleteItem(id) {
  for (var d = 0; d < getData.length; d++) {
    if (getData[d].object.id === parseInt(id)) {
      // var index = getData.indexOf(getData[d]);
      getData.splice(d, 1);
      // console.log(getData);
      localStorage.setItem('CART', JSON.stringify(getData));
      $box.innerHTML = [];
      $trTotal.innerHTML = [];
      count_cart();
      showCart();
    }
  }
}
