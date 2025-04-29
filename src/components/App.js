
import React from "react";
import {Routes,Route} from 'react-router-dom'
import Home from './Home';
import About from './About';
import Navbar from './Navbar';

const App = () => {
  return (
    <div>
    <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}>Home</Route>
          <Route path="/about" element={<About/>}>About</Route>
        </Routes>
        {/* Do not remove the main div */}
    </div>
  )
}

export default App
