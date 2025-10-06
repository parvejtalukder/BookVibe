import React from 'react';
import { createBrowserRouter } from "react-router";
import App from '../App';
// import { RouterProvider } from "react-router/dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
]);