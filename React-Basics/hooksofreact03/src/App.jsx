import { useState } from 'react'                // hooks will be used from this library 
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count,setCount]=useState(0)

  const addValue=()=>{
    count=count+1;
    setCount(count);
  }

  const decreaseValue=()=>{
    if(count<=0){
      count=0;
    }
    else{
      count=count-1;
    }
    setCount(count);
  }

  return (
    <>
    <h1 class="text-xl">Counter App Using react </h1>
    <h2>Counter value {count}</h2>
    <button onClick={addValue}>Add value</button>
    <br/>
    <button onClick={decreaseValue}>Decrease value</button>
    </>
  )
}

export default App
