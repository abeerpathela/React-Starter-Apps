import React, { useContext } from "react";
import AppContext from "../context/AppContext";

function Pagination(){
    const {currentPage,setCurrentPage,totalPages,pageChangeHandler}=useContext(AppContext);
    return(
        <div className="w-full flex items-center justify-center flex-col mt-5">
            <div className="flex justify-evenly items-center gap-x-40">
           {
                currentPage>1 && 
                <button onClick={()=>{
                    pageChangeHandler(currentPage-1);
                }} className="text-center py-2 px-6 text-white font-bold bg-blue-500">Previous</button>
           }

           {
                currentPage<totalPages &&
                <button onClick={()=>{
                    pageChangeHandler(currentPage+1);
                }} className="text-center py-2 px-6 text-white font-bold bg-blue-500">Next</button>
           } 
           </div>
           <div>
                <span>Page <span className="font-bold">{currentPage}</span> of <span>{totalPages}</span></span>
           </div>
        </div>
    )
}

export default Pagination;