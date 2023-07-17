import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import ErrorPage from "./pages/404";
import ProductPage from "./pages/products";
import ProfilePage from "./pages/profilePage";
import DetailProductPage from "./pages/detailProductPage";
import { Provider } from "react-redux";
import store from "./redux/store";
import DarkModeContextProvider from "./context/DarkMode";


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
    path: "/products",
    element:<ProductPage/>
  },
  {
    path: "/profile",
    element:<ProfilePage/>
  },
  {
    path: "/product/:id",
    element:<DetailProductPage/>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
    <DarkModeContextProvider>
    <RouterProvider router={router} />
    </DarkModeContextProvider>
    </Provider>
  </React.StrictMode>
);
