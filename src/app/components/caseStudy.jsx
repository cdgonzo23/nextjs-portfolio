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

  // useEffect(() => {
  //   setTimeout(() => {
  //     videoRef.current.play();
  //   }, 2500);
  // }, []);

  return (
    <div className="min-h-screen flex justify-center bg-gradient-to-t from-base-200 via-primary to-base-200">
      <div className="w-3/4 mt-32">
        <div className="flex md:flex-row flex-col justify-start items-center">
          <h2 className="text-4xl text-neutral font-bold pb-2 text-center">
            {projectInfo.title}
          </h2>
          <div >
            <a href={projectInfo.github}>
              <Image
                width="50"
                height="50"
                src="/github.png"
                alt="github logo"
                className="fill-current transition-all duration-150 ease-in-out hover:scale-105 mb-4"
              ></Image>
            </a>
          </div>
        </div>
        <div className="py-6 flex flex-col md:flex-row">
          {projectInfo.src ? (
            <a
              href={projectInfo.link}
              className="hover:scale-105 transition-all duration-300"
            >
              <Image
                src={projectInfo.src}
                width={1000}
                height={1000}
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
          <div>
            <p className="md:pl-8 md:pt-0 text-lg text-neutral">
              {projectInfo.description}
            </p>
            <div className="text-center flex flex-col py-8 items-center">
              <h5 className="pb-4 font-semibold">Technologies Used:</h5>
              <div className="grid md:grid-cols-3 grid-cols-2 gap-4">
                {projectInfo.techUsed.map((tech) => {
                  return (
                    <div
                      key={tech.techId}
                      className="block px-4 py-2 rounded-box h-11 chat-bubble w-32 text-base-200"
                    >
                      {tech.name}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
