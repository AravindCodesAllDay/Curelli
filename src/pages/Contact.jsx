import React from "react";
import Footer from "../components/Footer";
import Contactdetails from "../components/Contactdetails";
import Whatsapp from "../components/Whatsapp.jsx";
import Map from "../components/Map.jsx";
export default function Contact() {
  return (
    <>
      <Contactdetails />
      <Map />
      <Footer />
      <Whatsapp />
    </>
  );
}
