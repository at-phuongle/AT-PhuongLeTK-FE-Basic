var cart = [];
if (!localStorage.getItem('CART')) {
  localStorage.setItem('CART', JSON.stringify(cart));
} else {
  cart = JSON.parse(localStorage.getItem('CART'));
}
var $box = document.getElementById('js-product-list');
var $temLi, $temDiv2, $temImg, $temDes, $temName, $temPrice, $temContent, $temButton;
for (var i = 0; i < product.length; i++) {
  $temLi = document.createElement('li');
  $temLi.setAttribute('class', 'product-item');

  $temImg = document.createElement('img');
  $temImg.setAttribute('class', 'product-img');
  $temImg.setAttribute('src', './images/' + product[i].image);
  $temLi.appendChild($temImg);

  $temDiv2 = document.createElement('div');
  $temDiv2.setAttribute('class', 'product-detail');
  $temLi.appendChild($temDiv2);

  $temName = document.createElement('h3');
  $temName.setAttribute('class', 'product-name');
  $temContent = document.createTextNode(product[i].name);
  $temName.appendChild($temContent);
  $temDiv2.appendChild($temName);

  $temDes = document.createElement('p');
  $temDes.setAttribute('class', 'product-desc');
  $temContent = document.createTextNode(product[i].description);
  $temDes.appendChild($temContent);
  $temDiv2.appendChild($temDes);

  $temPrice = document.createElement('p');
  $temPrice.setAttribute('class', 'product-price');
  $temContent = document.createTextNode('Price: $' + product[i].price);
  $temPrice.appendChild($temContent);
  $temDiv2.appendChild($temPrice);

  $temButton = document.createElement('button');
  $temButton.setAttribute('class', 'btn-add');
  $temButton.setAttribute('data-id', product[i].id);
  // $temButton.onclick = function () { functionAdd(this.id) }
  $temButton.addEventListener('click', functionAdd, false);
  $temContent = document.createTextNode('Add to cart');
  $temButton.appendChild($temContent);
  $temDiv2.appendChild($temButton);

  $box.appendChild($temLi);
}
function functionAdd() {
  var btnValue = event.target.dataset.id;
  var quantity = 1;
  var index = -1;
  for (var j = 0; j < product.length; j++) {
    if (product[j].id === parseInt(btnValue)) {
      for (var k = 0; k < cart.length; k++) {
        if (cart[k].object.id === product[j].id) {
          index = k;
        }
      }
      if (index === -1) {
        var object = product[j];
        cart.push({ object, quantity });
      } else {
        cart[index].quantity += quantity;
      }
      localStorage.setItem('CART', JSON.stringify(cart));
    }
  }
  count_cart();
}
functionAdd();
