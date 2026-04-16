import React from "react";
import { useState } from "react";
import './productForm.css';

function ProductForm(props){

    const[newtitle,setTitle]=useState("Default title");
    const [newdate,setDate]=useState()
    function titleChangeHandler(event){
        setTitle(event.target.value);
    }
    function DateChangeHandler(event){
        setDate(event.target.value);
    }
    function submitHandler(event){
        event.preventDefault();         // this is to stop the default behaviour of the button 
        const productData={
            title: newtitle,
            date: newdate
        }
        // console.log(productData);

        props.onSaveProduct(productData);
    }
    return(
    <form className="new-product" onSubmit={submitHandler}>
    <div className="new-product_title">
        <label>Title</label>
        <input type="text" onChange={titleChangeHandler} value={newtitle}></input>
    </div>
    <div className="new-product_date">
        <label>Date</label>
        <input type="date" min='2023-01-01' max="2023-12-31" onChange={DateChangeHandler} value={newdate}></input>
    </div>
    <div className="new-product_button">
        <button type="submit">Add to cart</button>
    </div>
    </form>
    );
}

export default ProductForm;
