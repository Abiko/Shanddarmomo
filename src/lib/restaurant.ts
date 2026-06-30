export const restaurant = {
  name: "Shanddar MoMo",
  tagline: "Authentic Nepali & Indo-Chinese food in Tbilisi",
  description:
    "Authentic Nepali & Indo-Chinese food made with passion in Tbilisi",
  address: "41 Shalva Nutsubidze St, Tbilisi 0177",
  phoneDisplay: "574 24 90 27",
  phoneHref: "+995574249027",
  whatsappHref: "https://wa.me/995574249027",
  emailDisplay: "Email coming soon",
  logo: "/images/brand/shanddar-momo-logo.png",
  mapEmbed:
    "https://www.google.com/maps?q=41%20Shalva%20Nutsubidze%20St%2C%20Tbilisi%200177&output=embed",
  shortDescription:
    "Small family-run restaurant known for authentic momos, noodles and homemade taste",
};

export const reviews = [
  {
    name: "N. Gurung",
    text: "Best authentic momos in Tbilisi",
    detail: "Warm, handmade taste and the kind of food you come back for.",
  },
  {
    name: "M. Sharma",
    text: "Amazing food and great service",
    detail: "Friendly people, generous portions and everything arrived fresh.",
  },
  {
    name: "L. K.",
    text: "Hidden gem for Indo-Chinese food",
    detail: "Simple place, big flavor, especially for noodles and momos.",
  },
  {
    name: "A. Singh",
    text: "Fresh, delicious, highly recommended",
    detail: "Clean, comforting and full of homemade flavor.",
  },
];

export type MenuItem = {
  name: string;
  price: number;
  image?: string;
  description?: string;
  halal?: boolean;
  vegetarian?: boolean;
  spicy?: boolean;
  tag?: string;
};

export type MenuCategory = {
  category: string;
  items: MenuItem[];
};

export const menu = [
  {
    name: "Chicken Momo",
    price: 17,
    category: "Momos",
    description: "Steamed dumplings with a savory chicken filling.",
    tag: "Popular",
  },
  {
    name: "Veg Momo",
    price: 12,
    category: "Momos",
    description: "Soft steamed dumplings filled with seasoned vegetables.",
    tag: "Vegetarian",
  },
  {
    name: "Chicken Chowmein",
    price: 18,
    category: "Noodles",
    description: "Stir-fried noodles with chicken and vegetables.",
    tag: "Indo-Chinese",
  },
  {
    name: "Fried Rice",
    price: 15,
    category: "Rice",
    description: "Comforting fried rice cooked hot with house seasoning.",
    tag: "Fast favorite",
  },
];

export const branches = {
  isani: {
    name: "Isani Menu",
    label: "Isani",
    note: "Fresh momos, noodles and warm homemade plates.",
  },
  saburtalo: {
    name: "Saburtalo Menu",
    label: "Saburtalo",
    note: "Full Saburtalo branch menu, prepared for quick QR access.",
  },
} as const;

export type BranchSlug = keyof typeof branches;

export const locationBranches = [
  {
    id: "saburtalo",
    name: "Saburtalo Branch",
    shortName: "Saburtalo",
    address: "41 Shalva Nutsubidze St, Tbilisi 0177",
    mapEmbed:
      "https://www.google.com/maps?q=41%20Shalva%20Nutsubidze%20St%2C%20Tbilisi%200177&output=embed",
    phoneDisplay: restaurant.phoneDisplay,
    phoneHref: restaurant.phoneHref,
    openingHours: [
      "Monday: 12-11:55 pm",
      "Tuesday: 12-11:30 pm",
      "Wednesday: Open 24 hours",
      "Thursday: 11 am-11:30 pm",
      "Friday: 12-11:55 pm",
      "Saturday: 12-11:55 pm",
      "Sunday: 12-11:55 pm",
    ],
    serviceInfo: "Dine in, pickup and local delivery options available.",
  },
  {
    id: "isani",
    name: "Isani Branch",
    shortName: "Isani",
    address: "15 Ekimi Ln, Tbilisi",
    mapEmbed: "https://www.google.com/maps?q=15%20Ekimi%20Ln%2C%20Tbilisi&output=embed",
    phoneDisplay: restaurant.phoneDisplay,
    phoneHref: restaurant.phoneHref,
    openingHours: [
      "Monday: 11:30 am-12 am",
      "Tuesday: 11:30 am-12 am",
      "Wednesday: 11:30 am-12 am",
      "Thursday: 11:30 am-12 am",
      "Friday: 11:30 am-12 am",
      "Saturday: 11 am-12 am",
      "Sunday: 11:30 am-12 am",
    ],
    serviceInfo: "Dine in, pickup and local delivery options available.",
  },
] as const;

export type LocationBranch = (typeof locationBranches)[number];

export const findUsPlatforms = [
  {
    name: "Instagram",
    label: "Photos, updates and daily plates",
    logo: "/logos/instagram.svg",
    href: "https://www.instagram.com/shanddarmomo/",
  },
  {
    name: "Facebook",
    label: "Branch news and community updates",
    logo: "/logos/facebook.svg",
    href: "https://www.facebook.com/p/Shanddar-Momo-61577051994749/",
  },
  {
    name: "Wolt",
    label: "Order Shanddar MoMo online",
    logo: "/logos/wolt.png",
    href: "https://wolt.com/en/geo/tbilisi/restaurant/shanddar-momo",
  },
  {
    name: "Bolt Food",
    label: "Delivery through Bolt Food",
    logo: "/logos/bolt-food.svg",
    href: "https://food.bolt.eu/en/15-tbilisi/p/172070-shanddar-momo/",
  },
] as const;

export const branchMenus: Record<BranchSlug, MenuCategory[]> = {
  isani: [
    {
      category: "Chicken Momo Special",
      items: [
        {
          name: "Chicken Steam MoMo",
          price: 16,
          image: "/images/menu/saburtalo/wolt/chicken-steam-momo.jpg",
          description: "Soft steamed chicken dumplings with a juicy, warmly spiced filling.",
          halal: true,
        },
        {
          name: "Chicken Fry MoMo",
          price: 16,
          image: "/images/menu/saburtalo/wolt/chicken-fry-momo.jpg",
          description: "Chicken momos fried golden for a crisp shell and tender center.",
          halal: true,
        },
        {
          name: "Chicken Jhol MoMo",
          price: 18,
          image: "/images/menu/saburtalo/wolt/chicken-jhol-momo.jpg",
          description: "Steamed chicken momos served in a fragrant tomato-sesame jhol.",
          halal: true,
        },
        {
          name: "Chicken Chilli MoMo",
          price: 19,
          image: "/images/menu/saburtalo/wolt/chicken-chilli-momo.jpg",
          description: "Fried chicken momos tossed with chilli sauce, peppers, and herbs.",
          halal: true,
        },
        {
          name: "Chicken Fried Tandoori MoMo",
          price: 19,
          image: "/images/menu/saburtalo/wolt/chicken-fried-tandoori-momo.jpg",
          description: "Crispy chicken momos finished with smoky tandoori spices and sauce.",
          halal: true,
        },
        {
          name: "Chicken Fried Achari MoMo",
          price: 19,
          image: "/images/menu/saburtalo/wolt/chicken-fried-achari-momo.jpg",
          description: "Fried chicken momos coated in tangy achari spices for a pickle-style kick.",
          halal: true,
        },
        {
          name: "Chicken Fried Honey Chilli MoMo",
          price: 19,
          image: "/images/menu/saburtalo/wolt/chicken-fried-honey-chilli-momo.jpg",
          description: "Fried chicken momos glazed with sweet honey chilli garlic sauce.",
          halal: true,
        },
      ],
    },
    {
      category: "Veg Momo Special",
      items: [
        {
          name: "Veg Steam MoMo",
          price: 15,
          image: "/images/menu/saburtalo/wolt/veg-steam-momo.jpg",
          description: "Steamed dumplings filled with seasoned vegetables and fresh herbs.",
        },
        {
          name: "Veg Fry MoMo",
          price: 16,
          image: "/images/menu/saburtalo/wolt/veg-fry-momo.jpg",
          description: "Golden fried vegetable momos with a light crisp bite.",
        },
        {
          name: "Veg Jhol MoMo",
          price: 18,
          image: "/images/menu/saburtalo/wolt/veg-jhol-momo.jpg",
          description: "Vegetable momos served in a warm, gently spicy jhol sauce.",
        },
        {
          name: "Veg Chilli MoMo",
          price: 18,
          image: "/images/menu/saburtalo/wolt/veg-chilli-momo.jpg",
          description: "Fried veg momos tossed with chilli sauce, onions, and peppers.",
        },
        {
          name: "Veg Fried Tandoori MoMo",
          price: 18,
          image: "/images/menu/saburtalo/wolt/veg-fried-tandoori-momo.jpg",
          description: "Crisp veg momos dressed with smoky tandoori spice and chutney.",
        },
        {
          name: "Veg Fried Achari MoMo",
          price: 18,
          image: "/images/menu/saburtalo/wolt/veg-fried-achari-momo.jpg",
          description: "Fried vegetable momos with tangy achari masala and a bright finish.",
        },
        {
          name: "Veg Fried Honey Chilli MoMo",
          price: 18,
          image: "/images/menu/saburtalo/wolt/veg-fry-momo.jpg",
          description: "Fried veg momos glazed with sweet chilli warmth and garlic.",
        },
      ],
    },
    {
      category: "Paneer Momo Special",
      items: [
        {
          name: "Paneer Steam MoMo",
          price: 18,
          image: "/images/menu/saburtalo/wolt/paneer-steam-momo.jpg",
          description: "Steamed momos filled with creamy spiced paneer.",
        },
        {
          name: "Paneer Fry MoMo",
          price: 19,
          image: "/images/menu/saburtalo/wolt/paneer-fry-momo.jpg",
          description: "Golden fried paneer momos with a rich cottage cheese filling.",
        },
        {
          name: "Paneer Jhol MoMo",
          price: 22,
          image: "/images/menu/saburtalo/wolt/paneer-jhol-momo.jpg",
          description: "Paneer momos served in a spicy, comforting jhol gravy.",
        },
        {
          name: "Paneer Chilli MoMo",
          price: 23,
          image: "/images/menu/saburtalo/wolt/paneer-chilli-momo.jpg",
          description: "Paneer momos tossed with chilli sauce for a bold spicy finish.",
        },
      ],
    },
    {
      category: "Special Noodles",
      items: [
        {
          name: "Chicken Hakka Noodles",
          price: 16,
          image: "/images/menu/saburtalo/wolt/chicken-hakka-noodles.jpg",
          description: "Wok-tossed noodles with chicken, vegetables, and classic Hakka flavor.",
        },
        {
          name: "Veg Hakka Noodles",
          price: 14,
          image: "/images/menu/saburtalo/wolt/veg-hakka-noodles.jpg",
          description: "Vegetable noodles stir-fried with clean, savory Hakka seasoning.",
        },
        {
          name: "Burnt Garlic Chicken Noodles",
          price: 16,
          image: "/images/menu/saburtalo/wolt/burnt-garlic-chicken-noodles.jpg",
          description: "Chicken noodles layered with smoky burnt garlic and house spice.",
          halal: true,
        },
        {
          name: "Burnt Garlic Veg Noodles",
          price: 15,
          image: "/images/menu/saburtalo/wolt/burnt-garlic-veg-noodles.jpg",
          description: "Vegetable noodles with fragrant burnt garlic and wok-fired flavor.",
        },
        {
          name: "Schezwan Chicken Noodles",
          price: 17,
          image: "/images/menu/saburtalo/wolt/schezwan-chicken-noodles.jpg",
          description: "Chicken noodles tossed in punchy Schezwan sauce with vegetables.",
          halal: true,
        },
        {
          name: "Schezwan Veg Noodles",
          price: 16,
          image: "/images/menu/saburtalo/wolt/schezwan-veg-noodles.jpg",
          description: "Vegetable noodles coated in spicy Schezwan sauce.",
        },
        {
          name: "Tripal Chicken Noodles",
          price: 19,
          image: "/images/menu/saburtalo/wolt/chicken-hakka-noodles.jpg",
          description: "A hearty chicken noodle plate with layered Indo-Chinese spice.",
        },
        {
          name: "Tripal Veg Noodles",
          price: 17,
          image: "/images/menu/saburtalo/wolt/veg-hakka-noodles.jpg",
          description: "A generous veg noodle plate with rich sauce and wok aroma.",
        },
        {
          name: "Hong Kong Chicken Noodles",
          price: 20,
          image: "/images/menu/saburtalo/wolt/chicken-hakka-noodles.jpg",
          description: "Chicken noodles tossed with a savory Hong Kong-style sauce.",
        },
        {
          name: "Hong Kong Veg Noodles",
          price: 19,
          image: "/images/menu/saburtalo/wolt/veg-hakka-noodles.jpg",
          description: "Vegetable noodles with a glossy Hong Kong-style savory finish.",
        },
        {
          name: "Malaysian Chicken Noodles",
          price: 20,
          image: "/images/menu/saburtalo/wolt/chicken-hakka-noodles.jpg",
          description: "Chicken noodles with aromatic Malaysian-style spices and warmth.",
        },
        {
          name: "Malaysian Veg Noodles",
          price: 19,
          image: "/images/menu/saburtalo/wolt/veg-hakka-noodles.jpg",
          description: "Vegetable noodles seasoned with a fragrant Malaysian-style sauce.",
        },
        {
          name: "Fish / Prawns Noodles",
          price: 28,
          image: "/images/menu/saburtalo/wolt/chicken-hakka-noodles.jpg",
          description: "Seafood noodles with fish or prawns and bold wok-fried seasoning.",
        },
      ],
    },
    {
      category: "Rice Specials",
      items: [
        {
          name: "Chicken Fried Rice with Egg",
          price: 16,
          image: "/images/menu/saburtalo/wolt/chicken-fried-rice-with-egg.jpg",
          description: "Basmati fried rice with chicken, egg, vegetables, and house sauce.",
          halal: true,
        },
        {
          name: "Veg Fried Rice",
          price: 15,
          image: "/images/menu/saburtalo/wolt/veg-fried-rice.jpg",
          description: "Vegetable fried rice with basmati grains and a clean savory finish.",
        },
        {
          name: "Egg Fried Rice",
          price: 14,
          image: "/images/menu/saburtalo/wolt/egg-fried-rice.jpg",
          description: "Basmati rice cooked with egg, butter, and gentle house spices.",
        },
        {
          name: "Burnt Garlic Chicken Fried Rice",
          price: 17,
          image: "/images/menu/saburtalo/wolt/burnt-garlic-chicken-fried-rice.jpg",
          description: "Chicken fried rice lifted with smoky burnt garlic and warm spices.",
          halal: true,
        },
        {
          name: "Burnt Garlic Veg Fried Rice",
          price: 16,
          image: "/images/menu/saburtalo/wolt/burnt-garlic-veg-fried-rice.jpg",
          description: "Vegetable fried rice with buttery basmati and fragrant burnt garlic.",
        },
        {
          name: "Schezwan Chicken Fried Rice with Egg",
          price: 17,
          image: "/images/menu/saburtalo/wolt/schezwan-chicken-fried-rice-with-egg.jpg",
          description: "Spicy Schezwan fried rice with chicken, egg, and spring onion.",
        },
        {
          name: "Schezwan Veg Fried Rice",
          price: 16,
          image: "/images/menu/saburtalo/wolt/veg-fried-rice.jpg",
          description: "Basmati rice tossed with vegetables and lively Schezwan sauce.",
        },
        {
          name: "Tripal Schezwan Chicken Fried Rice",
          price: 19,
          image: "/images/menu/saburtalo/wolt/tripal-schezwan-chicken-fried-rice.jpg",
          description: "Chicken fried rice and noodles mixed with bold Schezwan sauce.",
        },
        {
          name: "Tripal Schezwan Veg Fried Rice",
          price: 18,
          image: "/images/menu/saburtalo/wolt/tripal-schezwan-veg-fried-rice.jpg",
          description: "Vegetable fried rice and noodles mixed with bright Schezwan flavor.",
        },
        {
          name: "Hong Kong Chicken Fried Rice",
          price: 20,
          image: "/images/menu/saburtalo/wolt/chicken-fried-rice-with-egg.jpg",
          description: "Chicken fried rice with a savory Hong Kong-style sauce.",
        },
        {
          name: "Hong Kong Veg Fried Rice",
          price: 19,
          image: "/images/menu/saburtalo/wolt/veg-fried-rice.jpg",
          description: "Vegetable fried rice with a glossy Hong Kong-style finish.",
        },
        {
          name: "Malaysian Chicken Fried Rice",
          price: 20,
          image: "/images/menu/saburtalo/wolt/chicken-fried-rice-with-egg.jpg",
          description: "Chicken fried rice with fragrant Malaysian-style seasoning.",
        },
        {
          name: "Malaysian Veg Fried Rice",
          price: 19,
          image: "/images/menu/saburtalo/wolt/veg-fried-rice.jpg",
          description: "Vegetable fried rice with aromatic Malaysian-style spices.",
        },
        {
          name: "Thai Chicken Red Chilli Fried Rice",
          price: 20,
          image: "/images/menu/saburtalo/wolt/chicken-fried-rice-with-egg.jpg",
          description: "Chicken fried rice with Thai red chilli heat and herbs.",
        },
        {
          name: "Thai Veg Green Chilli Fried Rice",
          price: 19,
          image: "/images/menu/saburtalo/wolt/veg-fried-rice.jpg",
          description: "Vegetable fried rice with bright green chilli spice.",
        },
        {
          name: "Paneer Chilli Pot Rice",
          price: 24,
          image: "/images/menu/saburtalo/wolt/paneer-chilli-gravy.jpg",
          description: "Paneer chilli served over comforting rice with rich sauce.",
        },
        {
          name: "Prawns Chilli Pot Rice",
          price: 25,
          image: "/images/menu/saburtalo/wolt/chicken-fried-rice-with-egg.jpg",
          description: "Prawns chilli pot rice with a bold saucy finish.",
        },
      ],
    },
    {
      category: "Chicken Specials",
      items: [
        {
          name: "Chilli Chicken Dry",
          price: 15,
          image: "/images/menu/saburtalo/wolt/chilli-chicken-dry.jpg",
          description: "Dry chilli chicken with peppers, onions, and a glossy spicy coating.",
          halal: true,
        },
        {
          name: "Chilli Chicken Gravy",
          price: 17,
          image: "/images/menu/saburtalo/wolt/chilli-chicken-gravy.jpg",
          description: "Tender chilli chicken served in a rich Indo-Chinese gravy.",
          halal: true,
        },
        {
          name: "Chicken Manchurian Dry",
          price: 16,
          image: "/images/menu/saburtalo/wolt/chicken-manchurian-dry.jpg",
          description: "Crisp chicken bites tossed dry with Manchurian spices and sauce.",
          halal: true,
        },
        {
          name: "Chicken Manchurian Gravy",
          price: 17,
          image: "/images/menu/saburtalo/wolt/chicken-manchurian-gravy.jpg",
          description: "Chicken Manchurian in a smooth, savory gravy with spring onion.",
        },
        {
          name: "Crispy Thread Chicken",
          price: 18,
          image: "/images/menu/saburtalo/wolt/chicken-manchurian-dry.jpg",
          description: "Crisp chicken strips with a light crunch and Indo-Chinese seasoning.",
        },
        {
          name: "Chilli Garlic Chicken Wings",
          price: 18,
          image: "/images/menu/saburtalo/wolt/chilli-garlic-chicken-wings.jpg",
          description: "Chicken wings coated with chilli garlic sauce and fresh aromatics.",
          halal: true,
        },
        {
          name: "Honey Garlic Chicken Wings",
          price: 18,
          image: "/images/menu/saburtalo/wolt/honey-garlic-chicken-wings.jpg",
          description: "Sweet-spicy chicken wings glazed with honey, garlic, and sesame.",
          halal: true,
        },
        {
          name: "Chicken 65 (Semi Dry)",
          price: 20,
          image: "/images/menu/saburtalo/wolt/chilli-chicken-dry.jpg",
          description: "Semi-dry chicken bites with bold spices and a lightly saucy finish.",
        },
        {
          name: "Burnt Garlic Chicken",
          price: 20,
          image: "/images/menu/saburtalo/wolt/chicken-manchurian-dry.jpg",
          description: "Chicken tossed with deep burnt garlic aroma and savory spice.",
        },
        {
          name: "Mongolian Chicken",
          price: 24,
          image: "/images/menu/saburtalo/wolt/chilli-chicken-gravy.jpg",
          description: "Chicken in a rich, slightly sweet Mongolian-style sauce.",
        },
      ],
    },
    {
      category: "Veg Specials",
      items: [
        {
          name: "Veg Mixed Manchurian Dry",
          price: 16,
          image: "/images/menu/isani/wolt/veg-mixed-manchurian-dry.jpg",
          description: "Fried mixed vegetables tossed dry with Manchurian spice.",
        },
        {
          name: "Veg Mixed Manchurian Gravy",
          price: 17,
          image: "/images/menu/isani/wolt/veg-mixed-manchurian-gravy.jpg",
          description: "Mixed vegetable Manchurian in a creamy, savory gravy.",
        },
        {
          name: "Paneer Chilli Dry",
          price: 16,
          image: "/images/menu/saburtalo/wolt/paneer-chilli-dry.jpg",
          description: "Paneer cubes tossed dry with bell peppers, chilli, and spices.",
        },
        {
          name: "Paneer Chilli Gravy",
          price: 17,
          image: "/images/menu/saburtalo/wolt/paneer-chilli-gravy.jpg",
          description: "Paneer in a buttery chilli gravy with onions, peppers, and herbs.",
        },
        {
          name: "Paneer 65 Dry",
          price: 19,
          image: "/images/menu/saburtalo/wolt/paneer-chilli-dry.jpg",
          description: "Dry paneer bites with bold spice, herbs, and a crisp edge.",
        },
        {
          name: "Mushroom Chilli Dry",
          price: 18,
          image: "/images/menu/isani/wolt/veg-mixed-manchurian-dry.jpg",
          description: "Mushrooms tossed dry with chilli sauce, peppers, and aromatics.",
        },
      ],
    },
    {
      category: "Lollipop Special",
      items: [
        {
          name: "Chicken Lollipop Fry",
          price: 16,
          image: "/images/menu/saburtalo/wolt/chicken-lollipop-fry.jpg",
          description: "Crispy chicken lollipops fried golden and served hot.",
        },
        {
          name: "Chicken Lollipop Semi Gravy",
          price: 17,
          image: "/images/menu/saburtalo/wolt/chicken-lollipop-semi-gravy.jpg",
          description: "Chicken lollipops coated in a saucy semi-gravy chilli finish.",
        },
      ],
    },
    {
      category: "Potato Specials",
      items: [
        {
          name: "Honey Chilli Potato",
          price: 15,
          image: "/images/menu/saburtalo/wolt/honey-chilli-potato.jpg",
          description: "Crisp potato tossed in sweet-spicy honey chilli Schezwan sauce.",
        },
        {
          name: "French Fries",
          price: 12,
          image: "/images/menu/saburtalo/wolt/french-fries.jpg",
          description: "Golden fries finished with a light seasoned salt.",
        },
      ],
    },
  ],
  saburtalo: [
    {
      category: "Chicken Momo Special",
      items: [
        {
          name: "Chicken Steam MoMo",
          price: 15,
          image: "/images/menu/saburtalo/wolt/chicken-steam-momo.jpg",
          description: "Classic steamed chicken dumplings with a soft wrapper and juicy filling.",
          halal: true,
        },
        {
          name: "Chicken Fry MoMo",
          price: 16,
          image: "/images/menu/saburtalo/wolt/chicken-fry-momo.jpg",
          description: "Golden fried chicken momos with a crisp bite and warm savory center.",
          halal: true,
        },
        {
          name: "Chicken Jhol MoMo",
          price: 18,
          image: "/images/menu/saburtalo/wolt/chicken-jhol-momo.jpg",
          description: "Steamed chicken momos served in a rich, spiced jhol-style sauce.",
          halal: true,
        },
        {
          name: "Chicken Chilli MoMo",
          price: 18,
          image: "/images/menu/saburtalo/wolt/chicken-chilli-momo.jpg",
          description: "Fried chicken momos tossed with chilli, peppers, and bold Indo-Chinese sauce.",
          halal: true,
        },
        {
          name: "Chicken Fried Tandoori MoMo",
          price: 19,
          image: "/images/menu/saburtalo/wolt/chicken-fried-tandoori-momo.jpg",
          description: "Crisp chicken momos finished with smoky tandoori spices and creamy sauce.",
          halal: true,
        },
        {
          name: "Chicken Fried Achari MoMo",
          price: 19,
          image: "/images/menu/saburtalo/wolt/chicken-fried-achari-momo.jpg",
          description: "Fried chicken momos coated in tangy achari spices for a bright pickle kick.",
          halal: true,
        },
        {
          name: "Chicken Fried Honey Chilli MoMo",
          price: 19,
          image: "/images/menu/saburtalo/wolt/chicken-fried-honey-chilli-momo.jpg",
          description: "Sweet, spicy fried chicken momos glazed with honey chilli garlic sauce.",
          halal: true,
        },
      ],
    },
    {
      category: "Veg Momo Special",
      items: [
        {
          name: "Veg Steam MoMo",
          price: 14,
          image: "/images/menu/saburtalo/wolt/veg-steam-momo.jpg",
          description: "Steamed vegetable dumplings with a soft wrapper and fresh herb garnish.",
        },
        {
          name: "Veg Fry MoMo",
          price: 16,
          image: "/images/menu/saburtalo/wolt/veg-fry-momo.jpg",
          description: "Crispy fried vegetable momos served golden with a comforting crunch.",
        },
        {
          name: "Veg Jhol MoMo",
          price: 18,
          image: "/images/menu/saburtalo/wolt/veg-jhol-momo.jpg",
          description: "Vegetable momos in a fragrant, gently spicy jhol-style tomato sauce.",
        },
        {
          name: "Veg Chilli MoMo",
          price: 18,
          image: "/images/menu/saburtalo/wolt/veg-chilli-momo.jpg",
          description: "Fried veg momos tossed with chilli sauce, peppers, onions, and herbs.",
        },
        {
          name: "Veg Fried Tandoori MoMo",
          price: 18,
          image: "/images/menu/saburtalo/wolt/veg-fried-tandoori-momo.jpg",
          description: "Fried vegetable momos dressed with smoky tandoori spices and chutney.",
        },
        {
          name: "Veg Fried Achari MoMo",
          price: 18,
          image: "/images/menu/saburtalo/wolt/veg-fried-achari-momo.jpg",
          description: "Crisp veg momos with tangy achari masala and a bright spiced finish.",
        },
        {
          name: "Veg Fried Honey Chilli MoMo",
          price: 18,
          description: "Fried veg momos glazed with sweet honey chilli sauce and garlic warmth.",
        },
      ],
    },
    {
      category: "Paneer Momo Special",
      items: [
        {
          name: "Paneer Steam MoMo",
          price: 18,
          image: "/images/menu/saburtalo/wolt/paneer-steam-momo.jpg",
          description: "Steamed momos filled with spiced paneer for a soft, creamy bite.",
        },
        {
          name: "Paneer Fry MoMo",
          price: 19,
          image: "/images/menu/saburtalo/wolt/paneer-fry-momo.jpg",
          description: "Fried paneer momos with a golden shell and rich cottage cheese filling.",
        },
        {
          name: "Paneer Jhol MoMo",
          price: 22,
          image: "/images/menu/saburtalo/wolt/paneer-jhol-momo.jpg",
          description: "Paneer momos served in a warm, aromatic jhol gravy.",
        },
        {
          name: "Paneer Chilli MoMo",
          price: 23,
          image: "/images/menu/saburtalo/wolt/paneer-chilli-momo.jpg",
          description: "Paneer momos tossed with chilli sauce, peppers, and a spicy finish.",
        },
      ],
    },
    {
      category: "Special Noodles",
      items: [
        {
          name: "Chicken Hakka Noodles",
          price: 16,
          image: "/images/menu/saburtalo/wolt/chicken-hakka-noodles.jpg",
          description: "Stir-fried noodles with chicken, vegetables, and classic Hakka flavor.",
        },
        {
          name: "Veg Hakka Noodles",
          price: 14,
          image: "/images/menu/saburtalo/wolt/veg-hakka-noodles.jpg",
          description: "Vegetable noodles stir-fried until light, savory, and satisfying.",
        },
        {
          name: "Burnt Garlic Chicken Noodles",
          price: 17,
          image: "/images/menu/saburtalo/wolt/burnt-garlic-chicken-noodles.jpg",
          description: "Chicken noodles with deep burnt garlic aroma and a creamy spiced finish.",
          halal: true,
        },
        {
          name: "Burnt Garlic Veg Noodles",
          price: 16,
          image: "/images/menu/saburtalo/wolt/burnt-garlic-veg-noodles.jpg",
          description: "Vegetable noodles with fragrant burnt garlic and bold house seasoning.",
        },
        {
          name: "Schezwan Chicken Noodles",
          price: 17,
          image: "/images/menu/saburtalo/wolt/schezwan-chicken-noodles.jpg",
          description: "Chicken noodles tossed in punchy Schezwan sauce with vegetables.",
          halal: true,
        },
        {
          name: "Schezwan Veg Noodles",
          price: 17,
          image: "/images/menu/saburtalo/wolt/schezwan-veg-noodles.jpg",
          description: "Vegetable noodles coated in spicy Schezwan sauce for a lively kick.",
        },
        {
          name: "Tripal Chicken Noodles",
          price: 19,
          description: "A hearty chicken noodle plate with layered Indo-Chinese spice.",
        },
        {
          name: "Tripal Veg Noodles",
          price: 18,
          description: "A generous vegetable noodle dish with rich sauce and wok-fried flavor.",
        },
      ],
    },
    {
      category: "Rice Specials",
      items: [
        {
          name: "Chicken Fried Rice with Egg",
          price: 16,
          image: "/images/menu/saburtalo/wolt/chicken-fried-rice-with-egg.jpg",
          description: "Basmati fried rice with chicken, egg, vegetables, and house sauce.",
          halal: true,
        },
        {
          name: "Veg Fried Rice",
          price: 15,
          image: "/images/menu/saburtalo/wolt/veg-fried-rice.jpg",
          description: "Vegetable fried rice with basmati grains and a clean savory finish.",
        },
        {
          name: "Egg Fried Rice",
          price: 14,
          image: "/images/menu/saburtalo/wolt/egg-fried-rice.jpg",
          description: "Basmati rice cooked with egg, butter, and gentle house spices.",
        },
        {
          name: "Burnt Garlic Chicken Fried Rice",
          price: 17,
          image: "/images/menu/saburtalo/wolt/burnt-garlic-chicken-fried-rice.jpg",
          description: "Chicken fried rice lifted with smoky burnt garlic and warm spices.",
          halal: true,
        },
        {
          name: "Burnt Garlic Veg Fried Rice",
          price: 16,
          image: "/images/menu/saburtalo/wolt/burnt-garlic-veg-fried-rice.jpg",
          description: "Vegetable fried rice with buttery basmati and fragrant burnt garlic.",
        },
        {
          name: "Schezwan Chicken Fried Rice with Egg",
          price: 17,
          image: "/images/menu/saburtalo/wolt/schezwan-chicken-fried-rice-with-egg.jpg",
          description: "Spicy Schezwan fried rice with chicken, egg, and spring onion.",
        },
        {
          name: "Tripal Schezwan Chicken Fried Rice",
          price: 19,
          image: "/images/menu/saburtalo/wolt/tripal-schezwan-chicken-fried-rice.jpg",
          description: "A bold chicken mix of fried rice, noodles, and Schezwan sauce.",
        },
        {
          name: "Tripal Schezwan Veg Fried Rice",
          price: 18,
          image: "/images/menu/saburtalo/wolt/tripal-schezwan-veg-fried-rice.jpg",
          description: "Vegetable fried rice and noodles mixed with bright Schezwan flavor.",
        },
      ],
    },
    {
      category: "Chicken Specials",
      items: [
        {
          name: "Chilli Chicken Dry",
          price: 15,
          image: "/images/menu/saburtalo/wolt/chilli-chicken-dry.jpg",
          description: "Dry chilli chicken with peppers, onions, and a glossy spicy coating.",
          halal: true,
        },
        {
          name: "Chilli Chicken Gravy",
          price: 17,
          image: "/images/menu/saburtalo/wolt/chilli-chicken-gravy.jpg",
          description: "Tender chilli chicken served in a rich Indo-Chinese gravy.",
          halal: true,
        },
        {
          name: "Chicken Manchurian Dry",
          price: 16,
          image: "/images/menu/saburtalo/wolt/chicken-manchurian-dry.jpg",
          description: "Crisp chicken bites tossed dry with Manchurian spices and sauce.",
          halal: true,
        },
        {
          name: "Chicken Manchurian Gravy",
          price: 17,
          image: "/images/menu/saburtalo/wolt/chicken-manchurian-gravy.jpg",
          description: "Chicken Manchurian in a smooth, savory gravy with spring onion.",
          halal: true,
        },
        {
          name: "Chilli Garlic Chicken Wings",
          price: 18,
          image: "/images/menu/saburtalo/wolt/chilli-garlic-chicken-wings.jpg",
          description: "Chicken wings coated with chilli garlic sauce and fresh aromatics.",
          halal: true,
        },
        {
          name: "Honey Garlic Chicken Wings",
          price: 18,
          image: "/images/menu/saburtalo/wolt/honey-garlic-chicken-wings.jpg",
          description: "Sweet-spicy chicken wings glazed with honey, garlic, and sesame.",
          halal: true,
        },
      ],
    },
    {
      category: "Veg Special",
      items: [
        {
          name: "Paneer Chilli Dry",
          price: 16,
          image: "/images/menu/saburtalo/wolt/paneer-chilli-dry.jpg",
          description: "Paneer cubes tossed dry with bell peppers, chilli, and spices.",
        },
        {
          name: "Paneer Chilli Gravy",
          price: 17,
          image: "/images/menu/saburtalo/wolt/paneer-chilli-gravy.jpg",
          description: "Paneer in a buttery chilli gravy with onions, peppers, and herbs.",
        },
      ],
    },
    {
      category: "Potato Specials",
      items: [
        {
          name: "Honey Chilli Potato",
          price: 15,
          image: "/images/menu/saburtalo/wolt/honey-chilli-potato.jpg",
          description: "Crisp potato tossed in sweet-spicy honey chilli Schezwan sauce.",
        },
        {
          name: "French Fries",
          price: 12,
          image: "/images/menu/saburtalo/wolt/french-fries.jpg",
          description: "Golden fries finished with a light seasoned salt.",
        },
      ],
    },
    {
      category: "Lollipop Special",
      items: [
        {
          name: "Chicken Lollipop Fry",
          price: 16,
          image: "/images/menu/saburtalo/wolt/chicken-lollipop-fry.jpg",
          description: "Crispy chicken lollipops fried golden and served hot.",
          halal: true,
        },
        {
          name: "Chicken Lollipop Semi Gravy",
          price: 17,
          image: "/images/menu/saburtalo/wolt/chicken-lollipop-semi-gravy.jpg",
          description: "Chicken lollipops coated in a saucy, semi-gravy chilli finish.",
          halal: true,
        },
      ],
    },
  ],
};
