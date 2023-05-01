import React, {useEffect, useState} from "react";
import Category from "./component/category";
import {productDisplayAll, productDisplayByCategory, PRODUCTS} from "../../data/datalist";

export default function UserMainView() {
    const [categorySelected, setCategorySelected] = useState("all");
    const [displayProducts, setDisplayProducts] = useState([]);

    let products = PRODUCTS
    useEffect(() => {
        setDisplayProducts(productDisplayAll());
        // setDisplayProducts();
    }, []);

    useEffect(() => {
        if (categorySelected === "all") {
            setDisplayProducts(productDisplayAll());
        } else {
            setDisplayProducts(productDisplayByCategory(categorySelected));
        }
    }, [categorySelected]);
    const categoryType = (data) => setCategorySelected(data);
    return (
        <section>
            <Category categoryType={categoryType}/>
            <section className={"flex flex-col flex-wrap bg-gray-50 mt-2 p-2 border"}>

                {
                    categorySelected !== "all"
                    && <div className={"text-2xl font-bold"}>{categorySelected.replaceAll("_", " ").toUpperCase()}</div>
                    || <div className={"text-2xl font-bold"}>Products</div>

                }

                {
                    displayProducts?.map((data, key) => <div className={"flex items-center border-b-2"} key={key}>
                            <img className={"h-20 w-20 mb-2"}
                                 src={data.image}
                                 alt="vape image"/>
                            <div className={"flex flex-col ml-2"}>
                                <div>
                                    <span className={'text-2xl'}>{data.title}</span> {
                                    data?.nicotine && <span
                                        className={'text-1xl m-2'}>{data.nicotine}%</span>}
                                </div>
                                <div className={"flex"}>
                                    <div>Rs. <span
                                        className={data?.price?.discount ? "line-through" : ""}>{data?.price?.mp}</span>
                                    </div>
                                    {
                                        data?.price?.discount ?
                                        <div className={"ml-2"}>
                                            Rs.<span> {data?.price?.amount}</span>
                                        </div> : ""
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
