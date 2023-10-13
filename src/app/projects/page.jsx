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
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-t from-base-200 from-0% via-primary via-50% to-base-200 to-100%">
      <div className="flex justify-center my-32">
        <div className="flex flex-col md:max-w-5xl md:w-auto w-3/4 lg:text-left">
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
                      <p className="hidden md:block mt-4 pr-12 text-md text-neutral">
                        {project.description} Lorem ipsum, dolor sit amet
                        consectetur adipisicing elit. Nesciunt, maiores modi
                        beatae recusandae ad fugit earum, aut, porro doloribus
                        officia iusto id suscipit temporibus impedit natus animi
                        commodi dicta itaque.
                      </p>
                      {project.src ? (
                        <a href={project.link} className="hover:scale-105 transition-all duration-300">
                          <Image
                            src={project.src}
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
                          <source src={project.mp4} type="video/mp4" />
                        </video>
                      )}
                      <p className="block md:hidden mt-4 mb-4 md:mb-0 md:pr-12 text-md text-neutral text-center md:text-left">
                        {project.description} Lorem ipsum, dolor sit amet
                        consectetur adipisicing elit. Nesciunt, maiores modi
                        beatae recusandae ad fugit earum, aut, porro doloribus
                        officia iusto id suscipit temporibus impedit natus animi
                        commodi dicta itaque.
                      </p>
                    </div>
                    <div className="flex md:flex-row flex-col justify-start items-center">
                      <a
                        href={`/projects/${project.title}`}
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
                        <a href={project.link} className="hover:scale-105 transition-all duration-300">
                        <Image
                          src={project.src}
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
                          <source src={project.mp4} type="video/mp4" />
                        </video>
                      )}
                      <p className="mt-4 mb-4 md:mb-0 md:pl-12 text-md text-neutral text-center md:text-left">
                        {project.description} Lorem ipsum, dolor sit amet
                        consectetur adipisicing elit. Nesciunt, maiores modi
                        beatae recusandae ad fugit earum, aut, porro doloribus
                        officia iusto id suscipit temporibus impedit natus animi
                        commodi dicta itaque.
                      </p>
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
                        href={`/projects/${project.title}`}
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
