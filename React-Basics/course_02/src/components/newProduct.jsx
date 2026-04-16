import React from "react";
import './newProduct.css';
import ProductItem from "./productItem";
import ProductForm from "./productForm";

function NewProduct(props){

    function saveProduct(productData){
        console.log("I am inside newProduct.jsx");
        console.log(productData);
        props.functionCallByApp;
    }

    return(
        <>
        <ProductForm onSaveProduct={saveProduct}/>
        </>
    )
}

export default NewProduct;