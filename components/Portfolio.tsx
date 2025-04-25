import React from "react";
import Header from "./Header";
import Image from "next/image";
import { Github } from "lucide-react";

const Portfolio = () => {
  return (
    <div className={`w-full py-10 flex flex-col items-center bg-secondary `}>
      <Header className="">PORTFOLIO</Header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
        <ThreeDCardDemo />
        <ThreeDCardDemo />
        <ThreeDCardDemo />
      </div>
    </div>
  );
};

export default Portfolio;

import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-4"
        >
          <Image
            src="/modified_image (6).png"
            height="800"
            width="800"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Chatty-app
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          A real-time chat application built with the MERN stack (MongoDB,
          Express.js, React, Node.js) and Socket.io for instant messaging. This
          app provides secure authentication, real-time communication, and a
          responsive UI, making it a seamless messaging platform.
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            translateX={-40}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            translateX={40}
            as="button"
            className="px-1 py-1 rounded bg-black dark:bg-white dark:text-black text-white text-xs font-bold cursor-pointer"
          >
            <a
              href="https://github.com/BasharMOhamed/chat-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
            </a>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
