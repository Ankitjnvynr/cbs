"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const toggleChat = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    const whatsappNumber = "9999999999"; // Replace with your WhatsApp number
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: 65,
        zIndex: 200,
        right: '-60px',
        

        cursor: "pointer",
        display:'flex',
        flexDirection:'column',
        height:'50vh',
        justifyContent:'space-between',
        alignItems:'flex-start',
        
      }}
      className=" w-[10px]"
    >
      <Link href={'/admission'} style={{
        transform:'rotatez(-90deg)',
        background:'#044a84'
        
      }} className="fixed text-white px-3 border-white shadow rounded w-[400px] h-[400px] top-[50%] z-[100] p-1">
         Admission Form
         </Link>

      <div>
        {/* Floating WhatsApp Button */}
        <div
          className="shadow-xl"
          onClick={toggleChat} // Moving the onClick to the wrapper div
        >
          <FontAwesomeIcon
            icon={faWhatsapp}
            style={{ marginLeft: "10px", color: "#25D366", fontSize: 35 }}
          />
        </div>

        {/* WhatsApp Chat Box */}
        {isOpen && (
          <div
            style={{ zIndex: 200 }}
            className="fixed bottom-20 right-5 bg-white shadow-lg rounded-lg w-72"
          >
            <div className="flex items-center justify-between p-4 bg-green-500 rounded-t-lg">
              <h3 className="text-white font-semibold">Chat with us</h3>
              <button
                className="text-white font-bold text-lg"
                onClick={toggleChat}
              >
                &times;
              </button>
            </div>
            <div className="p-4">
              <p className="text-gray-600 mb-2">
                Hi there! How can we help you?
              </p>
              <textarea
                className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                rows="3"
                value={message}
                onChange={handleMessageChange}
                placeholder="Type your message..."
              ></textarea>
              <button
                className="w-full mt-2 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
                onClick={handleSendMessage}
              >
                Send
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WhatsAppChat;
