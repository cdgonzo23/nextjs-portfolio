import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className="hero min-h-screen bg-gradient-to-t from-primary from-80% to-base-200 to-100%">
        <div className=" text-center">
          <div className="max-w-md w-80 md:w-auto  bg-base-200 py-4 rounded-box">
            <h1 className="text-5xl font-bold text-neutral">Welcome!</h1>
            <p className="p-6 text-lg text-neutral">
              Hello! My name is{" "}
              <span className="font-bold">Christian Gonzales</span> and I am a
              Full Stack Web Developer from Nashville, Tennessee.
            </p>
            <a href="/projects">
              <button className="btn btn-primary mx-2 text-base-200">
                My Projects
              </button>
            </a>
            <a href="/contact">
              <button className="btn btn-neutral mx-2 text-base-200">
                Contact Me
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-primary pb-56">
        <div className="text-center flex flex-col justify-center items-center">
          <h2 className="text-4xl font-bold text-neutral">Skills</h2>
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
          <a
            href="/resume"
            className="flex justify-center md:justify-end mb-3 mr-8"
          >
            <button className="btn btn-neutral text-base-200">
              View My Full Resume
            </button>
          </a>
        </div>
      </div>
      <div className="min-h-screen flex justify-center bg-gradient-to-t from-base-200 to-primary">
        <div className="lg:w-1/2 w-3/4">
          <h2 className="text-4xl text-neutral font-bold pb-2">This Is Me!</h2>
          <div className="bg-secondary rounded-box border-solid border-neutral border-2 shadow shadow-neutral">
            <div className="p-6 flex flex-col md:flex-row items-start justify-center">
              <div className="avatar" style={{ position: "inherit" }}>
                <div className="w-48 rounded-full ring ring-seconday-focus ring-offset-base-100 ring-offset-2">
                  <Image
                    src="/selfie.png"
                    alt="selfie"
                    width="100"
                    height="100"
                  />
                </div>
              </div>
              <p className="md:pl-8 pt-8 md:pt-0 text-lg text-neutral">
                Hello and welcome to my portfolio! My name is Christian and I am
                a full-stack developer based in Nashville, Tennessee. I earned a
                Full-Stack Web Development certificate from the edX program
                through Vanderbilt University. With a keen eye for detail and a
                passion for design, I develop websites with the ideal user
                exerperience in mind. I have worked on projects using JavaScript, SQL,
                React, MongoDB and I  built this portfolio with Nextjs!
              </p>
            </div>
            <a
              href="/about"
              className="flex justify-center md:justify-end mb-3 mr-8"
            >
              <button className="btn btn-neutral text-base-200">
                View More
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
