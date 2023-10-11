import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className="hero min-h-screen bg-gradient-to-t from-primary from-80% to-base-200 to-100%">
        <div className="hero-content text-center">
          <div className="max-w-md bg-base-200 py-4 rounded-box">
            <h1 className="text-5xl font-bold text-neutral">Welcome!</h1>
            <p className="p-6 text-lg text-neutral">
              Hello! My name is Christian Gonzales and I am a Full Stack Web
              Developer from Nashville, Tennessee.
            </p>
            <a href="/projects">
              <button className="btn btn-primary mx-2 text-base-200">My Projects</button>
            </a>
            <a href="/contact">
              <button className="btn btn-neutral mx-2 text-base-200">Contact Me</button>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-primary pb-56">
        <div className="text-center flex flex-col justify-center items-center">
          <h2 className="text-4xl font-bold text-neutral">Skills</h2>
          <div className="grid grid-cols-4 gap-4 py-8">
            <div className="chat-bubble chat-bubble-secondary w-32 text-neutral">JavaScript</div>
            <div className="chat-bubble chat-bubble-secondary w-32 text-neutral">React.js</div>
            <div className="chat-bubble chat-bubble-secondary w-32 text-neutral">HTML</div>
            <div className="chat-bubble chat-bubble-secondary w-32 text-neutral">CSS</div>
            <div className="chat-bubble chat-bubble-secondary w-32 text-neutral">SQL</div>
            <div className="chat-bubble chat-bubble-secondary w-32 text-neutral">Node.js</div>
            <div className="chat-bubble chat-bubble-secondary w-32 text-neutral">Express.js</div>
            <div className="chat-bubble chat-bubble-secondary w-32 text-neutral">REST API&apos;s</div>
            <div className="chat-bubble chat-bubble-secondary w-32 text-neutral">MongoDB</div>
            <div className="chat-bubble chat-bubble-secondary w-32 text-neutral">Next.js</div>
            <div className="chat-bubble chat-bubble-secondary w-32 text-neutral">VS Code</div>
            <div className="chat-bubble chat-bubble-secondary w-32 text-neutral">GitHub</div>
          </div>
        </div>
      </div>
      <div>
        <div className="min-h-screen flex justify-center bg-gradient-to-t from-base-200 to-primary">
          <div className="w-2/3">
            <h2 className="text-4xl text-neutral font-bold pb-4">This Is Me!</h2>
            <div className="hero bg-secondary rounded-box">
              <div className="hero-content p-6 flex-row items-start">
                <div className="avatar">
                  <div className="w-48 rounded-full ring ring-seconday-focus ring-offset-base-100 ring-offset-2">
                    <Image
                      src="/selfie.png"
                      alt="selfie"
                      width="100"
                      height="100"
                    />
                  </div>
                </div>
                <div>
                  <p className="pl-2 text-lg text-neutral">
                    Hello and welcome to my portfolio! My name is Christian and I am a full-stack developer based in Nashville, Tennessee. I earned a Full-Stack Web Development certificate from the eDX program through Vanderbilt University.
                  </p>
                  <button className="mt-6 btn btn-neutral">View More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
