import React from 'react'
import { BrowserRouter as Router, Routes, Route ,Outlet} from "react-router-dom"
import Home from "./pages/Home.jsx"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"  
import Logout from "./pages/logoutextra"
import {ToastContainer} from "react-toastify"   // not working
import Layout from "./components/Layout";
import UserLayout from "./components/userlayout.jsx"
import UserDashboard from "./pages/userPage.jsx"   //
function App() {
  return (
    <div className="App">
      <ToastContainer></ToastContainer> 
      <Router>
        <Routes>
          <Route exact path="/" element={<><Layout /><Home/></>} />
          <Route path="/login" element={<><Layout /><Login /></>} />
          <Route path="/register" element={<><Layout /><Register /></>} />
          <Route path="/logout" element={<><UserLayout /><Logout /></>} />
          <Route path="/deshboard" element={<><Layout/><Dashboard /></>} />
          <Route path="/user" element={<><Layout/><UserDashboard /></>} />
        </Routes>
      </Router>
     <Outlet/>
    </div>
  );
}

export default App;

// import AuthProvider from "./provider/authProvider";
// import Routes from "./routes";

// function App() {
//   return (
//     <AuthProvider>
//       <Routes />
//     </AuthProvider>
//   );
// }

// export default App;