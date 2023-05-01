import React from 'react';
import {CATEGORY} from "../../../data/datalist";

function Category({categoryType}) {
    const categories = CATEGORY;

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