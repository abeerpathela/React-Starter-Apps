import React from 'react'
import { useState } from 'react'
import './App.css'

function App() {
  const [value,setValue]=useState(0);
  function minusHandler(){
    if(value==0){
      return;
    }
    else{
    let temp=value-1;
    setValue(temp);
    }
  }
  function plusHandler(){
    let temp=value+1;
    setValue(temp);
  }
  function resetHandler(){
    setValue(0);
  }
  return (
    <>
      <div className='main'>
      <div className="whole-panel">
      <div>
      <h1>Increment & Decrement</h1>
      </div>
      <div className="panel">
        <button onClick={minusHandler} className='minusButton'>-</button>
        <div className="empty-line"></div>
        <h1>{value}</h1>
        <div className="empty-line"></div>
        <button onClick={plusHandler} className='plusButton'>+</button>
      </div>
      <div>
        <button onClick={resetHandler} className='resetButton'>Reset</button>
      </div>
      </div>
      </div>
    </>
  )
}

export default App
