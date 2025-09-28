"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react"; // Icône Lucide

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 flex items-center justify-center p-3 rounded-full bg-green-600 text-white shadow-lg hover:bg-green-700 transition-all duration-300 z-50"
        aria-label="Retour en haut"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    )
  );
}
