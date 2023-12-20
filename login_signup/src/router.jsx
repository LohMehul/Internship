import React from "react";
import {createBrowserRouter} from "react-router-dom";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import Error from "./components/Error.jsx";
import "./styles.css"


const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: <><Login/></>,
    },
    {
        path: "/signup",
        element: <><Signup/></>,
    },
    {
        path: "/error",
        element: <><Error/></>,
    },
]);


export default MainRouter;