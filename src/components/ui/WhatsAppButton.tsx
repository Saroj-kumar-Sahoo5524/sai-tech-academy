"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const WHATSAPP_NUMBER = "919337427185"; // Replace with actual number
const WHATSAPP_MESSAGE = "Hi! I'm interested in learning more about Sai Tech Academy courses.";

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-white text-gray-800 text-sm font-medium px-4 py-2 rounded-xl shadow-xl whitespace-nowrap pointer-events-none"
          >
            Chat with us on WhatsApp 💬
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button */}
      <motion.a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center justify-center w-14 h-14 rounded-full shadow-2xl"
        style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
      >
        {/* Ping ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />

        {/* WhatsApp SVG icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-7 h-7 relative z-10"
          fill="white"
        >
          <path d="M16.003 2.667C8.637 2.667 2.667 8.637 2.667 16c0 2.363.63 4.673 1.824 6.695L2.667 29.333l6.823-1.786A13.268 13.268 0 0 0 16.003 29.333C23.37 29.333 29.333 23.363 29.333 16S23.37 2.667 16.003 2.667zm0 24.267a11.01 11.01 0 0 1-5.617-1.543l-.4-.237-4.05 1.06 1.083-3.94-.26-.407A10.96 10.96 0 0 1 5.003 16c0-6.07 4.93-11 11-11s11 4.93 11 11-4.93 11-11 11zm6.033-8.233c-.33-.167-1.953-.963-2.257-1.073-.303-.11-.523-.167-.743.167-.22.33-.853 1.073-1.047 1.293-.193.22-.387.247-.717.083-.33-.167-1.393-.513-2.653-1.633-.98-.873-1.643-1.95-1.837-2.28-.193-.33-.02-.507.147-.673.15-.15.33-.39.497-.587.167-.197.22-.33.33-.55.11-.22.057-.413-.027-.58-.083-.167-.743-1.793-1.017-2.453-.267-.643-.54-.557-.743-.567l-.633-.013c-.22 0-.577.083-.88.413-.303.33-1.157 1.13-1.157 2.757s1.183 3.197 1.35 3.417c.167.22 2.33 3.557 5.647 4.99.79.34 1.407.543 1.887.697.793.25 1.513.213 2.083.13.637-.093 1.953-.797 2.227-1.567.273-.77.273-1.43.19-1.567-.08-.137-.3-.22-.63-.387z"/>
        </svg>
      </motion.a>
    </div>
  );
}
