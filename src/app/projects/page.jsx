"use client";
import React from "react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import projectArray from "../../utils/projectList";
import GitHub from "../../../public/github.png";

export default function Projects() {
  const videoRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      videoRef.current.play();
    }, 2500);
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-t from-base-200 from-0% via-primary via-50% to-base-200 to-100%">
      <div className="flex justify-center my-32">
        <div className="grid gap-32 text-center md:max-w-5xl w-11/12 md:grid-cols-2 lg:text-left">
          {projectArray.map((project) => {
            return (
              <div
                key={project.id}
                className="h-min rounded-lg bg-secondary border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-200/30 hover:scale-105 transition duration-300 hover:ease-in-out"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2 className="mb-3 text-2xl font-semibold">
                    {project.title}{" "}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                      -&gt;
                    </span>
                  </h2>
                  <p className="text-neutral text-sm pb-2 link link-hover">Click to view case study</p>
                  <div className="bg-neutral rounded-box shadow shadow-neutral">
                    {project.src ? (
                      <Image
                        src={project.src}
                        width={700}
                        height={700}
                        alt="project image"
                        className="border-2 border-solid border-black rounded-xl"
                      />
                    ) : (
                      <video
                        ref={videoRef}
                        width="250"
                        loop
                        muted
                        className="border-2 border-solid border-black rounded-xl"
                        style={{
                          width: "100%",
                          height: "100%",
                          left: 0,
                          top: 0,
                        }}
                      >
                        <source src={project.mp4} type="video/mp4" />
                      </video>
                    )}
                  </div>

                  <p className="mt-4 text-md text-neutral">
                    {project.description}
                  </p>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
