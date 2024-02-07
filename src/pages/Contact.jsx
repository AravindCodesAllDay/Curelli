import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contactdetails from "../components/Contactdetails";
import Whatsapp from "../components/Whatsapp.jsx";
import Map from "../components/Map.jsx";
export default function Contact() {
  return (
    <>
      <Navbar />
      <Contactdetails />
      {/* <Map zoomLevel={17} /> */}
      <Footer />
      <Whatsapp />
    </>
  );
}
