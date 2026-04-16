import React from "react";
import Card from "./Card.jsx";
import { useState } from "react";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

function Testimonials(props){
    let reviews=props.reviews;
    const [index,setIndex]=useState(0);
    function leftHandler(){
        let newIndex=index-1;
        if(newIndex<0){
            newIndex=reviews.length-1;
        }
        setIndex(newIndex);
    }
    function rightHandler(){
        let newIndex=index+1;
        if(newIndex>reviews.length-1){
            newIndex=0;
        }
        setIndex(newIndex);
    }
    function surpriseHandler(){
        let newIndex=Math.floor(Math.random()*reviews.length);
        setIndex(newIndex);
    }
    return(
        <div className="flex flex-col items-center justify-center space-y-6 gap-[1px] mt-6 bg-white rounded-[12px] px-20 py-8 shadow-lg group">
            <Card review={reviews[index]}/>
            <div className=" flex gap-[8px] text-xl">
                        <button><GrPrevious className="text-purple-500" onClick={leftHandler}/></button>
                        <button><GrNext className="text-purple-500" onClick={rightHandler}/></button>
            </div>
            <div>
                <button className="text-white bg-purple-500 px-8 py-2 font-bold text-lg rounded-[8px]" onClick={surpriseHandler}>Surprise Me</button>
            </div>
        </div>
    );
}

export default Testimonials;