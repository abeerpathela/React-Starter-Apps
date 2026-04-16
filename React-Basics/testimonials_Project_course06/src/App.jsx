import './App.css'
import Testimonials from './components/Testimonials.jsx';
import Reviews from './components/data.js';

function App() {
  return (
   <div className='flex h-screen w-full items-center justify-center bg-gray-200'>
    <div className="max-w-[600px] flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold">Our Testimonials</h1>
      <div className='h-1 w-[30%] bg-purple-500 mt-[8px] '></div>
      <Testimonials reviews={Reviews}/>
    </div>
   </div>
  )
}

export default App
