//Category info
export const GUNNPOD_AIR_3000 = 'gunnpod_air_3000';
export const VAL_4500 = 'val_4500';
export const DRAGBAR_5000 = 'dragbar_4500';
export const IGET_PRO_5000 = 'iget_pro_5000';
export const ELF_BAR_5000 = 'elf_bar_5000';
export const DRAGBAR_6000 = 'drag_bar_6000';
export const NORBAR = 'nor_bar';

export const CATEGORY = [
    {
        image: "https://th.bing.com/th/id/OIP._XbHr-dhVE12xWc4WfzxZgHaDt?pid=ImgDet&rs=1",
        title: "Gunnpod Air 3000",
        category: GUNNPOD_AIR_3000

    }, {
        image: "https://vapewizarddxb.com/wp-content/uploads/2022/08/VAAL-EP-4500-760x760.png",
        title: "Val",
        category: VAL_4500

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
        category: ELF_BAR_5000
    },
    {
        image: "https://th.bing.com/th/id/OIP.rbmmsSfSKAVlQKP_WUVAfQHaHa?pid=ImgDet&rs=1",
        title: "DragBar 6000",
        category: DRAGBAR_6000

    }, ,
    {
        image: "https://th.bing.com/th/id/OIP.rbmmsSfSKAVlQKP_WUVAfQHaHa?pid=ImgDet&rs=1",
        title: "NORBAR 6000",
        category: NORBAR

    },
];

export const PRODUCT_PRICES = {
    [GUNNPOD_AIR_3000]: {
        CP: 800 + 150,
        MP: 1000,
        discount: 0,
        hamroPrices: {
            maxPrice: 1000,
            minPriceToSell: 900
        }
    },
    [VAL_4500]: {
        CP: 1900 + 150,
        MP: 1000,
        discount: 10,
        hamroPrices: {
            maxPrice: 1,
            minPriceToSell: 2350
        }
    },
    [DRAGBAR_5000]: {
        CP: 1750 + 150,
        MP: 2500,
        discount: 10,
        hamroPrices: {
            maxPrice: 2500,
            minPriceToSell: 2250
        }
    },
    [IGET_PRO_5000]: {
        CP: 1550 + 150,
        MP: 2800,
        discount: 10,
        hamroPrices: {
            maxPrice: 2800,
            minPriceToSell: 2300
        }
    }, [DRAGBAR_6000]: {
        CP: 2000 + 150,
        MP: 2800,
        discount: 10,
        hamroPrices: {
            maxPrice: 2800,
            minPriceToSell: 2300
        }
    }, [NORBAR]: {
        CP: 1100 + 150,
        MP: 2800,
        discount: 10,
        hamroPrices: {
            maxPrice: 2800,
            minPriceToSell: 2300
        }
    },
};

export const PRODUCT_FLAVORS = {
    [GUNNPOD_AIR_3000]: [
        {nicotine: [5], flavorCombo: ["water mellow", "ice"], flavorInfo: "", image: '',}
    ],
    [VAL_4500]: [
        {nicotine: [5], flavorCombo: [""], flavorInfo: "", image: '',}
    ],
    [DRAGBAR_5000]: [
        {nicotine: [5], flavorCombo: [""], flavorInfo: "", image: '',}
    ],
    [IGET_PRO_5000]: [
        {nicotine: [5], flavorCombo: [""], flavorInfo: "", image: '',}
    ],
    [ELF_BAR_5000]: [
        {nicotine: [5], flavorCombo: [""], flavorInfo: "", image: '',}
    ],
    [DRAGBAR_6000]: [
        {nicotine: [5], flavorCombo: [""], flavorInfo: "", image: '',}
    ],
    [NORBAR]: [
        {nicotine: [5], flavorCombo: [""], flavorInfo: "", image: '',}
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

    [VAL_4500]:
        {
            title: "VAL 4500",
            category: VAL_4500,
            flavorsInfo: PRODUCT_FLAVORS[VAL_4500],
            description: {
                quantity: '',
                detail: '',
            },
            images: PRODUCT_FLAVORS[VAL_4500][0]?.images,
            prices: PRODUCT_PRICES[VAL_4500]
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

    [ELF_BAR_5000]:
        {
            title: "ELF BAR 5000",
            category: ELF_BAR_5000,
            flavorsInfo: PRODUCT_FLAVORS[ELF_BAR_5000],
            description: {
                quantity: '',
                detail: '',
            },
            images: PRODUCT_FLAVORS[ELF_BAR_5000][0]?.images,
            prices: PRODUCT_PRICES[ELF_BAR_5000]
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
        },
    [NORBAR]:
        {
            title: "NORBAR",
            category: NORBAR,
            flavorsInfo: PRODUCT_FLAVORS[NORBAR],
            description: {
                quantity: '',
                detail: '',
            },
            images: PRODUCT_FLAVORS[NORBAR][0]?.images,
            prices: PRODUCT_PRICES[NORBAR]
        },
};

export const productDisplayAll = () => {
    let send = [];

    Object.values(PRODUCTS)?.forEach((product, key) => {

        (product?.flavorsInfo).forEach((flavor, key) => {
            send.push({
                title: (product?.title + flavor?.flavorCombo.join(" - ")).toUpperCase(),
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
    console.log(send);
    return send;
};

export const productDisplayByCategory = (category) => {
    let send = [];
    let product = PRODUCTS[category];
    (product?.flavorsInfo).forEach((flavor, key) => {
        send.push({
            title: (product?.title + flavor?.flavorCombo.join(" - ")).toUpperCase(),
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

    console.log(send);
    return send;
}