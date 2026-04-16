import './App.css'
import { useContext,useEffect } from 'react';
import AppContext from './context/AppContext';
import { BrowserRouter as Router , Route, Routes, useSearchParams, useLocation } from 'react-router-dom';
import Home from './componenets/Home';
import BlogPage from './componenets/BlogPage';
import TagPage from './componenets/TagPage';
import CategoryPage from './componenets/CategoryPage';

function App() {
  const {fetchBlogPosts,loading}=useContext(AppContext);
  const [searchParams, setSearchParams]=useSearchParams();
  const location=useLocation();

  useEffect(()=>{
      const page=searchParams.get("page") ?? 1;
      if(location.pathname.includes("tags")){
        const tag=location.pathname.split("/").at(-1).replaceAll("-"," ");
        fetchBlogPosts(Number(page),tag,null);
      }
      else if(location.pathname.includes("categories")){
        const category=location.pathname.split("/").at(-1).replaceAll("-"," ");
        fetchBlogPosts(Number(page),null,category);
      }
      else{
        fetchBlogPosts(Number(page),null,null);
      }
  },[location.pathname , location.search]);   // when the location.pathname , location.search changes this useEffect will work d r
  
  return (
    <div>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/blog/:blogId' element={<BlogPage/>}/>
          <Route path='/tags/:tag' element={<TagPage/>}/>
          <Route path='/categories/:category' element={<CategoryPage/>}/>
      </Routes>
    </div>
  )
}

export default App
