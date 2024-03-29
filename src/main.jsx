/* eslint-disable react/jsx-no-undef */
import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";

// import App from './App.jsx'
import "./index.css";
import router from "./routes/router";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./providers/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
