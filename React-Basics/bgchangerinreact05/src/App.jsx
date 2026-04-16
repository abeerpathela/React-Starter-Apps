import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("black");

  return (
    <>
      <div
        className="w-full h-screen duration-200 transition-all bg-{color}"
        
      >
        <nav className="fixed flex flex-wrap justify-center bottom-[40px] inset-x-0 px-2 py-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg px-3 py-1 rounded-3xl text-black bg-white">
            <button
              className="outline-none "
              onClick={() => setColor("red")}
            >
              Red
            </button>
            <button
              className="outline-none"
              onClick={() => setColor("blue")}
            >
              Blue
            </button>
            <button
              className="outline-none"
              onClick={() => setColor("green")}
            >
              Green
            </button>
            <button
              className="outline-none"
              onClick={() => setColor("black")}
            >
              Reset
            </button>
          </div>
        </nav>
      </div>
    </>
  )
}

export default App
