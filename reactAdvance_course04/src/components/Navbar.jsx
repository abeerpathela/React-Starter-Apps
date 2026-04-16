import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import mainIcon from "../assets/mainIcon.png";
import { NavLink } from "react-router-dom";

function Navbar(){
    return(
        <div className="bg-gray-300">

            <div className="flex justify-between items-center py-2">

                <div>
                    <NavLink to="/" className="flex justify-center items-center space-x-4 ml-5">
                        <img src={mainIcon} className="h-20 w-30"></img>
                        <p className="text-3xl text-green-800">ShopoCart</p>
                    </NavLink>
                </div>

                <div className="flex justify-center items-center space-x-8 mr-40">

                    <NavLink to="/">
                        <p className="text-2xl text-gray-700">Home</p>
                    </NavLink>

                    <NavLink to="/cart">
                        <div><CiShoppingCart className="text-4xl"/></div>
                    </NavLink>

                </div>
            
            </div>
        
        </div>
    )
}

export default Navbar;