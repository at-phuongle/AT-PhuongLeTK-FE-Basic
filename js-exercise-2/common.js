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
var number_cart = document.getElementById('js-count');
function count_cart() {

}
