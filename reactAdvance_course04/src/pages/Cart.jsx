import React, { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";

function Cart(){
    const cart=useSelector((state)=> state.cart);
    const [totalAmount,setTotalAmount]=useState(0);

    useEffect(()=>{
        setTotalAmount(
            cart.reduce((accumulate,current) => {
                return accumulate+current.price
            },0
        ));
    },[cart])

    return(
        <div>
            {
                cart.length > 0 ? 
                (
                    <div>
                        {
                            cart.map((item,index)=>{
                                    return <CartItem key={item.id} item={item} itemIndex={index}/>
                            })
                        }
                    </div>
                ) :
                (
                    <div>
                        <h1 className="text-2xl font-bold">Cart is Empty!!</h1>  
                        <NavLink to="/">
                            <button className="py-2 px-6 text-center rounded-lg bg-green-500">Shop Now</button>
                        </NavLink>  
                    </div>
                )
            }

            <div>
                <div>Your Cart</div>
                <div>Summary</div>
                <p>
                    <span>Total Items: {cart.length}</span>
                </p>
            </div>

            <div>
                <p>Total Amount: {totalAmount}</p>
            </div>
        </div>
    )
}

export default Cart;