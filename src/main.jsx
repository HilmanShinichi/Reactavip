import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import ErrorPage from "./pages/404";
import ProductPage from "./pages/products";


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Halaman utama</div>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element:<RegisterPage/>
  },
  {
    path: "/product",
    element:<ProductPage/>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
