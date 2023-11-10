"use client";
import React from "react";
import { useEffect, useRef } from "react";
import Image from "next/image";
import projectArray from "../../utils/projectList";

export default function Projects() {
  const videoRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      videoRef.current.play();
    }, 2500);
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-t from-base-200 from-0% via-primary via-50% to-base-200 to-100%">
      <div className="flex justify-center my-32">
        <div className="flex flex-col md:max-w-5xl md:w-11/12 lg:w-auto w-3/4 lg:text-left">
          {projectArray.map((project) => {
            return (
              <div key={project.id}>
                {project.id % 2 === 0 ? (
                  <div className="mb-80 rounded-lg border border-transparent px-5 py-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex md:justify-end justify-center"
                    >
                      <h2 className="mb-3 text-2xl font-semibold text-neutral md:pr-4 text-center md:text-left">
                        {project.title}
                      </h2>
                    </a>
                    <div className="flex flex-col md:flex-row place-items-center">
                      <div className="hidden md:block ">
                        <p className="mt-4 pr-12 text-md text-neutral">
                          {project.description}
                        </p>
                        <div className="text-center flex flex-col py-8 items-center">
                          <h5 className="pb-4 font-semibold">
                            Technologies Used:
                          </h5>
                          <div className="grid md:grid-cols-3 grid-cols-2 gap-4">
                            {project.techUsed.map((tech) => {
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
                      {project.src ? (
                        <a
                          href={project.link}
                          className="hover:scale-95 transition-all duration-300"
                        >
                          <Image
                            src={project.src}
                            width={1000}
                            height={1000}
                            alt="project image"
                            className="border-2 border-solid border-neutral rounded-box shadow shadow-neutral"
                          />
                        </a>
                      ) : (
                        <video
                          ref={videoRef}
                          loop
                          muted
                          className="border-2 border-solid border-black rounded-xl md:w-1/2 w-full"
                        >
                          <source src={project.mp4} type="video/mp4" />
                        </video>
                      )}
                      <div>
                        <p className="block md:hidden mt-4 mb-4 md:mb-0 md:pr-12 text-md text-neutral text-center md:text-left">
                          {project.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex md:flex-row flex-col justify-start items-center">
                      <a
                        href={`/projects/${project.caseStudyLink}`}
                        className="text-neutral text-sm link link-hover"
                      >
                        <button className="btn btn-secondary">
                          Click to view case study
                        </button>
                      </a>
                      <a href={project.github}>
                        <Image
                          width="60"
                          height="60"
                          src="/github.png"
                          alt="github logo"
                          className="fill-current transition-all duration-150 ease-in-out hover:scale-105"
                        ></Image>
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="mb-80 rounded-lg border border-transparent px-5 py-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h2 className="mb-3 text-2xl font-semibold text-neutral md:pl-4 text-center md:text-left">
                        {project.title}
                      </h2>
                    </a>
                    <div className="flex md:flex-row flex-col place-items-center">
                      {project.src ? (
                        <a
                          href={project.link}
                          className="hover:scale-95 transition-all duration-300"
                        >
                          <Image
                            src={project.src}
                            width={1000}
                            height={1000}
                            alt="project image"
                            className="border-2 border-solid border-neutral rounded-box shadow shadow-neutral"
                          />
                        </a>
                      ) : (
                        <video
                          ref={videoRef}
                          loop
                          muted
                          className="border-2 border-solid border-black rounded-xl md:w-1/2 w-max"
                        >
                          <source src={project.mp4} type="video/mp4" />
                        </video>
                      )}
                      <div>
                        <p className="mt-4 mb-4 md:mb-0 md:pl-12 text-md text-neutral text-center md:text-left">
                          {project.description}
                        </p>
                        <div className="text-center md:flex hidden flex-col py-8 px-2 items-center">
                          <h5 className="pb-4 font-semibold">
                            Technologies Used:
                          </h5>
                          <div className="grid md:grid-cols-3 grid-cols-2 gap-4">
                            {project.techUsed.map((tech) => {
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
                    <div className="flex md:flex-row flex-col justify-end items-center">
                      <a href={project.github}>
                        <Image
                          width="60"
                          height="60"
                          src="/github.png"
                          alt="github logo"
                          className="hidden md:block fill-current transition-all duration-150 ease-in-out hover:scale-105"
                        ></Image>
                      </a>
                      <a
                        href={`/projects/${project.caseStudyLink}`}
                        className="text-neutral text-sm link link-hover"
                      >
                        <button className="btn btn-secondary">
                          Click to view case study
                        </button>
                      </a>
                      <a href={project.github}>
                        <Image
                          width="60"
                          height="60"
                          src="/github.png"
                          alt="github logo"
                          className="fill-current block md:hidden transition-all duration-150 ease-in-out hover:scale-105"
                        ></Image>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
