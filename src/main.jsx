import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import "./index.css";

import Navbar from "./components/navbar/Navbar.jsx";
import Home from "./pages/home/Home.jsx";
import AboutUs from "./pages/about/AboutUs.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Shop from "./pages/products/Shop.jsx";
import NoPage from "./pages/profile/NoPage.jsx";
import PopupCard from "./pages/products/PopupCard.jsx";
import Register from "./pages/login/Register.jsx";
import Cart from "./pages/cart/Cart.jsx";
import Login from "./pages/login/Login.jsx";
import ForgotPswd from "./pages/login/ForgotPswd.jsx";
import Terms from "./pages/login/Terms.jsx";
import Wishlist from "./pages/cart/Wishlist.jsx";
import Profile from "./pages/profile/Profile.jsx";
import Checkout from "./pages/cart/Checkout.jsx";
import Orders from "./pages/cart/Orders.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: (
      <Navbar>
        <Home />
      </Navbar>
    ),
  },
  {
    path: "/wishlist",
    element: (
      <Navbar>
        <Wishlist />
      </Navbar>
    ),
  },
  {
    path: "/aboutus",
    element: (
      <Navbar>
        <AboutUs />
      </Navbar>
    ),
  },
  {
    path: "/contact",
    element: (
      <Navbar>
        <Contact />
      </Navbar>
    ),
  },
  {
    path: "/shop",
    element: (
      <Navbar>
        <Shop />
      </Navbar>
    ),
    children: [
      {
        path: ":_pid",
        element: <PopupCard />,
      },
    ],
  },
  {
    path: "/cart",
    element: (
      <Navbar>
        <Cart />
      </Navbar>
    ),
  },
  {
    path: "/orders",
    element: (
      <Navbar>
        <Orders />
      </Navbar>
    ),
  },
  {
    path: "/forgotpswd",
    element: <ForgotPswd />,
  },
  {
    path: "/policy",
    element: <Terms />,
  },
  {
    path: "/login",
    element: (
      <Navbar>
        <Login />
      </Navbar>
    ),
  },
  {
    path: "/register",
    element: (
      <Navbar>
        <Register />
      </Navbar>
    ),
  },
  {
    path: "/profile",
    element: (
      <Navbar>
        <Profile />
      </Navbar>
    ),
  },
  {
    path: "/checkout",
    element: (
      <Navbar>
        <Checkout />
      </Navbar>
    ),
  },
  {
    path: "*",
    element: <NoPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="154374303742-6fvp12c1uut9b1l6qnlpr6esvt2d3eq9.apps.googleusercontent.com">
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </GoogleOAuthProvider>
);
