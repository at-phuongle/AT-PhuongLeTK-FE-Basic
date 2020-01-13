var add_cart = [
  {
  }
];

if (!localStorage.getItem('add-cart')) {
  localStorage.setItem('add-cart', JSON.stringify(add_cart));
} else {
  add_cart = JSON.parse(localStorage.getItem('add-cart'));
  document.getElementById('count').innerHTML = add_cart.length;
}
var box = document.getElementById('content-detail');
for (var i = 0; i < getObject.length; i++) {
  box.innerHTML +=
    "<div class='page-main__product-item'>" +
    "<img class='page-main__product-img' src='./images/" + getObject[i].image + "'>" +
    "<div class='page-main__product-detail'>" +
    "<h3 class='page-main__product-name'>" + getObject[i].name + "</h3>" +
    "<p class='page-main__product-desc'>" + getObject[i].description + "</p>" +
    "<p class='page-main__product-price'>Price: <span class='price'>" + getObject[i].price + "</span></p>" +
    "</div>" +
    "<button class='insert-cart-btn' id='" + getObject[i].id + "' onclick='functionAdd(" + getObject[i].id + ")'>Add cart</button>"
  "</div>";
}
function functionAdd(id) {
  document.getElementById(id).disabled = 'true';
  document.getElementById(id).style.color = "#464545";
  var index = id - 1;
  add_cart.push(product[index]);
  localStorage.setItem('add-cart', JSON.stringify(add_cart));
  var getIndex = JSON.parse(localStorage.getItem('add-cart'));
  document.getElementById('js-count').innerHTML = getIndex.length;
}
for (var i = 0; i < add_cart.length; i++) {
  document.getElementById(add_cart[i].id).disabled = 'true';
  document.getElementById(add_cart[i].id).style.color = "#464545";
}
