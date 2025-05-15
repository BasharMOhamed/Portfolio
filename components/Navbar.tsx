"use client";

import React, { useState, useEffect } from "react";
import { Montserrat } from "next/font/google";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const montserrat = Montserrat({
  subsets: ["latin"],
});

type NavItem = {
  id: string;
  label: string;
  variant: "ghost" | "default";
  style?: string;
};

const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home", variant: "ghost" },
  { id: "about", label: "Work Experience", variant: "ghost" },
  { id: "skills", label: "Skills", variant: "ghost" },
  { id: "portfolio", label: "Portfolio", variant: "ghost" },
  {
    id: "contact",
    label: "Contact Me",
    variant: "default",
    style: "md:bg-white md:text-black px-5 py-1.5 rounded-3xl",
  },
];

const Navbar = () => {
  return (
    <div className="bg-black py-[10px] sticky top-0 z-1000">
      <NavLinks />
    </div>
  );
};

export default Navbar;

const NavLinks = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map((item) =>
        document.getElementById(item.id)
      );
      const scrollPosition = window.scrollY;

      if (scrollPosition < 100) {
        setActiveSection("home");
        return;
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition + 100) {
          setActiveSection(NAV_ITEMS[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
    setIsMenuOpen(false);
  };

  return (
    <div
      className={`text-white px-4 md:px-16 font-bold ${montserrat.className}`}
    >
      <div className="md:hidden flex justify-end">
        <Button variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>
      <div
        className={`md:flex md:gap-8 md:justify-end ${
          isMenuOpen
            ? "fixed inset-0 bg-black z-50 h-screen flex flex-col items-center justify-center"
            : "hidden"
        }`}
      >
        {isMenuOpen && (
          <Button
            variant="ghost"
            className="absolute top-4 right-4"
            onClick={() => setIsMenuOpen(false)}
          >
            <X size={30} />
          </Button>
        )}
        {NAV_ITEMS.map((item) => (
          <Button
            key={item.id}
            variant={"ghost"}
            className={`cursor-pointer w-full md:w-auto ${
              item.style ? item.style : ""
            } ${isMenuOpen ? "text-2xl my-4" : ""} ${
              activeSection === item.id ? "bg-white text-black" : ""
            }`}
            onClick={() => scrollToSection(item.id)}
          >
            {item.label}
          </Button>
        ))}
      </div>
    </div>
  );
};
