import { BrowserRouter as Router, Routes, Route,Link,NavLink } from 'react-router-dom';
import './App.css'
import HomePage from './homePage';
import SupportPage from './SupportPage';
import AboutPage from './AboutPage';
import LabsPage from './LabsPage';
import MainHeader from './MainHeader';
import NotFound from './NotFound';

function App() {

  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) =>
                isActive 
                  ? "text-amber-300 hover:text-amber-400"
                  : "text-black hover:text-amber-200"
              }>Home</NavLink>
          </li>
          <li>
            <NavLink to="/support" className={({ isActive }) =>
                isActive 
                  ? "text-amber-300 hover:text-amber-400"
                  : "text-black hover:text-amber-200"
              }>Support</NavLink>
          </li>
          <li>
            <NavLink 
              to="/about"
              className={({ isActive }) =>
                isActive 
                  ? "text-amber-300 hover:text-amber-400"
                  : "text-black hover:text-amber-200"
              }
            >About</NavLink>
          </li>
          <li>
            <NavLink to="/labs" className={({ isActive }) =>
                isActive 
                  ? "text-amber-300 hover:text-amber-400"
                  : "text-black hover:text-amber-200"
              }>Labs</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<MainHeader/>}>
          <Route  index element={<HomePage/>}/>
          <Route path="support" element={<SupportPage/>}/>
          <Route path="about" element={<AboutPage/>}/>
          <Route path="labs" element={<LabsPage/>}/>
          <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
    </div>
  )
  
}

export default App
