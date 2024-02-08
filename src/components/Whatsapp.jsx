import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import img2 from "../assets/WhatsApp.png";

function Whatsapp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check the scroll position
      if (window.scrollY > 100) {
        // Adjust the scroll threshold as needed
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const openWhatsApp = () => {
    const whatsappChatURL =
      "https://wa.me/" + import.meta.env.VITE_WHATSAPPNUMBER;

    // Open the WhatsApp chat link in a new tab
    window.open(whatsappChatURL, "_blank");
  };

  return (
    <div className="fixed bottom-4 right-4">
      <div className={`App ${isVisible ? "visible" : "hidden"}`}>
        <div id="uparrow">
          <button
            className="bg-green-500 p-[10px] rounded-full"
            onClick={scrollToTop}
          >
            <FaArrowUp className="h-6 w-6 text-white hover:scale-125" />
          </button>
        </div>
      </div>
      <div id="whatsapp-chat" className="mt-2">
        <button
          className="bg-green-500 text-white p-[10px] rounded-full"
          onClick={openWhatsApp}
        >
          <img src={img2} alt="whatsapp logo" className="w-6 hover:scale-125" />
        </button>
      </div>
    </div>
  );
}

export default Whatsapp;
