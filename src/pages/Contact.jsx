import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contactdetails from "../components/Contactdetails";
import Whatsapp from "../components/Whatsapp.jsx";
import AddProduct from "../components/Addproducts.jsx";
export default function Contact() {
  return (
    <>
      <Navbar />
      <Contactdetails />
      <Footer />
      <AddProduct />
      <Whatsapp />
    </>
  );
}
