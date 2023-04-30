import React from 'react';

function Category({categoryType}) {
    const categories = [
        {
            image: "https://th.bing.com/th/id/OIP._XbHr-dhVE12xWc4WfzxZgHaDt?pid=ImgDet&rs=1",
            title: "Gunnpod Air 3000",
            category: "gunnpod_air_3000"

        }, {
            image: "https://vapewizarddxb.com/wp-content/uploads/2022/08/VAAL-EP-4500-760x760.png",
            title: "Val",
            category: "val"

        },
        {
            image: "https://th.bing.com/th/id/R.9fd4e5da0bbe2091197897f4b3f3d364?rik=F5ciwxTB0jAx1Q&pid=ImgRaw&r=0",
            title: "DragBar 5000",
            category: "drag_bar_5000"
        },
        {
            image: "https://cdn.shopify.com/s/files/1/0551/1217/1601/products/iget-pro-fruit-gummy-min_grande.jpg?v=1664899911",
            title: "IGET Pro 5000",
            category: "iget_pro_5000"
        },
        {
            image: "https://cdn.shopify.com/s/files/1/0035/7721/7139/products/WhatsAppImage2022-05-13at4.34.17PM_580x@2x.jpg?v=1652476316",
            title: "Elf bar",
            category: "elf_bar_5000"
        },
        {
            image: "https://th.bing.com/th/id/OIP.rbmmsSfSKAVlQKP_WUVAfQHaHa?pid=ImgDet&rs=1",
            title: "DragBar 6000",
            category: "drag_bar_6000"

        },


    ];
    const imageOnError = (event) => {
        event.currentTarget.src = "https://cdn2.iconfinder.com/data/icons/vape/100/05-512.png";
        event.currentTarget.className = "error";
    }

    return (
        <section className="flex-col bg-gray-50  border">
            <section className="flex justify-between p-2">
                <span className={"text-3xl font-bold"}> Category</span>
                <button
                    className="justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold
                   shadow-sm text-white hover:bg-white hover:text-black hover:border-2"
                    type={"button"}
                    onClick={() => categoryType("all")}> Display All
                </button>
            </section>

            <section className="flex">
                {
                    categories.map((category, key) => (
                        <div key={key}
                             className="mr-2 flex items-center p-2 cursor-pointer
                             hover:rounded-3xl hover:border-blue-300 hover:border-2"
                             onClick={() => categoryType(category.category)}>
                            <div className={"m-2 rounded-xl border-2"}>
                                <img className={"h-10 w-10"} src={category?.image ?? ""}
                                     onError={(event) => imageOnError}/>
                            </div>
                            <span className={"flex flex-col"}>
                               {category?.title ?? ""}
                            </span>
                        </div>
                    ))}
            </section>
        </section>
    );
}

export default Category;