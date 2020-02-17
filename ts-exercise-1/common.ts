interface product {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
}
var arrProduct: Array<product> = [
  {
    id: 1,
    image: 'image1.png',
    name: 'Sheer Beauty Essence EDP 100ML oz (w)',
    description: 'Top notes: nashi pear blossom and white peach. Middle notes: lilac, magnolia, peony and Turkish rose. Base notes: musk, vanilla and cedar Beauty.',
    price: 20
  },
  {
    id: 2,
    image: 'image2.png',
    name: 'Miss Dior / Christian Dior EDP Spray 5.0 oz (w)',
    description: 'Launch year: 2012. Top notes: Mandarin. Heart notes: Bulgarian rose, Turkish rose. Base notes: Patchouli, Amber, Vanilla. Design house: Christian Dior.',
    price: 158
  },
  {
    id: 3,
    image: 'image3.png',
    name: 'ACreed Viking / Creed EDP Spray 3.3 oz (100 ml)',
    description: 'Fragrance notes are Calabrian bergamot, Sicilian lemon, La Reunion baie rose (pink peppercorn)Peppercorn, Bulgarian rose, peppermint, Indian ACreed.',
    price: 67
  },
  {
    id: 4,
    image: 'image4.png',
    name: 'Bright Crystal/versace EDT Spray 1.0 oz (w)',
    description: 'Launch year: 2006. Top notes: Pomegranate, Yuzu, Iced accord. Heart notes: Magnolia, Lotus, Peony. Base notes: Vegetal amber, Musks, Mahogany.',
    price: 37
  },
  {
    id: 5,
    image: 'image5.png',
    name: 'Chanel Coco Mademoiselle Intense EDP 100ML',
    description: 'COCO expresses the intensity of Gabrielle Chanel personality and her love of all things baroque. A mysterious, provocative Oriental fragrance.',
    price: 35
  },
  {
    id: 6,
    image: 'image6.png',
    name: 'Jadore / Christian Dior EDP Spray 5.0 oz (150 ml) (w)',
    description: 'J’adore eau de parfum is the great women floral fragrance by Dior. A bouquet finely crafted down to the last detail, like a custom-made flower.',
    price: 32
  },
  {
    id: 7,
    image: 'image7.png',
    name: 'Dior Joy / Dior perfect Perfume EDT Spray 1.0 oz (w)',
    description: 'J’adore eau de parfum is the great women floral fragrance by Dior. A bouquet finely crafted down to the last detail, like a custom-made flower.',
    price: 29
  },
  {
    id: 8,
    image: 'image8.png',
    name: 'Mcqueen / Alexander Mcqueen EDP Spray 1.6 oz (50 ml) (w)',
    description: 'Launch year: 2016. Top notes: Black pepper, Clove, Pink pepper. Heart notes: Jasmine, Tuberose, Ylang-ylang. Base notes: Pink pepper, Vetiver. ',
    price: 39
  }
];
var $number_cart: HTMLElement = document.getElementById('js-count');

interface cart {
  object: product;
  quantity: number;
}

function getCart(): Array<cart> {
  var listCart: Array<cart> = JSON.parse(localStorage.getItem('cart'));
  if (listCart) {
    return listCart;
  } else
    return [];
}
var listCart: Array<cart> = getCart();

function count_cart(): void {
  $number_cart.innerHTML = listCart.length.toString();
}
count_cart();
