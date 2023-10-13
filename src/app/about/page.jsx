import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen flex justify-center bg-gradient-to-t from-base-200 via-primary to-base-200">
      <div className="lg:w-1/2 w-3/4 mt-32">
        <h2 className="text-4xl text-neutral font-bold pb-2 text-center">
          About Me
        </h2>
        <div className="p-6 flex flex-col md:flex-row items-start justify-center">
          <Image
            src="/selfie.png"
            alt="selfie"
            width={1750}
            height={1750}
            className="border-2 border-solid border-neutral rounded-box shadow shadow-neutral"
          />
          <p className="md:pl-8 md:pt-0 text-lg text-neutral">
            Hello and welcome to my portfolio! My name is Christian and I am a
            full-stack developer based in Nashville, Tennessee. I earned a
            Full-Stack Web Development certificate from the eDX program through
            Vanderbilt University. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Dignissimos id voluptas dolorem corrupti
            praesentium amet quia, totam doloremque nam placeat, at consectetur,
            nihil tempore voluptatum quidem! Maiores expedita ducimus culpa!
          </p>
        </div>
        <a
          href="/contact"
          className="flex justify-center md:justify-end mb-3 mr-8"
        >
          <button className="btn btn-neutral text-base-200">Message Me!</button>
        </a>
      </div>
    </div>
  );
}
