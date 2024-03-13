import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Contact from "./pages/Contact.jsx";
import Shop from "./pages/Shop.jsx";
import NoPage from "./pages/NoPage.jsx";
import PopupCard from "./components/PopupCard.jsx";
import Register from "./pages/Register.jsx";
import Cart from "./pages/Cart.jsx";
import Login from "./pages/Login.jsx";
import ForgotPswd from "./pages/ForgotPswd.jsx";
import Terms from "./pages/Terms.jsx";
import Wishlist from "./pages/Wishlist.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Profile from "./pages/Profile.jsx";

const router = createBrowserRouter([
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
    path: "*",
    element: <NoPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="738261441549-uo70gn83k6i3cft7t7hhkns25juc8537.apps.googleusercontent.com">
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </GoogleOAuthProvider>
);
