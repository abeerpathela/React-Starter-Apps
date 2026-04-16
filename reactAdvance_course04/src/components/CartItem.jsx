import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

function CartItem({item,itemIndex }){
    const dispatch=useDispatch();

    const removeFromCart = ()=>{
        dispatch(remove(item.id));
        toast.error("item removed successfully!");
    }
    return(
        <div>

            <div>

                <div>
                    <img src={item.image}/>
                </div>
                <div>
                    <h1>{item.title}</h1>
                    <h1>{item.description}</h1>
                    <div>
                        <p>{item.price}</p>
                    </div>
                    <p>
                        <div><MdDelete onClick={removeFromCart} /></div>
                    </p>
                </div>

            </div>

        </div>
    )
}

export default CartItem;