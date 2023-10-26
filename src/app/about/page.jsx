import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen flex justify-center bg-gradient-to-t from-base-200 via-primary to-base-200">
      <div className="w-3/4 my-32">
        <h2 className="text-3xl text-neutral font-bold">
          Personal Biography
        </h2>
        <div className="divider"></div> 
        <div className="py-6 mb-12 flex flex-col md:flex-row items-start justify-center">
          <div className="md:pr-12 md:pt-0 text-sm text-neutral leading-8">
            <p>
              Hello, I&apos;m Christian Gonzales, a Full-Stack Web Developer and
              Audio Engineer based in Nashville, TN. My passion for learning,
              music creation, and technology led me to pursue a degree in Audio
              Engineering Technology at Belmont University. I then worked as an
              Audio Technical Engineer to gain an understanding of small scale
              electronics for audio design, eventually getting hired by various
              artists and engineers including Gillian Welch and Dweezil Zappa.
            </p>
            <p className="pt-6">
              Embarking on a new challenge I enrolled in the edX Full-Stack Web
              Development Bootcamp through Vanderbilt University. My goal was to
              use my problem solving and detail oriented skills I gained as an
              audio engineer and apply them to web development. I had hands on
              experience with developing applications using programming
              languages such as JavaScript and React and databases SQL and
              MongoDB. Throughout this bootcamp I constantly faced challenges
              where I had to study documentation and individually research
              problems to achieve the final product I desired.
            </p>
            <p className="pt-6">
              I believe that learning is one of most important aspects of life,
              and I do not think I will ever stop. I desire to start a career in
              web development and continue to strengthen my coding skills. I
              believe both my audio engineering background and certificate in
              web development has given me the necessary work ethic and skills
              to succeed as a developer.
            </p>
            <p className="pt-6">
              Thank you for taking the time to view my portfolio and learn about my journey! 
            </p>
          </div>
          <Image
            src="/selfie.png"
            alt="selfie"
            width={1000}
            height={1000}
            className="border-2 border-solid border-neutral rounded-box shadow shadow-neutral"
          />
        </div>
        <a
          href="/contact"
          className="flex justify-center md:justify-start mb-3 mr-8"
        >
          <button className="btn btn-neutral text-base-200">Message Me!</button>
        </a>
      </div>
    </div>
  );
}
