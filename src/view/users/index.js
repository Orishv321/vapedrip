import React, {useEffect, useState} from "react";
import Category from "./component/category";

export default function UserMainView() {
    const [categorySelected, setCategorySelected] = useState("all");
    const [displayProducts, setDisplayProducts] = useState([]);

    let products = [
        {
            image: 'https://image.vapesourcing.com/imagecache/c/images/202210/ZOVOO_Dragbar_B5000_(4).jpg',
            title: 'DragBar 5000',
            price: 2500,
            discount: 10,
            category: "dragbar"
        }
    ];

    const categoryType = (data) => setCategorySelected(data);
    return (
        <section>
            <Category categoryType={categoryType}/>
            <section className={"bg-gray-50 mt-2 p-2 border"}>
                <div className={"text-2xl font-bold"}>Products</div>
                {
                    products?.map((data, key) => <div className={"flex items-center border-b-2"} key={key}>
                            <img className={"h-20 w-20 mb-2"}
                                 src="https://image.vapesourcing.com/imagecache/c/images/202210/ZOVOO_Dragbar_B5000_(4).jpg"
                                 alt="vape image"/>
                            <div className={"flex flex-col ml-2"}>
                                <span className={'text-2xl'}>{data.title}</span>
                                <div className={"flex"}>
                                    <div>Rs. <span className={data?.discount ? "line-through" : ""}>{data.price}</span>
                                    </div>
                                    {
                                        data?.discount &&
                                        <div className={"ml-2"}>
                                            Rs.<span> {Number(data?.price) - Number(data.price) * Number(data?.discount) / 100}</span>
                                        </div>
                                    }
                                </div>


                            </div>
                        </div>
                    )
                }
            </section>
        </section>
    );
}
