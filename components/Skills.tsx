import React from "react";
import Header from "./Header";
import Image from "next/image";

import { Montserrat } from "next/font/google";
import { languages } from "../constants";
import AnimatedSection from "./AnimatedSection";

const montserrat = Montserrat();

const Skills = () => {
  return (
    <div id="skills" className="bg-secondary flex flex-col items-center">
      <Header className={`${montserrat.className} mt-20`}>SKILLS</Header>
      <AnimatedSection>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-x-20 m-10">
          {languages.map((lang) => (
            <LangContainer
              key={lang.title}
              src={lang.src}
              alt={lang.alt}
              title={lang.title}
            />
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Skills;

const LangContainer = ({
  src,
  alt,
  title,
}: {
  src: string;
  alt: string;
  title: string;
}) => {
  return (
    <div className="flex flex-col items-center gap-1.5 p-3">
      <div className="w-20 h-20 flex items-center justify-center bg-transparent rounded">
        <Image
          src={`/${src}`}
          alt={alt}
          width={80}
          height={80}
          className="object-contain"
        />
      </div>
      <p className={`${montserrat.className} text-center`}>{title}</p>
    </div>
  );
};
