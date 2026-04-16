import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Item from './components/item'
import ItemDate from './components/itemDate'
import Card from './components/card'

function App() {

  const response=[
    {
      itemkiname:"Nirma",
      itemkiday:20,
      itemkimonth:"September",
      itemkiyear:2025
    },
    {
      itemkiname:"Surf Excel",
      itemkiday:10,
      itemkimonth:"September",
      itemkiyear:2025
    }
  ]

  return (
    <>
    <Card>
    <div className='main'>
    <div className="card">
    <Item name={response[0].itemkiname}>i am item ka children </Item>
    <ItemDate day={response[0].itemkiday} month={response[0].itemkimonth} year={response[0].itemkiyear} />
    </div>
    <div class="card">
    <Item name={response[1].itemkiname}/>
    <ItemDate day={response[1].itemkiday} month={response[1].itemkimonth} year={response[1].itemkiyear} />
    </div>
     <div className="App">HELLO WORLD</div>
     </div>
     </Card>
    </>
  )
}

export default App
