import React from 'react';
import { createBrowserRouter } from "react-router";
import App from '../App';
import Root from '../pages/roots/Root';
import Error from '../pages/error/Error';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import BookDetails from '../pages/bookDetails/BookDetails';
// import { RouterProvider } from "react-router/dom";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement: <Error></Error>,
    children: [
      {index: true, path: "/", loader: () => fetch('booksData.json'), Component: Home},
      { path: "/about", Component: About},
      { path: "/book/:id", Component: BookDetails}
    ]
  },
]);