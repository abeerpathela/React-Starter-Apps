import './App.css'
import Navbar from './components/Navbar.jsx';
import Filter from './components/Filter.jsx';
import Spinner from './components/Spinner.jsx';
import Cards from './components/Cards.jsx';
import {apiUrl,filterData} from './data.js';
import { useState,useEffect } from 'react';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  const [courses,setCourses]=useState(null);
  const [loading,setLoading]=useState(true);
  const [category,setCategory]=useState(filterData[0].title);
  useEffect(()=>{                             // by this we will extract the data from provided API 
    const fetchData=async ()=>{
      setLoading(true);
      try{
        const res=await fetch(apiUrl);      // this will fetch the api for data
        const output=await res.json();      // will make this data in json format 
        setCourses(output.data);            // store this data of json format in a variable named courses 
      }
      catch(error){
        toast.error("Something went error");
      }
      setLoading(false);
    }
    fetchData();
  },[]);
  
  // setTimeout(() => {
  //   setLoading(true);
  // }, 1);

  return (
   <div className='flex flex-col min-h-screen bg-[#181818] text-white w-full'>
    <div>
    <Navbar/>
    </div>
    <div>
    <Filter filterData={filterData} category={category} setCategory={setCategory}/>
    </div>
    <div>
    {loading ?(<Spinner />):(<Cards courses={courses} category={category}/>)}
    </div>
   </div>
  )
}

export default App
