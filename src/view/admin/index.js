import React from "react";
import {productDisplayAllAdmin} from "../../data/datalist";

function Admin() {
    const product = productDisplayAllAdmin();
    return (
        <section className={"bg-gray-50 mt-2 p-2 border"}>

            <div className={"text-2xl font-bold"}>Products</div>


            {
                product?.map((data, key) => <div className={"flex items-center border-b-2"} key={key}>
                        <img className={"h-20 w-20 mb-2"}
                             src={data.image}
                             alt="vape image"/>
                        <div className={"flex flex-col ml-2"}>
                            <div>
                                <span className={'text-2xl'}>{data.title}</span>
                                {
                                    data?.nicotine && <span
                                        className={'text-1xl m-2'}>{data.nicotine}%</span>
                                }
                            </div>
                            <div className={"flex flex-col"}>
                                <div className={"flex flex-col"}>
                                    <div>
                                        <div className={"font-bold"}>Sell info</div>

                                        <span className={"mr-2"}>
                                            <span className={"font-bold"}>
                                                Sale price </span> Rs. {data?.price?.amount}
                                        </span>|
                                        <span className={"mx-2"}>
                                            <span className={"font-bold"}>
                                                Market price
                                            </span> Rs. {data?.price?.mp}
                                        </span>|
                                        <span className={"ml-2"}>
                                            <span
                                                className={"font-bold"}> Min market price</span> Rs. {data?.price?.min_mp}
                                        </span>
                                    </div>

                                    <div>
                                        <div className={"font-bold"}>Product Price info</div>
                                        <div>
                                             <span className={"mr-2"}>
                                            <span className={"font-bold"}>
                                                 Min price to sale
                                            </span> Rs. {data?.price?.minPriceToSell}
                                        </span>|
                                        </div>
                                        <div>
                                        <span className={"mr-2"}>
                                            <span className={"font-bold"}>
                                                 Wholesale Price
                                            </span> Rs. {data?.price?.cpw}
                                        </span>|
                                            <span className={"ml-2"}>
                                            <span
                                                className={"font-bold"}>Single Price</span> Rs. {data?.price?.singlePrice}
                                        </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </section>
    );
}

export default Admin;