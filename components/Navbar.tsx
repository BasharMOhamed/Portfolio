import React from "react";
import { Montserrat } from "next/font/google";
import { Button } from "./ui/button";
// import Logo from "./BM_logo_bottom_right-removebg-preview.png";

const montserrat = Montserrat({});

const Navbar = () => {
  return (
    <div className="bg-black py-[10px] sticky top-0 z-1000">
      <NavLinks />
    </div>
  );
};

export default Navbar;

const NavLinks = () => {
  return (
    <div
      className={`flex gap-8 text-white justify-end px-16 font-bold ${montserrat.className}`}
    >
      <Button variant={"ghost"} className="cursor-pointer">
        About me
      </Button>
      <Button variant={"ghost"} className="cursor-pointer">
        Skills
      </Button>
      <Button variant={"ghost"} className="cursor-pointer">
        Portfolio
      </Button>
      <Button className="bg-white text-black px-5 py-1.5 rounded-3xl cursor-pointer">
        Contact Me
      </Button>
    </div>
  );
};
