import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"  
import {ToastContainer} from "react-toastify"   // not working
import Layout from "./components/Layout";
function App() {
  return (
    <div className="App">
      <ToastContainer></ToastContainer> 
      <Router>
        <Routes>
          <Route exact path="/" element={<><Layout /><Home/></>} />
          <Route path="/login" element={<><Layout /><Login /></>} />
          <Route path="/register" element={<><Layout /><Register /></>} />
          <Route path="/deshboard" element={<><Layout /><Dashboard /></>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
