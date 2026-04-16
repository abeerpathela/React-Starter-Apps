import React, { useContext } from "react";
import Spinner from "./Spinner";
import AppContext from "../context/AppContext";
import BlogDetails from "./BlogDetails";

function Blogs(){
    // consuming the data from context api 
    const {loading,posts}=useContext(AppContext);
    const safePosts = posts || [];
    return(
        <div>
            {
                loading ? (<Spinner/>) : (
                    safePosts.length===0 ? (
                        <div>
                            No posts found !!
                        </div>
                        ):
                        (
                            safePosts.map((post)=>(
                                <BlogDetails key={post.id} post={post}/>
                            ))
                        )
                    )
            }
        </div>
    )
}

export default Blogs;