const myProfile = {
  name: "Kevin Durant",
  profile_image: require("../assets/images/profile.png"),
  address: "29 Myrtle Street, Chippendale, NSW",
};

const categories = [
  {
    id: 1,
    name: "Fast Food",
    icon: require("../assets/icons/burger.png"),
  },
  {
    id: 2,
    name: "Fruit Item",
    icon: require("../assets/icons/cherry.png"),
  },
  {
    id: 3,
    name: "Rice Item",
    icon: require("../assets/icons/rice.png"),
  },
];

const sizes = [
  {
    id: 1,
    label: `12"`,
  },
  {
    id: 2,
    label: `14"`,
  },
  {
    id: 3,
    label: `16"`,
  },
  {
    id: 4,
    label: `18"`,
  },
];
const ratings = [
  {
    id: 1,
    label: "1 Star",
  },
  {
    id: 2,
    label: "2 Star",
  },
  {
    id: 3,
    label: "3 Star",
  },
  {
    id: 4,
    label: "4 Star",
  },
  {
    id: 4,
    label: "5 Star",
  },
];

const resturants = [
  {
    id: 1,
    name: "Pizza Deli",
    distance: "1km",
    icon: require("../assets/dummyData/deli.png"),
  },
  {
    id: 2,
    name: "Bubble Tea Panda",
    distance: "1km",
    icon: require("../assets/dummyData/bubble_tea.png"),
  },
  {
    id: 3,
    name: "Chinese Kitchen",
    distance: "2km",
    icon: require("../assets/dummyData/chinese.png"),
  },
  {
    id: 4,
    name: "Italian",
    distance: "1km",
    icon: require("../assets/dummyData/italian.png"),
  },
  {
    id: 5,
    name: "Fast Food Kitchen",
    distance: "1km",
    icon: require("../assets/dummyData/FFR.png"),
  },
  {
    id: 6,
    name: "Pupkin Cafe",
    distance: "1km",
    icon: require("../assets/dummyData/pumpkin.png"),
  },
  {
    id: 7,
    name: "Japense",
    distance: "1km",
    icon: require("../assets/dummyData/ramen.png"),
  },
  {
    id: 8,
    name: "Macdonalds",
    distance: "1km",
    icon: require("../assets/dummyData/maccas.png"),
  },
];

const hamburger = {
  id: 1,
  name: "Hamburger",
  description: "Chicken patty hamburger",
  categories: [1, 2],
  price: 15,
  calories: 78,
  isFavourite: false,
  image: require("../assets/dummyData/hamburger.png"),
  resturants: resturants[0],
};

const hotTacos = {
  id: 2,
  name: "Hot Tacos",
  description: "Mexican tortilla & tacos",
  categories: [1, 3],
  price: 10,
  calories: 78,
  isFavourite: false,
  image: require("../assets/dummyData/hot_tacos.png"),
  resturants: resturants[1],
};

const vegBiryani = {
  id: 3,
  name: "Veg Biryani",
  description:
    "A popular spice and vegetables mixed favoured rice dish which is typically prepared by layering the biryani gravy and basmati rice in flat bottom vessel.",
  categories: [1, 2, 3],
  price: 10.99,
  calories: 78,
  isFavourite: false,
  image: require("../assets/dummyData/veg_biryani.png"),
  resturants: resturants[3],
};

const wrapSandwich = {
  id: 4,
  name: "Wrap Sandwich",
  description: "Grilled vegetables sandwich",
  categories: [1, 2],
  price: 10.99,
  calories: 78,
  isFavourite: false,
  image: require("../assets/dummyData/wrap_sandwich.png"),
  resturants: resturants[4],
};

const indian = {
  id: 5,
  name: "Butter Chicken",
  description: "Creamy Butter Chicken",
  categories: [1, 3],
  price: 15.99,
  calories: 300,
  isFavourite: false,
  image: require("../assets/dummyData/butter_chicken.png"),
  resturants: resturants[5],
};

const ramen = {
  id: 6,
  name: "RaRa Ramen",
  description:
    "House made pork Tonkotsu broth with shio tare. Topped with coal grilled free range chashu (braised pork belly), seasoned bamboo, free range ajitsuke tamago (seasoned egg), shallots, shredded black fungus with the addition of mayu (black garlic oil). Burnt garlic flavour with a unique sweet and slightly smokey profile. Served with our house made thin Hakata noodles.",
  categories: [1, 2],
  price: 12.99,
  calories: 300,
  isFavourite: false,
  image: require("../assets/dummyData/rramen.png"),
  resturants: resturants[6],
};

const cafeBonito = {
  id: 7,
  name: "Eggs Benidict",
  description: "Amazing egg bendicts done right",
  categories: [1, 2, 3],
  price: 12.99,
  calories: 300,
  isFavourite: false,
  image: require("../assets/dummyData/cafe.png"),
  resturants: resturants[6],
};

const rara2 = {
  id: 8,
  name: "Chicken Karaage Mazesoba",
  description:
    "Thick chewy noodles tossed with shoyu tare and truffle oil. Topped with crunchy juicy chicken karaage, seaweed, bean sprouts, house made truffle mayonnaise, onsen egg, chopped red onion, corn and parmesan cheese.",
  categories: [1, 3],
  price: 14.99,
  calories: 1111,
  isFavourite: false,
  image: require("../assets/dummyData/rramen2.png"),
  resturants: resturants[6],
};

const maccas = {
  id: 9,
  name: "Maccas",
  description: "Nuggets for life get them right now",
  categories: [1, 3],
  price: 14.99,
  calories: 1111,
  isFavourite: false,
  image: require("../assets/dummyData/maccas.png"),
  resturants: resturants[7],
};

const products = [
  hamburger,
  hotTacos,
  vegBiryani,
  wrapSandwich,
  indian,
  rara2,
  maccas,
];

const menu = [
  {
    id: 1,
    name: "Featured",
    list: [hamburger, hotTacos, vegBiryani, indian, cafeBonito, maccas],
  },
  {
    id: 2,
    name: "Nearby you",
    list: [hamburger, vegBiryani, wrapSandwich, indian, cafeBonito, rara2],
  },
  {
    id: 3,
    name: "Popular",
    list: [hamburger, hotTacos, wrapSandwich, indian],
  },
  {
    id: 4,
    name: "Newest",
    list: [hamburger, hotTacos, vegBiryani, cafeBonito],
  },
  {
    id: 5,
    name: "Trending",
    list: [hamburger, vegBiryani, wrapSandwich, indian, maccas, ramen],
  },
  {
    id: 6,
    name: "Recommended",
    list: [hamburger, hotTacos, wrapSandwich, indian],
  },
];

const myCards = [
  {
    id: 1,
    name: "Master Card",
    icon: require("../assets/icons/mastercard.png"),
    card_no: "1234",
  },
  {
    id: 2,
    name: "Google Pay",
    icon: require("../assets/icons/google.png"),
    card_no: "1234",
  },
];

const allCards = [
  {
    id: 1,
    name: "Apple Pay",
    icon: require("../assets/icons/apple.png"),
  },
  {
    id: 2,
    name: "Visa",
    icon: require("../assets/icons/visa.png"),
  },
  {
    id: 3,
    name: "PayPal",
    icon: require("../assets/icons/paypal.png"),
  },
  {
    id: 4,
    name: "Google Pay",
    icon: require("../assets/icons/google.png"),
  },
  {
    id: 5,
    name: "Master Card",
    icon: require("../assets/icons/mastercard.png"),
  },
];

const fromLocs = [
  {
    latitude: 1.5347282806345879,
    longitude: 110.35632207358996,
  },
  {
    latitude: 1.556306570595712,
    longitude: 110.35504616746915,
  },
  {
    latitude: 1.5238753474714375,
    longitude: 110.34261833833622,
  },
  {
    latitude: 1.5578068150528928,
    longitude: 110.35482523764315,
  },
  {
    latitude: 1.558050496260768,
    longitude: 110.34743759630511,
  },
  {
    latitude: 1.5573478487252896,
    longitude: 110.35568783282145,
  },
];

const coupons = [
  {
    id: 1,
    logo: require("../assets/dummyData/chinese.png"),
    name: "Chinese",
    discountRate: "15% Off",
    validity: "22 Sep 2029",
  },
  {
    id: 2,
    logo: require("../assets/dummyData/chinese.png"),
    name: "Chinese",
    discountRate: "15% Off",
    validity: "22 Sep 2029",
  },
  {
    id: 3,
    logo: require("../assets/dummyData/chinese.png"),
    name: "Chinese",
    discountRate: "15% Off",
    validity: "22 Sep 2029",
  },
  {
    id: 4,
    logo: require("../assets/dummyData/chinese.png"),
    name: "Chinese",
    discountRate: "15% Off",
    validity: "22 Sep 2029",
  },
  {
    id: 5,
    logo: require("../assets/dummyData/chinese.png"),
    name: "Chinese",
    discountRate: "15% Off",
    validity: "22 Sep 2029",
  },
  {
    id: 6,
    logo: require("../assets/dummyData/chinese.png"),
    name: "Chinese",
    discountRate: "15% Off",
    validity: "22 Sep 2029",
  },
];
export default {
  myProfile,
  categories,
  menu,
  sizes,
  ratings,
  myCards,
  allCards,
  fromLocs,
  products,
  resturants,
  ramen,
  coupons,
};
