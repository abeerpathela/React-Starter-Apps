import React, { useState } from 'react';
import data from './data';
import Tours from './components/tours';
import './App.css';

function App() {

  const [tours,setTours]=useState(data);

  function notInterestedHandler(idOfTour){
    const newTour=tours.filter(tour => tour.id!==idOfTour);
    setTours(newTour);
  }

  if(tours.length==0){
    return(
      <div className='Not-Found-main'>
        <div className="content">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtt5PrpCqtEGG-XX1tcSjLAH-xwRWo6XI5hw&s"></img>
        <h1>No Tours Left</h1>
        <button onClick={()=>setTours(data)} className="refresh-button">Refresh the page</button>
        </div>
      </div>
    )
  }
  return (
    <>
      <div> 
        <Tours tours={tours} removeTour={notInterestedHandler}/>
      </div>
    </>
  )
}

export default App
