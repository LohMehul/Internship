import React from 'react';
import ReactDOM from 'react-dom/client';  
import './index.css';
import { RouterProvider } from 'react-router-dom';
import RootRouter from "./route.jsx"

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render("Testing");
root.render(<RouterProvider router={RootRouter} />);