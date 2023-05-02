/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import App from '../App';
import Main from '../layouts/Main';
import Login from '../pages/Login/Login/Login';
import Register from '../pages/Login/Register/Register';
import Blog from '../pages/Blog/Blog';

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
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/login',
            element: <Register></Register>
        },
        {
            path: '/blog',
            element: <Blog></Blog>
        },
        {
            path: '*',
            element: <ErrorPage></ErrorPage>
        }
      ]
    },
  ]);
export default router;