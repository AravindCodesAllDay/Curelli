// src/Whatsapp.jsx
import React from "react";
import img1 from "../assets/WhatsApp.png";

function Whatsapp() {
  const openWhatsApp = () => {
    // Access environment variables using import.meta.env.VARIABLE_NAME
    const whatsappChatURL =
      "https://wa.me/" + import.meta.env.VITE_WHATSAPPNUMBER;
    console.log(whatsappChatURL);

    // Open the WhatsApp chat link in a new tab
    window.open(whatsappChatURL, "_blank");
  };

  return (
    <div className="App">
      <div id="whatsapp-chat" className="fixed bottom-4 right-4">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-full"
          onClick={openWhatsApp}
        >
          <img src={img1} alt="whatsapp logo" className="w-6" />
        </button>
      </div>
    </div>
  );
}

export default Whatsapp;
