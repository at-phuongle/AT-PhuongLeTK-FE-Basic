var $box = document.getElementById('js-product-list');
var $temLi, $temDiv1, $temDiv2, $temImg, $temDes, $temName, $temPrice, $temContent, $temButton;
var productLength = product.length;

function showProduct() {
  for (var i = 0; i < productLength; i++) {
    $temLi = document.createElement('li');
    $temLi.setAttribute('class', 'col-3 product-item');

    $temDiv1 = document.createElement('div');
    $temDiv1.setAttribute('class', 'product-wrap');
    $temLi.appendChild($temDiv1);

    $temImg = document.createElement('img');
    $temImg.setAttribute('class', 'product-img');
    $temImg.setAttribute('src', './images/' + product[i].image);
    $temDiv1.appendChild($temImg);

    $temDiv2 = document.createElement('div');
    $temDiv2.setAttribute('class', 'product-card');
    $temDiv1.appendChild($temDiv2);

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
}
showProduct();

function functionAdd() {
  var btnValue = event.target.dataset.id;
  var quantity = 1;
  var index = -1;
  var cartLength = listCart.length;
  for (var j = 0; j < productLength; j++) {
    if (product[j].id === parseInt(btnValue)) {
      for (var k = 0; k < cartLength; k++) {
        if (listCart[k].object.id === product[j].id) {
          index = k;
        }
      }
      if (index === -1) {
        var object = product[j];
        listCart.push({ object, quantity });
      } else {
        listCart[index].quantity += quantity;
      }
      localStorage.setItem('cart', JSON.stringify(listCart));
    }
  }
  countCart();
}
functionAdd();
