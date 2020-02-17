var $box = document.getElementById('js-cart-list');
var $total = document.getElementById('js-total');
var j;
function showCart() {
    $box.innerHTML = '';
    var lengthListCart = listCart.length;
    for (var i = 0; i < lengthListCart; i++) {
        j = i + 1;
        $box.innerHTML +=
            '<tr id="js-remove' + j + '" >' +
                '<td class="td-product-stt" id="js-stt">' + j + '</td>' +
                '<td class="td-image"><img class="td-cart-img" src="./images/' + listCart[i].object.image + '"></td>' +
                '<td class="td-product-name">' + listCart[i].object.name + '</td>' +
                '<td class="td-product-quantity">' + listCart[i].quantity + '</td>' +
                '<td class"td-product-price">$' + listCart[i].object.price + '</td>' +
                '<td class="td-product-sub-total">$' + (listCart[i].object.price * listCart[i].quantity) + '</td>' +
                '<td class="td-product-delete"><button type="button" class="js-bt-delete" data-id="' + listCart[i].object.id + '">X</button></td>' +
                '</tr>';
    }
    $total.innerHTML = '$' + sumTotal();
    deleteItem();
    count_cart();
}
showCart();
function sumTotal() {
    var sum = 0;
    for (var i = 0; i < listCart.length; i++) {
        sum += listCart[i].object.price * listCart[i].quantity;
    }
    return sum;
}
function deleteItem() {
    var dele = document.getElementsByClassName('js-bt-delete');
    for (var i = 0; i < dele.length; i++) {
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
