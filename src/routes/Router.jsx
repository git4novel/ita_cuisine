/* eslint-disable no-unused-vars */
import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import App from '../App';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world</div>,
      children:[
        {
            path: '/',
            element: <App></App>
        }, 
        {
            path: '*',
            element: <ErrorPage></ErrorPage>
        }
      ]
    },
  ]);
export default router;