import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { remove , add } from "../redux/slices/cartSlice";

function Product({product}){

    const Cart=useSelector((state) => state.cart);

    const dispatch=useDispatch();

    const addToCart = () =>{
        dispatch(add(product));
        toast.success("Item added to cart")
    }

    const removeFromCart = () =>{
        dispatch(remove(product.id));
        toast.error("item removed successfully");
    }
    return(
        <div>
            <div>
                <div>
                    <p>{product.title}</p>
                </div>
                <div>
                    <p>{product.description}</p>
                </div>
                <div>
                    <img src={product.image}/>
                </div>
                <div>
                    <p>{product.price}</p>
                </div>
                <div>
                        {
                            Cart.some((p)=> p.id===product.id) ? 
                            (<button onClick={removeFromCart}>Remove Item</button>) : (<button onClick={addToCart}>Add to Cart</button>)
                        }
                </div>
            </div>
        </div>
    )
}

export default Product;