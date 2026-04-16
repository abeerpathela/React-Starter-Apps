import React from "react";
import { NavLink } from "react-router-dom";

function BlogDetails({post}){
    return(
        <div className="mt-5">
            <NavLink to={`/blog/${post.id}`}>
                <span className="text-xl font-bold ">{post.title}</span>
            </NavLink>
            <p className="italic">
                By <span>{post.author}</span> On {" "} <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
                    <span className="font-semibold underline decoration-dashed">{post.category}</span>
                </NavLink>
            </p>
            <p className="text-gray-700">
                Posted On {post.date}
            </p>
            <p className="mt-3">
                {post.content}
            </p>
            <div className="mt-3">
                {
                    post.tags.map((tag,index)=>(
                        <NavLink to={`/tags/${tag.replaceAll(" ","-")}`} key={index}>
                            <span className="text-blue-600 mr-3">{`#${tag}`}</span>
                        </NavLink>
                    ))
                }
            </div>
        </div>
    )
}

export default BlogDetails;