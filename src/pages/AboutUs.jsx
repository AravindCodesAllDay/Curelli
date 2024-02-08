import React from "react";
import AboutBanner from "../components/AboutBanner";
import AboutDetails from "../components/AboutDetails";
import AboutContact from "../components/AboutContact";
import Footer from "../components/Footer";
import Whatsapp from "../components/Whatsapp";

export default function AboutUs() {
  return (
    <>
      <div className="p-12 bg-[#CDDCCB]">
        <AboutBanner />
        <AboutDetails />
        <AboutContact />
      </div>
      <Footer />
      <Whatsapp />
    </>
  );
}
