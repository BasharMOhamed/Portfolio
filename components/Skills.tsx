import React from "react";
import Header from "./Header";
import Image from "next/image";

import { Montserrat } from "next/font/google";
import AnimatedSection from "./AnimatedSection";

const montserrat = Montserrat();

const languages = [
  {
    src: "html5.jpg",
    alt: "html5 logo",
    title: "HTML5",
  },
  {
    src: "css3.png",
    alt: "CSS3 logo",
    title: "CSS3",
  },
  {
    src: "javascript.jpg",
    alt: "javascript logo",
    title: "JAVASCRIPT",
  },
  {
    src: "bootstrap.jpeg",
    alt: "bootstrap logo",
    title: "Bootstrap",
  },
  {
    src: "tailwind.png",
    alt: "tailwind logo",
    title: "TAILWIND",
  },
  {
    src: "git.jpg",
    alt: "git logo",
    title: "GIT",
  },
  {
    src: "react.png",
    alt: "react js logo",
    title: "REACT JS",
  },
  {
    src: "typescript.png",
    alt: "typescript logo",
    title: "TYPESCRIPT",
  },
  {
    src: "next js.png",
    alt: "next js logo",
    title: "NEXT JS",
  },
  {
    src: "node js.png",
    alt: "node js logo",
    title: "NODE JS",
  },
  {
    src: "express js.png",
    alt: "express js logo",
    title: "EXPRESS JS",
  },
  {
    src: "figma.jpeg",
    alt: "figma logo",
    title: "Figma",
  },
  {
    src: "mongodb.jpeg",
    alt: "mongodb logo",
    title: "MONGODB",
  },
  {
    src: "mySql.png",
    alt: "mySql logo",
    title: "MySQL",
  },
  {
    src: "postgresql.jpeg",
    alt: "postgresql logo",
    title: "POSTGRESQL",
  },
];

const Skills = () => {
  return (
    <div className="bg-secondary flex flex-col items-center">
      <Header className={montserrat.className}>SKILLS</Header>
      <AnimatedSection>
        <div className="grid grid-cols-4 gap-x-20 m-10">
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
      {/* <Image src={`/${src}`} alt={alt} width={80} height={80} /> */}
      <div className="w-20 h-20 flex items-center justify-center bg-transparent rounded">
        <Image
          src={`/${src}`}
          alt={alt}
          width={80}
          height={80}
          className="object-contain"
        />
      </div>
      <p className={montserrat.className}>{title}</p>
    </div>
  );
};
