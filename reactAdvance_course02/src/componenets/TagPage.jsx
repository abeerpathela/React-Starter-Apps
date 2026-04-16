import React from "react";
import Header from "./Header";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";
import Blogs from "./Blogs";
import Pagination from "./Pagination";

function TagPage(){
    const navigate=useNavigate();
    const location=useLocation();
    const tag=location.pathname.split("/").at(-1);
    return(
        <div>
            <Header/>
            <div className="flex justify-center items-center flex-col ">
            <div className="flex justify-evenly items-center space-x-4">
                <button onClick={()=>{
                    navigate(-1);
                }}
                className="border-gray-400 border-2 border-solid px-6 py-2 rounded-lg"
                >Back</button>
                <h2 className="flex space-x-2"><span className="text-2xl font-semibold"> Blogs Tagged </span> <span className="text-3xl text-blue-500">{`#${tag}`}</span></h2>
            </div>
            <div className="max-w-[560px]"><Blogs/></div>
            </div>
            <Pagination/>
        </div>
    )
}

export default TagPage;