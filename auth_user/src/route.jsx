import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import HeaderComp from './CommonComponent/layout';
//   const route = createBrowserRouter([
//     {
//       path: "/",
//       element: <><Header/></>,
//     },
//   ]);

// export default route;

const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: <><HeaderComp/></>,
    },
    {
        path: "/about",
        element: <><HeaderComp/></>,
    },
    {
        path: "/contact",
        element: <><HeaderComp/></>,
    },
]);
export default MainRouter;