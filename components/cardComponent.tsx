"use client";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import Image from "next/image";
import { Github } from "lucide-react";
import { useLayoutEffect, useRef, useState } from "react";

export function ThreeDCardDemo({
  img,
  title,
  description,
  liveLink,
  githubLink,
}: {
  img: string;
  title: string;
  description: string;
  liveLink: string;
  githubLink: string;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showToggle, setShowToggle] = useState(false);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const el = descriptionRef.current;
    if (el) {
      const lineHeight = 20;
      const maxLines = 5;
      const maxHeight = lineHeight * maxLines;

      if (el.scrollHeight > maxHeight) {
        setShowToggle(true);
      }
    }
  }, []);

  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[95%] sm:w-[25rem] h-full flex flex-col justify-between rounded-xl p-6 border">
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-4"
        >
          <Image
            src={img}
            height="800"
            width="800"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>

        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white mt-3"
        >
          {title}
        </CardItem>

        <CardItem
          as="p"
          translateZ="60"
          className={`text-neutral-500 text-sm mt-2 dark:text-neutral-300 ${
            !isExpanded ? "line-clamp-5" : ""
          }`}
        >
          <span
            ref={descriptionRef}
            style={{ lineHeight: "20px", display: "block" }}
          >
            {description}
          </span>
        </CardItem>

        {showToggle && (
          <div className="flex justify-end">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-1 text-muted-foreground text-xs underline focus:outline-none cursor-pointer"
            >
              {isExpanded ? "See Less" : "See More"}
            </button>
          </div>
        )}

        <div className="flex justify-between items-center mt-20">
          <a href={liveLink} target="_blank" rel="noopener noreferrer">
            <CardItem
              translateZ={20}
              translateX={-30}
              as="button"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              Try now →
            </CardItem>
          </a>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <CardItem
              translateZ={20}
              translateX={30}
              as="button"
              className="px-1 py-1 rounded bg-black dark:bg-white dark:text-black text-white text-xs font-bold cursor-pointer"
            >
              <Github size={20} />
            </CardItem>
          </a>
        </div>
      </CardBody>
    </CardContainer>
  );
}
