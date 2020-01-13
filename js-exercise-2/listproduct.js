// localStorage.clear();
var product = [
  {
    id: 1,
    image: "anh1.jpeg",
    name: "Sheer Beauty Essence EDP 100ML",
    description: "Top notes: nashi pear blossom and white peach. Middle notes: lilac, magnolia, peony and Turkish rose. Base notes: musk, vanilla and cedar Beauty.",
    price: "20.99"
  },
  {
    id: 2,
    image: "image2.jpg",
    name: "Miss Dior / Christian Dior EDP Spray 5.0 oz (w)",
    description: "Launch year: 2012. Top notes: Mandarin. Heart notes: Bulgarian rose, Turkish rose. Base notes: Patchouli, Amber, Vanilla. Design house: Christian Dior.",
    price: "158.99"
  },
  {
    id: 3,
    image: "anh3.jpg",
    name: "ACreed Viking / Creed EDP Spray 3.3 oz (100 ml)",
    description: "Fragrance notes are Calabrian bergamot, Sicilian lemon, La Reunion baie rose (pink peppercorn)Peppercorn, Bulgarian rose, peppermint, Indian ACreed.",
    price: "67.99"
  },
  {
    id: 4,
    image: "anh4.jpg",
    name: "Bright Crystal/versace EDT Spray 1.0 oz (w)",
    description: "Launch year: 2006. Top notes: Pomegranate, Yuzu, Iced accord. Heart notes: Magnolia, Lotus, Peony. Base notes: Vegetal amber, Musks, Mahogany.",
    price: "37.99"
  },
  {
    id: 5,
    image: "anh5.jpg",
    name: "Chanel Coco Mademoiselle Intense EDP 100ML",
    description: "COCO expresses the intensity of Gabrielle Chanel's personality and her love of all things baroque. A mysterious, provocative Oriental fragrance.",
    price: "35.99"
  },
  {
    id: 6,
    image: "anh6.jpg",
    name: "Jadore / Christian Dior EDP Spray 5.0 oz (150 ml) (w)",
    description: "J’adore eau de parfum is the great women's floral fragrance by Dior. A bouquet finely crafted down to the last detail, like a custom-made flower.",
    price: "32.99"
  },
  {
    id: 7,
    image: "anh7.jpg",
    name: "Dior Joy / Dior perfect Perfume EDT Spray 1.0 oz (w)",
    description: "J’adore eau de parfum is the great women's floral fragrance by Dior. A bouquet finely crafted down to the last detail, like a custom-made flower.",
    price: "29.99"
  },
  {
    id: 8,
    image: "anh8.jpg",
    name: "Mcqueen / Alexander Mcqueen EDP Spray 1.6 oz (50 ml) (w)",
    description: "Launch year: 2016. Top notes: Black pepper, Clove, Pink pepper. Heart notes: Jasmine, Tuberose, Ylang-ylang. Base notes: Pink pepper, Vetiver. ",
    price: "39.99"
  }
]
localStorage.setItem('product', JSON.stringify(product));
var getObject = JSON.parse(localStorage.getItem('product'));
var add_cart = [
  {
    // id: 2,
    // image: "anh2.jpg",
    // name: "Miss Dior / Christian Dior EDP Spray 5.0 oz (w)",
    // description: "Launch year: 2012. Top notes: Mandarin. Heart notes: Bulgarian rose, Turkish rose. Base notes: Patchouli, Amber, Vanilla. Design house: Christian Dior.",
    // price: "158.99"
  }
];
if (localStorage.getItem('add-cart') === null) {
  localStorage.setItem('add-cart', JSON.stringify(add_cart));
} else {
  add_cart = JSON.parse(localStorage.getItem('add-cart'));
  document.getElementById("count").innerHTML = add_cart.length;
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
  document.getElementById("count").innerHTML = getIndex.length;
}
for (var i = 0; i < add_cart.length; i++) {
  document.getElementById(add_cart[i].id).disabled = 'true';
  document.getElementById(add_cart[i].id).style.color = "#464545";
}
