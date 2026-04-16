import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/cart'

function App() {
  
  return (
    <div>
      
      <div>
        <Navbar/>
      </div>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>

    </div>
  )
}

export default App
