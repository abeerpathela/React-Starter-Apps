import React from 'react'
import Products from './components/products'
import NewProduct from './components/newProduct'
import './App.css'

function App() {
  const products=[
    {
      id:"p1",
      title:"Nirma",
      amount:100,
      date:new Date(2025,9,10)
    },
    {
      id:"p2",
      title:"Tide",
      amount:100,
      date:new Date(2025,9,11)
    },
    {
      id:"p3",
      title:"Surf Excel",
      amount:100,
      date:new Date(2025,9,12)
    },
    {
      id:"p4",
      title:"qwerty",
      amount:100,
      date:new Date(2025,8,13)
    }
  ]
  function printProductData(data){
    console.log(data);
  }
  return (
    <>
      <Products item={products}/>
      <NewProduct functionCallByApp={printProductData}/>
    </>
  )
}

export default App
