/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
    createBrowserRouter
  } from "react-router-dom";
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import App from '../App';
import Main from '../layouts/Main';
import Login from '../pages/Login/Login/Login';
import Register from '../pages/Login/Register/Register';
import Blog from '../pages/Blog/Blog';
import Home from '../pages/Home/Home';
import HomeTwo from '../pages/HomeTwo/HomeTwo';
import PrivateRoute from './PrivateRoute';



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element: <Home></Home>,
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/blog',
            element: <Blog></Blog>
        },
        {
          path:'/register',
          element: <Register></Register>,
        },
        {
          path: '/:id',
          element: <HomeTwo></HomeTwo>,
          loader: ({params}) => fetch(`http://localhost:5000/${params.id}`)
        },
        {
            path: '*',
            element: <ErrorPage></ErrorPage>
        }
      ]
    },
  ]);
export default router;