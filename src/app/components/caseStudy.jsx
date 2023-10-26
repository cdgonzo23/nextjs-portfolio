"use client";
import React from "react";
import { useEffect, useRef } from "react";
import Image from "next/image";
import projectArray from "../../utils/projectList";

export default function CaseStudy(projectTitle) {
  const projectInfo = projectArray.find(
    (project) => project.title === projectTitle
  );

  const videoRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      videoRef.current.play();
    }, 2500);
  }, []);

  return (
    <div className="min-h-screen flex justify-center bg-gradient-to-t from-base-200 via-primary to-base-200">
      <div className="lg:w-1/2 w-3/4 mt-32">
        <h2 className="text-4xl text-neutral font-bold pb-2 text-center">
          {projectInfo.title}
        </h2>
        <div className="p-6 flex flex-col md:flex-row items-start justify-center">
          {projectInfo.src ? (
            <a
              href={projectInfo.link}
              className="hover:scale-105 transition-all duration-300"
            >
              <Image
                src={projectInfo.src}
                width={1750}
                height={1750}
                alt="project image"
                className="border-2 border-solid border-neutral rounded-box shadow shadow-neutral"
              />
            </a>
          ) : (
            <video
              ref={videoRef}
              width="250"
              loop
              muted
              className="border-2 border-solid border-black rounded-xl md:w-1/3 w-full"
              style={{
                height: "50%",
                left: 0,
                top: 0,
              }}
            >
              <source src={projectInfo.mp4} type="video/mp4" />
            </video>
          )}
          <p className="md:pl-8 md:pt-0 text-lg text-neutral">
            {projectInfo.description}
          </p>
        </div>
      </div>
    </div>
  );
}
