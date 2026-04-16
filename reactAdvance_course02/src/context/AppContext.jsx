import { createContext, useState } from "react";
import { BaseUrl } from "../BaseUrl";

const AppContext=createContext();                                       // first step of context api 

export default AppContext;

function AppContextProvider({children}){
    const [loading,setLoading]=useState(false);
    const [posts,setPosts]=useState([]);
    const [currentPage,setCurrentPage]=useState(1);
    const [totalPages,setTotalPages]=useState(null);

    async function fetchBlogPosts(page = 1,tag=null,category=null){
        setLoading(true);
        let url=`${BaseUrl}get-blogs?page=${page}`;
        if(tag){
            url=url+`&tag=${tag}`;
        }
        if(category){
            url=url+`&category=${category}`;
        }
        try{
            const result = await fetch(url);
            const data= await result.json();
            // setLoading(true);
            // console.log(data);
            setCurrentPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
        }
        catch(error){
            alert("Error in fetching posts!!");
            setCurrentPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);
    }

    function pageChangeHandler(page){
        setCurrentPage(page);
        fetchBlogPosts(page);
    }

    const value={
        loading,
        setLoading,
        posts,
        setPosts,
        currentPage,
        setCurrentPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        pageChangeHandler
    }

    return <AppContext.Provider value={value}>
                {children}
        </AppContext.Provider>
}

export {AppContextProvider};