// import React from "react";
// import "./styles.css";
// import Login from "./components/Login.jsx";
// import Signup from "./components/Signup.jsx";
// import Error from "./components/Error.jsx";
// import { Route, Routes } from "react-router-dom";

// function App() {
//   return (
//     <div className="App">
//     <div>
//       <h3>appp</h3>
//     </div>
//       <Routes>
//         <Route path="/" component={Login} exact />
//         <Route path="/signup" component={Signup} />
//         <Route component={Error} />
//       </Routes>
//     </div>
//   );
// }

// export default App;


import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import 'bootstrap/dist/css/bootstrap.min.css';
 
function App() {
    return (
        <>
            <nav className="navbar bg-dark">
                <div className="container-fluid">
                    <span className="appName">
                        React User Authentication</span>
                </div>
            </nav>
            <LoginButton />
            <LogoutButton />
        </>
    );
}
 
export default App;