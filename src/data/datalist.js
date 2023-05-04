//IMAGES
import blue_razz from "../src/images/gunnpod/Blue_razz.jpeg";
import Double_apple from "../src/images/gunnpod/Double_apple.jpeg";
import Grape_ice from "../src/images/gunnpod/Grape_ice.jpeg";
import Jelly_berry from "../src/images/gunnpod/Jelly_berry.jpeg";
import Lemon_Iced_cola from "../src/images/gunnpod/Lemon_Iced_cola.jpeg";
import Lush_ice from "../src/images/gunnpod/Lush_ice.jpeg";
import Mango_Peach from "../src/images/gunnpod/Mango_Peach.jpeg";
import Mixed_berry from "../src/images/gunnpod/Mixed_berry.jpeg";
import Pineapple_orange_guava from "../src/images/gunnpod/Pineapple_orange_guava.jpeg";
import Strawberry_kiwi from "../src/images/gunnpod/Strawberry_kiwi.jpeg";
import Strawberry_lush from "../src/images/gunnpod/Strawberry_lush.jpeg";
import Watermellon_kiwi_ice from "../src/images/gunnpod/Watermellon_kiwi_ice.jpeg";

import Coconut_Ice_cream from "../src/images/Val/Coconut_Ice_cream.jpeg";
import peach_mango_watermelon from "../src/images/Val/peach_mango_watermelon.jpeg";


const singlePrice = 150;
const minProfit = 200;

//Category info
export const GUNNPOD_AIR_3000 = 'gunnpod_air_3000';
export const VAAL_4500 = 'vaal_4500';
export const DRAGBAR_5000 = 'dragbar_5000';
export const IGET_PRO_5000 = 'iget_pro_5000';
export const ELF_BAR_6000 = 'elf_bar_6000';
export const DRAGBAR_6000 = 'drag_bar_6000';
export const NORBAR_4000 = 'nor_bar_4000';

export const CATEGORY = [
    {
        image: "https://th.bing.com/th/id/OIP._XbHr-dhVE12xWc4WfzxZgHaDt?pid=ImgDet&rs=1",
        title: "Gunnpod Air 3000",
        category: GUNNPOD_AIR_3000

    },
    // {
    //     image: "https://vapegala.co.uk/wp-content/uploads/2022/03/Smok-Nord-Bar-4000-Puffs-Disposable-Vape_1024x1024-600x600.gif",
    //     title: "NORBAR_4000 4000",
    //     category: NORBAR_4000
    // },
    {
        image: "https://vapewizarddxb.com/wp-content/uploads/2022/08/VAAL-EP-4500-760x760.png",
        title: "Vaal",
        category: VAAL_4500

    },
    {
        image: "https://th.bing.com/th/id/R.9fd4e5da0bbe2091197897f4b3f3d364?rik=F5ciwxTB0jAx1Q&pid=ImgRaw&r=0",
        title: "DragBar 5000",
        category: DRAGBAR_5000
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0551/1217/1601/products/iget-pro-fruit-gummy-min_grande.jpg?v=1664899911",
        title: "IGET Pro 5000",
        category: IGET_PRO_5000
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0035/7721/7139/products/WhatsAppImage2022-05-13at4.34.17PM_580x@2x.jpg?v=1652476316",
        title: "Elf bar",
        category: ELF_BAR_6000
    },
    {
        image: "https://th.bing.com/th/id/OIP.rbmmsSfSKAVlQKP_WUVAfQHaHa?pid=ImgDet&rs=1",
        title: "DragBar 6000",
        category: DRAGBAR_6000

    },
];

export const PRODUCT_PRICES = {
    [GUNNPOD_AIR_3000]: {
        CP: 800 + singlePrice,
        MP: 1000,
        min_MP: 1000,
        discount: 0,
        hamroPrices: {
            maxPrice: 1000,
            minPriceToSell: 1000,
            cpw: 800,
            singlePrice: 800 + singlePrice
        }
    },
    [VAAL_4500]: {
        CP: 1900 + singlePrice,
        MP: 2800,
        min_MP: 2400,
        discount: 10,
        hamroPrices: {
            maxPrice: 2800,
            minPriceToSell: 1900 + singlePrice + minProfit,
            cpw: 1900,
            singlePrice: 1900 + singlePrice
        }
    },
    [DRAGBAR_5000]: {
        CP: 1750 + singlePrice,
        MP: 2500,
        min_MP: 2100,
        discount: 10,
        hamroPrices: {
            maxPrice: 2500,
            minPriceToSell: 1750 + singlePrice + minProfit,
            cpw: 1750,
            singlePrice: 1750 + singlePrice
        }
    },
    [IGET_PRO_5000]: {
        CP: 1550 + singlePrice,
        MP: 2800,
        min_MP: 2000,
        discount: 10,
        hamroPrices: {
            maxPrice: 2800,
            minPriceToSell: 1550 + singlePrice + minProfit,
            cpw: 1550,
            singlePrice: 1550 + singlePrice
        }
    },
    [ELF_BAR_6000]: {
        CP: 2000 + singlePrice,
        MP: 2800,
        min_MP: 2400,
        discount: 10,
        hamroPrices: {
            maxPrice: 2600,
            minPriceToSell: 2000 + singlePrice + minProfit,
            cpw: 2000,
            singlePrice: 2000 + singlePrice
        }
    },
    [DRAGBAR_6000]: {
        CP: 2000 + singlePrice,
        MP: 3000,
        min_MP: 2200,
        discount: 10,
        hamroPrices: {
            maxPrice: 3000,
            minPriceToSell: 2000 + singlePrice + minProfit,
            cpw: 2000,
            singlePrice: 2000 + singlePrice
        }
    },
    [NORBAR_4000]: {
        CP: 1100 + singlePrice,
        MP: 2500,
        min_MP: 2000,
        discount: 10,
        hamroPrices: {
            maxPrice: 2500,
            minPriceToSell: 1100 + singlePrice + minProfit,
            cpw: 1100,
            singlePrice: 1100 + singlePrice
        }
    },
};

export const PRODUCT_FLAVORS = {
    [GUNNPOD_AIR_3000]: [
        {nicotine: [5], flavorCombo: ["LEMON", "ICE ", "COLA"], flavorInfo: "", image: Lemon_Iced_cola},
        {nicotine: [5], flavorCombo: ["BLUE ", "RAZZ"], flavorInfo: "", image: blue_razz},
        {nicotine: [5], flavorCombo: ["GRAPE ", "ICE"], flavorInfo: "", image: Grape_ice},
        {nicotine: [5], flavorCombo: ["LUSH ", "ICE"], flavorInfo: "", image: Lush_ice},
        {nicotine: [5], flavorCombo: ["JELLY ", "BERRY"], flavorInfo: "", image: Jelly_berry},
        {nicotine: [5], flavorCombo: ["MIXED ", "BERRY"], flavorInfo: "", image: Mixed_berry},
        {nicotine: [5], flavorCombo: ["STRAWBERRY ", "LUSH"], flavorInfo: "", image: Strawberry_lush},
        {nicotine: [5], flavorCombo: ["STRAWBERRY ", "KIWI"], flavorInfo: "", image: Strawberry_kiwi},
        {nicotine: [5], flavorCombo: ["DOUBLE ", "APPLE"], flavorInfo: "", image: Double_apple},
        {nicotine: [5], flavorCombo: ["WATERMELLON", "KIWI ", "ICE"], flavorInfo: "", image: Watermellon_kiwi_ice},
        {nicotine: [5], flavorCombo: ["PINEAPPLE", "ORANGE ", "GUAVA"], flavorInfo: "", image: Pineapple_orange_guava},
        {nicotine: [5], flavorCombo: ["MANGO ", "PEACH"], flavorInfo: "", image: Mango_Peach},
    ],
    [VAAL_4500]: [
        {
            nicotine: [5],
            flavorCombo: ["Strawberry", "Kiwi", "Lychee"],
            flavorInfo: "",
            image: 'https://joyetech.us/media/catalog/product/cache/2/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/e/p/ep4500_2_.jpg',
        },
        {
            nicotine: [5],
            flavorCombo: ["Coconut", "Ice cream"],
            flavorInfo: "", image: Coconut_Ice_cream,
        },
        {
            nicotine: [5],
            flavorCombo: ["Peach", "Mango", "Watermelon"],
            flavorInfo: "", image: peach_mango_watermelon
        },
        {
            nicotine: [5],
            flavorCombo: ["Cherry Coke"],
            flavorInfo: "",
            image: 'https://joyetech.us/media/catalog/product/cache/2/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/e/p/ep4500_2_.jpg',
        },
        {
            nicotine: [5],
            flavorCombo: ["Rainbow Sugar"],
            flavorInfo: "",
            image: 'https://joyetech.us/media/catalog/product/cache/2/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/e/p/ep4500_2_.jpg',
        },
    ],
    [DRAGBAR_5000]: [
        {
            nicotine: [5],
            flavorCombo: ["Fruit Slushie"],
            flavorInfo: "",
            image: 'https://vapewh.com/cdn/shop/products/dragbar-b5000-fruit-slushie_800x.jpg?v=1671680766',
        },
        {
            nicotine: [5],
            flavorCombo: ["Pina", "Colada"],
            flavorInfo: "",
            image: 'https://vapewh.com/cdn/shop/products/dragbar-b5000-pina-colada_800x.jpg?v=1671680768',
        },
        {
            nicotine: [5],
            flavorCombo: ["Blue Raz Ice"],
            flavorInfo: "",
            image: 'https://vapewh.com/cdn/shop/products/dragbar-b5000-blue-razz-ice_800x.jpg?v=1671680767',
        },
        {
            nicotine: [5],
            flavorCombo: ["Peach", "Mange"],
            flavorInfo: "",
            image: 'https://vapewh.com/cdn/shop/products/dragbar-b5000-peach-mango_800x.jpg?v=1671680768',
        },
        {
            nicotine: [5],
            flavorCombo: ["Kiwi", "Passion Fruit", "Guava"],
            flavorInfo: "",
            image: 'https://vapewh.com/cdn/shop/products/dragbar-b5000-kiwi-passion-fruit-guava_800x.jpg?v=1671680767',
        },
        {
            nicotine: [5],
            flavorCombo: ["Aloe", "Grape"],
            flavorInfo: "",
            image: 'https://vapewh.com/cdn/shop/products/dragbar-b5000-aloe-grape_800x.jpg?v=1671680766',
        },
        {
            nicotine: [5],
            flavorCombo: ["Mint", "Twists"],
            flavorInfo: "",
            image: 'https://vapewh.com/cdn/shop/products/dragbar-b5000-mint-twists_800x.jpg?v=1671680767',
        },
        {
            nicotine: [5],
            flavorCombo: ["Strawberry Ice cream"],
            flavorInfo: "",
            image: 'https://vapewh.com/cdn/shop/products/dragbar-b5000-strawberry-ice-cream_800x.jpg?v=1671680766',
        },
        {
            nicotine: [5],
            flavorCombo: ["Watermelon", "Lychee"],
            flavorInfo: "",
            image: 'https://vapewh.com/cdn/shop/products/dragbar-b5000-watermelon-lychee_800x.jpg?v=1671680752',
        },
        {
            nicotine: [5],
            flavorCombo: ["Vanilla Cream", "Tobacco"],
            flavorInfo: "",
            image: "https://vapewh.com/cdn/shop/products/dragbar-b5000-vanilla-cream-tobacco_800x.jpg?v=1671680767",
        },
    ],
    [IGET_PRO_5000]: [
        {
            nicotine: [5],
            flavorCombo: ["Strawberry", "WaterMelon"],
            flavorInfo: "",
            image: 'https://cdn.shopify.com/s/files/1/0293/0756/8206/products/iget-pro-5000-strawberry-watermelon.jpg?v=1664892004&width=600',
        },
        {
            nicotine: [5],
            flavorCombo: ["Fruit GUMMY"],
            flavorInfo: "",
            image: 'https://cdn.shopify.com/s/files/1/0293/0756/8206/products/iget-pro-5000-fruit-gummy.jpg?v=1664892356&width=900',
        },
        {
            nicotine: [5],
            flavorCombo: ["Double Apple", "Lime"],
            flavorInfo: "",
            image: 'https://cdn.shopify.com/s/files/1/0293/0756/8206/products/iget-pro-5000-double-apple-lime.jpg?v=1664892575&width=900',
        },
        {
            nicotine: [5],
            flavorCombo: ["Pink Lemon", "Berry"],
            flavorInfo: "",
            image: 'https://cdn.shopify.com/s/files/1/0293/0756/8206/products/iget-pro-5000-pink-lemon-berry.jpg?v=1664892811&width=900',
        },
        {
            nicotine: [5],
            flavorCombo: ["Mango", "Berry", "Ice"],
            flavorInfo: "",
            image: 'https://cdn.shopify.com/s/files/1/0293/0756/8206/products/iget-pro-5000-mango-berry-ice.jpg?v=1664892302&width=900',
        },
        {
            nicotine: [5],
            flavorCombo: ["Lush", "Ice"],
            flavorInfo: "",
            image: 'https://cdn.shopify.com/s/files/1/0293/0756/8206/products/iget-pro-5000-lush-ice.jpg?v=1664892170&width=900',
        },
        {
            nicotine: [5],
            flavorCombo: ["Passion Fruit", "Grape", "Orange", "Ice"],
            flavorInfo: "",
            image: 'https://cdn.shopify.com/s/files/1/0293/0756/8206/products/iget-pro-passion-fruit-grape-orange-ice.jpg?v=1673418127&width=700',
        },
        {
            nicotine: [5],
            flavorCombo: ["Aloe", "Grape"],
            flavorInfo: "",
            image: 'https://cdn.shopify.com/s/files/1/0293/0756/8206/products/iget-pro-5000-aloe-grape.jpg?v=1664892233&width=900',
        },
        {
            nicotine: [5],
            flavorCombo: ["Strawberry", "Kiwi"],
            flavorInfo: "",
            image: 'https://cdn.shopify.com/s/files/1/0293/0756/8206/products/iget-pro-5000-strawberry-kiwi.jpg?v=1664892130&width=900',
        },
        {
            nicotine: [5],
            flavorCombo: ["BlackBerry", "Rasberry", "Ice"],
            flavorInfo: "",
            image: 'https://cdn.shopify.com/s/files/1/0293/0756/8206/products/iget-pro-5000-blackberry-raspberry-ice.jpg?v=1664892721&width=900',
        },
    ],
    [ELF_BAR_6000]: [
        {
            nicotine: [5],
            flavorCombo: ["Sakura", "Grape"],
            flavorInfo: "",
            image: 'https://cdn.shopify.com/s/files/1/0054/1235/6194/products/ELFBARTE6000DISPOSABLEPOD-SAKURAGRAPE-min_5000x.jpg?v=1662962172',
        },
        {
            nicotine: [5],
            flavorCombo: ["Grape", "Honeydew"],
            flavorInfo: "",
            image: 'https://cdn.shopify.com/s/files/1/0054/1235/6194/products/3_5000x.jpg?v=1662959718',
        },
        {
            nicotine: [5],
            flavorCombo: ["Cranberry", "Grape"],
            flavorInfo: "",
            image: 'https://cdn.shopify.com/s/files/1/0054/1235/6194/products/ELFBARTE6000DISPOSABLEPOD-CRANBERRYGRAPE-min_5000x.jpg?v=1662962173',
        },
        {
            nicotine: [5],
            flavorCombo: ["Popcorn", "Caramel"],
            flavorInfo: "",
            image: 'https://cdn.shopify.com/s/files/1/0054/1235/6194/products/4_5000x.jpg?v=1662959717',
        },
        {
            nicotine: [5],
            flavorCombo: ["Cola Ice"],
            flavorInfo: "",
            image: 'https://cdn.shopify.com/s/files/1/0054/1235/6194/products/5_5000x.jpg?v=1662959717',
        },
        {
            nicotine: [5],
            flavorCombo: ["Vanilla Ice Cream"],
            flavorInfo: "",
            image: 'https://cdn.shopify.com/s/files/1/0054/1235/6194/products/ELFBARTE6000DISPOSABLEPOD-VANILLAICECREAM-min_5000x.jpg?v=1662962172',
        },
        {
            nicotine: [5],
            flavorCombo: ["Strawberry", "Mango"],
            flavorInfo: "",
            image: 'https://cdn.shopify.com/s/files/1/0054/1235/6194/products/ELFBARTE6000DISPOSABLEPOD-STRAWBERRRYMANGO-min_5000x.jpg?v=1662962171',
        },
        {
            nicotine: [5],
            flavorCombo: ["Cool Mint"],
            flavorInfo: "",
            image: 'https://cdn.shopify.com/s/files/1/0054/1235/6194/products/1_5000x.jpg?v=1662959718',
        },
        {
            nicotine: [5],
            flavorCombo: ["Vanilla Custard"],
            flavorInfo: "",
            image: 'https://cdn.shopify.com/s/files/1/0054/1235/6194/products/ELFBARTE6000DISPOSABLEPOD-VANILLACUSTARD-min_5000x.jpg?v=1662962171',
        },
        {
            nicotine: [5],
            flavorCombo: ["Strawberry", "Juicy", "Peach"],
            flavorInfo: "",
            image: 'https://cdn.shopify.com/s/files/1/0054/1235/6194/products/6_5000x.jpg?v=1662959718',
        },
        {
            nicotine: [5],
            flavorCombo: ["Peach", "Mango", "Watermelon"],
            flavorInfo: "",
            image: 'https://cdn.shopify.com/s/files/1/0054/1235/6194/products/ELFBARTE6000DISPOSABLEPOD-PEACHMANGOWATERMELON-min_5000x.jpg?v=1662962170',
        },
        {
            nicotine: [5],
            flavorCombo: ["Durian King"],
            flavorInfo: "",
            image: 'https://product.hstatic.net/200000491451/product/durian-king__1__0feff4498f36423cb29a0b8eafbafe65_master.jpg',
        },
        {
            nicotine: [5],
            flavorCombo: ["Banana"],
            flavorInfo: "",
            image: 'https://cdn.shopify.com/s/files/1/0054/1235/6194/products/ELFBARTE6000DISPOSABLEPOD-BANANA-min_5000x.jpg?v=1662962171',
        },
        {
            nicotine: [5],
            flavorCombo: ["Taro Yam"],
            flavorInfo: "",
            image: 'https://cdn.shopify.com/s/files/1/0054/1235/6194/products/ElfBarTE6000_5000x.png?v=1666063850',
        },
    ],
    [DRAGBAR_6000]: [
        {
            nicotine: [5],
            flavorCombo: ["Pineapple", "Coconut", "Rum"],
            flavorInfo: "",
            image: "https://vapewh.com/cdn/shop/products/DRAGBAR-R6000-PineCocoRum2_800x.jpg?v=1671681698"
        },
        {
            nicotine: [5],
            flavorCombo: ["Strawberry", "Orange", "Mange"],
            flavorInfo: "",
            image: "https://vapewh.com/cdn/shop/products/DRAGBAR-R6000-StrawOrangeMang2_800x.jpg?v=1671681699"
        },
        {
            nicotine: [5],
            flavorCombo: ["Pineapple", "Grapefruit"],
            flavorInfo: "",
            image: "https://vapewh.com/cdn/shop/products/DRAGBAR-R6000-PineGrapefrt2_800x.jpg?v=1671681700"
        },
        {
            nicotine: [5],
            flavorCombo: ["Vanila Cream Tobacco"],
            flavorInfo: "",
            image: "https://vapewh.com/cdn/shop/products/DRAGBAR-R6000-VanCrmTob2_800x.jpg?v=1671681700"
        },
        {
            nicotine: [5],
            flavorCombo: ["Blure", "Respberry", "Lemon"],
            flavorInfo: "",
            image: "https://vapewh.com/cdn/shop/products/DRAGBAR-R6000-GrpeBlkBry2_800x.jpg?v=1671681698"
        },
        {
            nicotine: [5],
            flavorCombo: ["Peach", "Snow Pear"],
            flavorInfo: "",
            image: "https://vapewh.com/cdn/shop/products/DRAGBAR-R6000-PeachSnwPr2_800x.jpg?v=1671681702"
        },
        {
            nicotine: [5],
            flavorCombo: ["Grape", "Blackberry"],
            flavorInfo: "",
            image: "https://vapewh.com/cdn/shop/products/DRAGBAR-R6000-GrpeBlkBry2_800x.jpg?v=1671681698"
        },
        {
            nicotine: [5],
            flavorCombo: ["Passion Fruit", "Guava"],
            flavorInfo: "",
            image: "https://vapewh.com/cdn/shop/products/DRAGBAR-R6000-PasnFrtGuav2_800x.jpg?v=1671681700"
        },
        {
            nicotine: [5],
            flavorCombo: ["Grape Ice"],
            flavorInfo: "",
            image: "https://vapewh.com/cdn/shop/products/DRAGBAR-R6000-GrpeIce2_800x.jpg?v=1671681701"
        },
        {
            nicotine: [5],
            flavorCombo: ["Green Apple", "Ice"],
            flavorInfo: "",
            image: "https://vapewh.com/cdn/shop/products/DRAGBAR-R6000-GrnApleIce2_800x.jpg?v=1671681701"
        },
        {
            nicotine: [5],
            flavorCombo: ["Watermelon", "Ice"],
            flavorInfo: "",
            image: "https://vapewh.com/cdn/shop/products/DRAGBAR-R6000-WatmlnIce2_800x.jpg?v=1671681698"
        },
        {
            nicotine: [5],
            flavorCombo: ["Cool Mint"],
            flavorInfo: "",
            image: "https://vapewh.com/cdn/shop/products/DRAGBAR-R6000-CoolMint2_800x.jpg?v=1671681697"
        },
        {
            nicotine: [5],
            flavorCombo: ["Watermelon", "Cherry"],
            flavorInfo: "",
            image: "https://vapewh.com/cdn/shop/products/DRAGBAR-R6000-WatmlnChry2_800x.jpg?v=1671681699"
        },
        {
            nicotine: [5],
            flavorCombo: ["Green Voodoo"],
            flavorInfo: "",
            image: "https://vapewh.com/cdn/shop/products/DRAGBAR-R6000-GrnVodo2_800x.jpg?v=1671681698"
        },
        {
            nicotine: [5],
            flavorCombo: ["Rainbow Bear"],
            flavorInfo: "",
            image: "https://vapewh.com/cdn/shop/products/DRAGBAR-R6000-RnbwBr2_800x.jpg?v=1671681699"
        },
    ],
    [NORBAR_4000]: [
        {nicotine: [5], flavorCombo: ["Banana", "Ice"], flavorInfo: "", image: '',},
        {nicotine: [5], flavorCombo: ["Blueberry"], flavorInfo: "", image: '',},
        {nicotine: [5], flavorCombo: ["Cola", "Ice"], flavorInfo: "", image: '',},
        {nicotine: [5], flavorCombo: ["Cotton Candy", "Ice"], flavorInfo: "", image: '',},
        {nicotine: [5], flavorCombo: ["Energy", "Ice"], flavorInfo: "", image: '',},
        {nicotine: [5], flavorCombo: ["Grape"], flavorInfo: "", image: '',},
        {nicotine: [5], flavorCombo: ["Kiwi", "Passion Fruit", "Guava"], flavorInfo: "", image: '',},
        {nicotine: [5], flavorCombo: ["Lychee", "Ice"], flavorInfo: "", image: '',},
        {nicotine: [5], flavorCombo: ["Mango"], flavorInfo: "", image: '',},
        {nicotine: [5], flavorCombo: ["Mixed Fruit"], flavorInfo: "", image: '',},
        {nicotine: [5], flavorCombo: ["Orange Soda"], flavorInfo: "", image: '',},
        {nicotine: [5], flavorCombo: ["Peach Ice"], flavorInfo: "", image: '',},
        {nicotine: [5], flavorCombo: ["Pink lemonade"], flavorInfo: "", image: '',},
        {nicotine: [5], flavorCombo: ["Strawberry Ice"], flavorInfo: "", image: '',},
        {nicotine: [5], flavorCombo: ["Watermelon Ice"], flavorInfo: "", image: '',},
    ],
}
export const PRODUCTS = {
    [GUNNPOD_AIR_3000]:
        {
            title: "GUNNPOD AIR 3000",
            category: GUNNPOD_AIR_3000,
            flavorsInfo: PRODUCT_FLAVORS[GUNNPOD_AIR_3000],
            description: {
                quantity: '',
                detail: '',
            },
            images: PRODUCT_FLAVORS[GUNNPOD_AIR_3000][0]?.images,
            prices: PRODUCT_PRICES[GUNNPOD_AIR_3000]
        },
    // [NORBAR_4000]:
    //     {
    //         title: "NORBAR 4000",
    //         category: NORBAR_4000,
    //         flavorsInfo: PRODUCT_FLAVORS[NORBAR_4000],
    //         description: {
    //             quantity: '',
    //             detail: '',
    //         },
    //         images: PRODUCT_FLAVORS[NORBAR_4000][0]?.images,
    //         prices: PRODUCT_PRICES[NORBAR_4000]
    //     },
    [VAAL_4500]:
        {
            title: "VAL 4500",
            category: VAAL_4500,
            flavorsInfo: PRODUCT_FLAVORS[VAAL_4500],
            description: {
                quantity: '',
                detail: '',
            },
            images: PRODUCT_FLAVORS[VAAL_4500][0]?.images,
            prices: PRODUCT_PRICES[VAAL_4500]
        },

    [DRAGBAR_5000]:
        {
            title: "DRAGBAR 5000",
            category: DRAGBAR_5000,
            flavorsInfo: PRODUCT_FLAVORS[DRAGBAR_5000],
            description: {
                quantity: '',
                detail: '',
            },
            images: PRODUCT_FLAVORS[DRAGBAR_5000][0]?.images,
            prices: PRODUCT_PRICES[DRAGBAR_5000]
        },

    [IGET_PRO_5000]:
        {
            title: "IGET PRO 5000",
            category: IGET_PRO_5000,
            flavorsInfo: PRODUCT_FLAVORS[IGET_PRO_5000],
            description: {
                quantity: '',
                detail: '',
            },
            images: PRODUCT_FLAVORS[IGET_PRO_5000][0]?.images,
            prices: PRODUCT_PRICES[IGET_PRO_5000]
        },

    [ELF_BAR_6000]:
        {
            title: "ELF BAR 6000",
            category: ELF_BAR_6000,
            flavorsInfo: PRODUCT_FLAVORS[ELF_BAR_6000],
            description: {
                quantity: '',
                detail: '',
            },
            images: PRODUCT_FLAVORS[ELF_BAR_6000][0]?.images,
            prices: PRODUCT_PRICES[ELF_BAR_6000]
        },
    [DRAGBAR_6000]:
        {
            title: "DRAGBAR 6000",
            category: DRAGBAR_6000,
            flavorsInfo: PRODUCT_FLAVORS[DRAGBAR_6000],
            description: {
                quantity: '',
                detail: '',
            },
            images: PRODUCT_FLAVORS[DRAGBAR_6000][0]?.images,
            prices: PRODUCT_PRICES[DRAGBAR_6000]
        }
};

export const productDisplayAll = () => {
    let send = [];

    Object.values(PRODUCTS)?.forEach((product, key) => {

        (product?.flavorsInfo).forEach((flavor, key) => {
            send.push({
                title: (product?.title + " " + flavor?.flavorCombo.join(" - ")).toUpperCase(),
                category: product?.category,
                nicotine: flavor?.nicotine.join(", "),
                description: product?.description?.detail,
                image: flavor?.image,
                flavor: flavor?.flavorCombo.join(" - ").toUpperCase(),
                extraFlavorInformation: flavor?.flavorInfo,
                price: {
                    mp: Number(product?.prices?.MP),
                    discount: (Number(product?.prices?.discount)),
                    amount: Number(product?.prices?.MP) - Number(product?.prices?.MP) * (Number(product?.prices?.discount) / 100)
                }
            });
        })

    });
    return send;
};

export const productDisplayByCategory = (category) => {
    let send = [];
    let product = PRODUCTS[category];
    (product?.flavorsInfo).forEach((flavor, key) => {
        send.push({
            title: flavor?.flavorCombo.join(" - ").toUpperCase(),
            category: product?.category,
            nicotine: flavor?.nicotine.join(", "),
            description: product?.description?.detail,
            image: flavor?.image,
            flavor: flavor?.flavorCombo.join(" - ").toUpperCase(),
            extraFlavorInformation: flavor?.flavorInfo,
            price: {
                mp: Number(product?.prices?.MP),
                discount: (Number(product?.prices?.discount)),
                amount: Number(product?.prices?.MP) - Number(product?.prices?.MP) * (Number(product?.prices?.discount) / 100)
            }
        });
    })

    return send;
}


export const productDisplayAllAdmin = () => {
    let send = [];

    Object.values(PRODUCTS)?.forEach((product, key) => {

        (product?.flavorsInfo).forEach((flavor, key) => {
            send.push({
                title: (product?.title + " " + flavor?.flavorCombo.join(" - ")).toUpperCase(),
                category: product?.category,
                nicotine: flavor?.nicotine.join(", "),
                description: product?.description?.detail,
                image: flavor?.image,
                flavor: flavor?.flavorCombo.join(" - ").toUpperCase(),
                extraFlavorInformation: flavor?.flavorInfo,
                price: {
                    cp: Number(product?.prices?.CP),
                    mp: Number(product?.prices?.MP),
                    min_mp: Number(product?.prices?.min_MP),
                    discount: (Number(product?.prices?.discount)),
                    amount: Number(product?.prices?.MP) - Number(product?.prices?.MP) * (Number(product?.prices?.discount) / 100),
                    //seling prices
                    minPriceToSell: Number(product?.prices?.hamroPrices?.minPriceToSell),
                    cpw: Number(product?.prices?.hamroPrices?.cpw),
                    singlePrice: Number(product?.prices?.hamroPrices?.singlePrice),
                }
            });
        })

    });
    return send;
};