import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"  
import {ToastContainer} from "react-toastify"   // not working

function App() {
  return (
    <div className="App">
      <ToastContainer></ToastContainer> 
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/deshboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
