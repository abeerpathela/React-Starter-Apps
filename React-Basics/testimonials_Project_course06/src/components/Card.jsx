import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

function Card(props){
    let review=props.review;
    return(
        <div className="flex flex-col items-center justify-center space-y-3">
            <div className="absolute -top-[-130px] left-110">
            <div className="relative bg-purple-600 p-[6px] rounded-full">
                <img src={review.image} className="rounded-full h-33 w-37"></img>
            </div>
            </div>
            <div>
                <p className="text-2xl font-bold">{review.name}</p>
            </div>
            <div>
                <p className="text-[#DAB2FF]">{review.job}</p>
            </div>
            <div>
               <FaQuoteLeft  className="text-purple-500"/>
            </div>
            <div>
                <p className="text-[#6A7282]">{review.text}</p>
            </div>
            <div>
                <FaQuoteRight  className="text-purple-500"/>
            </div>
        </div>
    )
}

export default Card;