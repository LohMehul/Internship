import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from './Components/Dashboard';
import Homepage from './Components/Homepage';


const App = () => {

  return (
    <div>
      <h1 className="text-3xl text-white font-bold">Auth-Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/Dashboard" element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App