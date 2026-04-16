import React from "react";
import Card from "./card";
import './tours.css';
function Tours({tours,removeTour}){
    return(
        <>
        <div className="main-heading-div">
        <div className="main-heading">
            <h2>Plan With Love</h2>
        </div>
        <div className="All-Tours">
            {
            tours.map((tour)=>{
                return <Card {...tour} removeTour={removeTour} />
            })
            }
        </div>
        </div>
        </>
    )
}

export default Tours;