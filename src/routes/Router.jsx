/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import App from '../App';
import Main from '../layouts/Main';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
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