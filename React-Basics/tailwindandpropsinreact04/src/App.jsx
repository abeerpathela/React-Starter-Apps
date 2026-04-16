import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/card'
import './App.css'
import Hello from './components/hello'

function App() {

  let myObj={
    username:"Abeer Pathela",
    age:21
  }

  let newArr=[1,2,3];

  return (
    <>
      {/* <h1 className='bg-green-500 px-4 py-4 rounded text-black mb-10'>Tailwind test</h1>
      <Card username="Abeer Pathela" channel="Chai Aur Code" someobj={myObj} someArr={newArr}/> */}
      <Hello username="Abeer Pathela" btntext="visit me ->"/>
      <Hello username="qwerty uiop" btntext="Know More ->"/>
    </>
  )
}

export default App
