import React, { useContext } from "react";
import Header from './Header';
import Blogs from './Blogs';
import Pagination from './Pagination';
import AppContext from '../context/AppContext';

function Home(){
    const {loading}=useContext(AppContext);

    return(
        <div className="flex flex-col justify-center items-center">
      <Header/>
      <div className='max-w-[680px]'><Blogs/></div>
      {!loading && 
          <div className=''><Pagination/></div>
      }
    </div>
    )
}

export default Home;