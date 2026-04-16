import React, { useContext, useEffect, useState } from "react";
import Header from "./Header";
import { useLocation, useNavigation, useNavigate } from "react-router-dom";
import AppContext from "../context/AppContext";
import { BaseUrl } from "../BaseUrl";
import Spinner from "./Spinner";
import BlogDetails from "./BlogDetails";


function BlogPage(){
    const [Blog,setBlog]=useState(null);
    const [relatedBlogs,setRelatedBlogs]=useState([]);

    const location=useLocation();
    const navigate=useNavigate();

    const {loading,setLoading}=useContext(AppContext);

    const blogId=location.pathname.split("/").at(-1);

    async function fetchRelatedBlogs(){
        setLoading(true);
        let url = `${BaseUrl}get-blog?blogId=${blogId}`;
        try{
            const response=await fetch(url);
            const data=await response.json();
            setBlog(data.blog); 
            setRelatedBlogs(data.relatedBlogs);
        }
        catch(error){
            console.log("Blog id call failed!!");
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false);
    }
    useEffect(()=>{
        if(blogId){
            fetchRelatedBlogs();
        }

    },[location.pathname])
    return(
        <div>
            <Header/>
            <div className="flex justify-center items-center mt-4 font-semibold text-xl">
                <button
                    onClick={()=> navigate(-1)}
                    className="border-gray-400 border-2 border-solid px-6 py-2 rounded-lg"
                >
                    Back
                </button>
            </div>
            {
                loading ? (<div className="flex justify-center items-center"><Spinner/></div>) : 
                    Blog ? (
                        <div className=" flex flex-col justify-center items-center ">
                            <div className="max-w-[560px]"> 

                               <div className="mb-6"> <BlogDetails post={Blog}/> </div>
                                <h2 className="text-3xl font-bold text-center">Related Blogs</h2>
                                {
                                     relatedBlogs.map((post)=>(
                                        <div key={post.id}>
                                            <BlogDetails post={post} />
                                        </div>
                                     ))
                                }
                            </div>
                            </div>
                            ) 
                            
                            : 
                        
                            ( 
                                <div>
                                    <p>No Blog Found </p>
                                </div>
                            )
            }
        </div>
    )
}

export default BlogPage;