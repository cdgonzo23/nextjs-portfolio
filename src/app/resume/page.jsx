import Image from "next/image";

export default function Resume() {
  return (
    <div className="hero min-h-screen bg-gradient-to-t from-base-200 from-0% via-primary via-50% to-base-200 to-100%">
      <div className="flex flex-col items-center py-24">
        <a
          className="resume-link pb-12"
          href="../../../public/assets/Gonzales_Resume.pdf"
          download
        >
          <button className="btn btn-secondary">Download Resume</button>
        </a>
        <Image
          src="/Gonzales_Resume.png"
          alt="resume"
          width="700"
          height="700"
        ></Image>
      </div>
    </div>
  );
}
