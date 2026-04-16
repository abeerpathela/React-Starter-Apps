import React, { useState } from "react";
import Card from './card'
import ProductDate from './productDate'
import './productItem.css'

function ProductItem(props){
    const [title,setTitle]=useState(props.title);

    function clickHandler(){
        setTitle("Popcorn");

    };
    return(
        <Card className="product-item">
            <ProductDate date={props.date}/>
            <div className="product-item_description">
                <h2>{title}</h2>
            </div>
            <button className="product-item_button" onClick={clickHandler}>Add to cart </button>
        </Card>
    );
}

export default ProductItem;