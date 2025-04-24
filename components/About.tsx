import React from "react";
import { Montserrat } from "next/font/google";
import Header from "./Header";
const montserrat = Montserrat();

const About = () => {
  return (
    <div className={`w-full py-10 flex flex-col items-center bg-secondary `}>
      <Header className={montserrat.className}>About Me</Header>
    </div>
  );
};

export default About;
