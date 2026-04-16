import React from 'react';
import './App.css';
import { useState,useEffect } from 'react';

function App() {
  const [text,setText]=useState(' ');

  // useEffect(()=>{                             // THIS IS PERFORMED EVERYTIME WHEN THE REACT APP RE-RENDERS 
  //       console.log("UI RENDRING DONE HERE");
  //   }
  // );

  // useEffect(()=>{                               // THIS WORKS ONLY ONE TIME AT THE FIRST RENDER ONLY 
  //   console.log("UI RENDERING DONE HERE");
  // },[])

  // useEffect(()=>{                                // This works when on starting and when there is change in the dependencies provided 
  //   console.log("Text ki value mei change obsereve hua hai ");
  // },[text]);

  // useEffect(()=>{                            // This is how do we work with eventlistner using useEffect 
  //   // Add event listener
  //   console.log("Add event listener");
  //   return ()=>{
    //  // remove event listener 
  //     console.log("Listener removed");
  //   } 
  // },[text]);

  function changeHandler(event){
    setText(event.target.value);
    console.log(text);
  }
  function changeHandlerTwo(event){
    setText(event.target.value);
    console.log(text);
  }

  return (
      <div className="flex justify-center items-center">
      <input type="text" onChange={changeHandler}></input>
      <input type="text" onChange={changeHandlerTwo}></input>
      </div>
  
  )
}

export default App
