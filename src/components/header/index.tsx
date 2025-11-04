"use client";
import { useState, useEffect } from "react";
export default function Header() {
  const [isScrolling, setIsScrolling] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolling(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ease-in-out ${
        isScrolling || isOpen
          ? "bg-[#0b0416]/70 backdrop-blur-md shadow-[0_0_40px_rgba(113,39,186,0.2)]"
          : "bg-transparent"
      }`}
    >
      header
    </header>
  );
}
