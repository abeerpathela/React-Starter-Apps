import Navbar from "../components/Navbar";
import mainIcon from "../assets/mainIcon.png";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";


const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading,setLoading]=useState(false);
  const [products,setProducts]=useState([]);

  async function fetchProductData(){
    setLoading(true);
    try{
        const response=await fetch(API_URL);
        const data=await response.json();

        setProducts(data);
    }
    catch(error){
        alert("Error in fetching product data!");
        console.log(error);
        setProducts([]);
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchProductData();
  },[]);

  return (
    <div>
        {
            loading ? (<Spinner/>):
            products.length > 0 ? 
            (
                products.map((product)=>{
                   return  <Product key={product.id} product={product}/>
                })
            ) :
            (
            <div>
                <p> No data found!!</p>
            </div> 
            )
        }
    </div>
  )
};

export default Home;
