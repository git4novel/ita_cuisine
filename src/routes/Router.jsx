/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Main from "../layouts/Main";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import Home from "../pages/Home/Home";
import HomeTwo from "../layouts/HomeTwo";
import PrivateRoute from "./PrivateRoute";
import Blog from "../pages/Blog/Blog";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      /* {
          path: '/:id',
          element: <PrivateRoute><HomeTwo></HomeTwo></PrivateRoute>,
          loader: ({params}) => fetch(`https://italian-chef-server-git4novel.vercel.app/${params.id}`)
        }, */
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
  {
    path: "id/:id",
    element: (
      <PrivateRoute>
        <HomeTwo></HomeTwo>
      </PrivateRoute>
    ),
    loader: ({ params }) =>
      fetch(`https://italian-chef-server-git4novel.vercel.app/${params.id}`),
  },
]);
export default router;
