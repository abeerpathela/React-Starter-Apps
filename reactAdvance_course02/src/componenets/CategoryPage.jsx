import React from "react";
import Header from "./Header";
import { useNavigation , useLocation, useNavigate} from "react-router-dom";
import Blogs from "./Blogs";
import Pagination from "./Pagination";
import BlogDetails from "./BlogDetails";

function CategoryPage(){

    const navigate=useNavigate();
    const location=useLocation();
    const category=location.pathname.split("/").at(-1);

    return(
        <div className="flex flex-col justify-center items-center w-full ">
            <Header/>
            <div className="flex space-x-6 justify-evenly items-center">
                <button
                    onClick={()=>{
                        navigate(-1);
                    }}
                    className="rounded-lg border-gray-400 border-solid border-2 px-6 py-2 text-xl font-semibold"
                >
                    Back
                </button>
                <h2 className="space-x-1">
                    <span className="text-xl">Blogs on</span> <span className="font-bold text-2xl">{category}</span>
                </h2>
            </div>
            <div className="max-w-[560px] "><Blogs/></div>
            <Pagination/>
        </div>
    )
}

export default CategoryPage;