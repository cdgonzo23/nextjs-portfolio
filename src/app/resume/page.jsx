"use client";
import React from "react";

export default function Resume() {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("Gonzales_Resume.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Gonzales_Resume.pdf";
        alink.click();
      });
    });
  };

  return (
    <div className="hero min-h-screen bg-gradient-to-t from-base-200 from-0% via-primary via-50% to-base-200 to-100%">
      <div className="my-24 flex flex-col items-center w-10/12 md:w-auto">
        <h2 className="text-4xl font-bold text-neutral pb-12">Resume</h2>
        {/* Education */}
        <div className="w-2/3">
          <div className="divider text-2xl font-bold text-neutral">
            Education
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-neutral">
                Vanderbilt University
              </h3>
              <p className="pl-8 italic">
                Certificate in Full-Stack Web Development
              </p>
            </div>
            <div>
              <p className="font-medium">Nashville, TN</p>
              <p className="italic">Graduation Date: Oct, 2023</p>
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <div>
              <h3 className="text-xl font-bold text-neutral">
                Belmont University
              </h3>
              <p className="italic text-neutral pl-8">
                B.S. in Audio Engineering Technology
              </p>
              <p className="italic text-neutral pl-8">
                Minor in Music Business
              </p>
              <p className="text-neutral italic text-neytral pt-2 pl-8">
                Organizations:
              </p>
              <ul className="pl-16">
                <li className="list-disc italic text-neutral">
                  DI Mens Track and Field Team
                </li>
                <li className="list-disc italic text-neutral">
                  Audio Engineering Society
                </li>
              </ul>
            </div>
            <div>
              <p className="text-neutral font-medium">Nashville, TN</p>
              <p className="italic text-neutral">Graduation date: May, 2020</p>
            </div>
          </div>
        </div>
        {/* Work Experience */}
        <div className="w-2/3">
          <div className="divider text-2xl font-bold text-neutral">
            Work Experience
          </div>
          <div className="flex justify-between">
            <h3 className="text-xl font-bold text-neutral">
              Freelance Audio Engineer
            </h3>
            <div className="text-neutral">
              <p className="font-medium">Nashville, TN</p>
              <p className="italic">June 2020 - October 2023</p>
            </div>
          </div>
          <ul className="text-neutral pl-8 pt-2">
            <li className="text-neutral list-disc">
              Independently installed all of the cabling for Wildwood Recording
              studio. This involved designing the studio layout, gathering the
              required connector types and cable lengths, wiring of over 700
              patch points and connectors, and testing of every connection.
            </li>
            <li className="text-neutral list-disc">
              Assembled and tested over 30 Son of Kong guitar pedals for Midget
              Electronics. Required an intensive preparation process of color
              coordinating wires, cutting wires to length, and soldering circuit
              boards, switches, and connectors.
            </li>
            <li className="text-neutral list-disc">
              Designed and built pre-amplifiers modeled after Neve 1272s.
              Required studying documentation of the original 1272 and
              implementing the same wiring and circuitry into a new piece of
              hardware.
            </li>
            <li className="text-neutral list-disc">
              Modified Ampex 601 tape machines into tube pre-amplifiers. Studied
              documentation to understand the original design and how it can be
              changed to meet modern recording standards.
            </li>
          </ul>
          <div className="text-neutral flex justify-between mt-3">
            <h3 className="text-xl font-bold">Woodland Sound Studio</h3>
            <div>
              <p className="font-medium">Nashville, TN</p>
              <p className="italic">August 2020 - February 2023</p>
            </div>
          </div>
          <ul className="text-neutral pl-8 pt-2">
            <li className="text-neutral list-disc">
              Assisted in building a distribution box which takes the output of
              the master tape machine and distribute that signal to up to 6
              other tape machines simultaneously. Syncs the transport controls
              so all machine start and stop recording at the same time.
            </li>
            <li className="text-neutral list-disc">
              Communicated with the head technical engineer to understand the
              goal of projects and the steps necessary to achieve completion.
            </li>
          </ul>
        </div>
        {/* In Class Experience */}
        <div className="w-2/3 mt-3">
          <div className="divider text-2xl font-bold text-neutral">
            In Class Experience
          </div>
          <ul className="text-neutral pl-8">
            <li className="text-neutral list-disc">
              With a team, built a vehicle maintenance tracker. Where the user
              can log in or sign up, then post images, cost, type of
              maintenance, and upcoming maintenance. This app is built on
              JavaScript and Handlebars, and utilizes Node.js and Express
              routing. The information is stored via Sequelize.
            </li>
          </ul>
        </div>
        {/* Skills */}
        <div className="w-2/3">
          <div className="divider text-2xl font-bold text-neutral">Skills</div>
          <div className="text-center flex flex-col justify-center items-center">
            <div className="grid md:grid-cols-4 grid-cols-2 gap-4 py-8">
              <div className="block px-4 py-2 rounded-box h-11 chat-bubble-secondary w-32 text-neutral">
                JavaScript
              </div>
              <div className="block px-4 py-2 rounded-box h-11 chat-bubble-secondary w-32 text-neutral">
                React.js
              </div>
              <div className="block px-4 py-2 rounded-box h-11 chat-bubble-secondary w-32 text-neutral">
                HTML
              </div>
              <div className="block px-4 py-2 rounded-box h-11 chat-bubble-secondary w-32 text-neutral">
                CSS
              </div>
              <div className="block px-4 py-2 rounded-box h-11 chat-bubble-secondary w-32 text-neutral">
                SQL
              </div>
              <div className="block px-4 py-2 rounded-box h-11 chat-bubble-secondary w-32 text-neutral">
                Node.js
              </div>
              <div className="block px-4 py-2 rounded-box h-11 chat-bubble-secondary w-32 text-neutral">
                Express.js
              </div>
              <div className="block px-4 py-2 rounded-box h-11 chat-bubble-secondary w-32 text-neutral">
                REST API&apos;s
              </div>
              <div className="block px-4 py-2 rounded-box h-11 chat-bubble-secondary w-32 text-neutral">
                MongoDB
              </div>
              <div className="block px-4 py-2 rounded-box h-11 chat-bubble-secondary w-32 text-neutral">
                Next.js
              </div>
              <div className="block px-4 py-2 rounded-box h-11 chat-bubble-secondary w-32 text-neutral">
                VS Code
              </div>
              <div className="block px-4 py-2 rounded-box h-11 chat-bubble-secondary w-32 text-neutral">
                GitHub
              </div>
            </div>
          </div>
          {/* Interests & Achievements */}
          <div>
            <div className="divider text-2xl font-bold text-neutral">
              Interests & Achievements
            </div>
            <div className="text-center flex flex-col justify-center items-center">
              <div className="grid md:grid-cols-4 grid-cols-2 gap-4 py-8">
                <div className="block px-2 py-2 rounded-box h-11 bg-neutral w-32 text-base-200">
                  Songwriting
                </div>
                <div className="block px-4 py-2 rounded-box h-11 bg-neutral w-32 text-base-200">
                  Reading
                </div>
                <div className="block px-4 py-2 rounded-box h-11 bg-neutral w-32 text-base-200">
                  Surfing
                </div>
                <div className="block px-4 py-2 rounded-box h-11 bg-neutral w-32 text-base-200">
                  C++
                </div>
              </div>
              <ul>
                <li className="text-neutral text-lg list-disc">
                  Belmont University 600m school record holder
                </li>
                <li className="text-neutral text-lg list-disc">
                  2019 Ohio Valley Conference 4x400m champion
                </li>
              </ul>
            </div>
          </div>

          <div className="divider"></div>
          <div className="flex justify-center mb-24">
            <button
              className="btn btn-neutral text-base-200"
              onClick={onButtonClick}
            >
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
