"use client";
import React from "react";
import { Montserrat } from "next/font/google";
import Header from "./Header";
const montserrat = Montserrat();
import dynamic from "next/dynamic";

const Timeline = dynamic(() => import("../components/TimelineWrapper"), {
  ssr: false,
});

const About = () => {
  return (
    <div
      id="about"
      className={`w-full py-10 flex flex-col items-center bg-secondary `}
    >
      <Header className={`${montserrat.className}`}>Work Experience</Header>
      <Timeline />
    </div>
  );
};

export default About;
