import React from "react";
import Header from "./Header";
import AnimatedSection from "./AnimatedSection";
import { ThreeDCardDemo } from "./cardComponent";
import { projects } from "@/constants";

const Portfolio = () => {
  return (
    <div
      id="portfolio"
      className={`w-full py-10 flex flex-col items-center bg-secondary `}
    >
      <Header className="">PORTFOLIO</Header>
      <AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 my-10">
          {projects.map((project) => (
            <div key={project.title} className="h-full">
              <ThreeDCardDemo
                key={project.title}
                img={project.img}
                title={project.title}
                description={project.description}
                liveLink={project.liveLink}
                githubLink={project.githubLink}
              />
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Portfolio;
