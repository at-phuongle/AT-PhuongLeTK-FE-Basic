function showProduct() {
    var $box = document.getElementById('js-product-list');
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
                '</li>';
    }
}
showProduct();
function addToCart() {
    var $add = document.getElementsByClassName('btn-add');
    var quantity = 1;
    var object;
    for (var i = 0; i < $add.length; i++) {
        $add[i].addEventListener('click', function (event) {
            var btnValue = event.target.dataset.id;
            for (var j = 0; j < arrProduct.length; j++) {
                var index = -1;
                if (arrProduct[j].id === parseInt(btnValue)) {
                    for (var k = 0; k < listCart.length; k++) {
                        if (arrProduct[j].id === listCart[k].object.id) {
                            index = k;
                        }
                    }
                    if (index === -1) {
                        object = arrProduct[j];
                        listCart.push({ object: object, quantity: quantity });
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
