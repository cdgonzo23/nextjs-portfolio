import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer justify-around p-5 bg-base-200">
      <nav className="pr-3">
        <header className="mb-2 font-semibold uppercase text-neutral">Portfolio</header>
        <a href="/about" className="link link-hover text-neutral">
          About me
        </a>
        <a href="/projects" className="link link-hover text-neutral">
          Projects
        </a>
        <a href="/contact" className="link link-hover text-neutral">
          Contact
        </a>
        <a href="/" className="link link-hover text-neutral">
          Home
        </a>
      </nav>
      <nav>
        <header className="mb-2 font-semibold uppercase md:pl-2 text-neutral">Social</header>
        <div className="flex items-center">
          <a href="https://github.com/cdgonzo23">
            <Image
              width="50"
              height="50"
              src="/github.png"
              alt="github logo"
              className="fill-current"
            ></Image>
          </a>
          <a href="https://www.linkedin.com/in/cd-gonzo4223/">
            <Image
              width="40"
              height="40"
              src="/linkedin.png"
              alt="linkedin logo"
              className="fill-current"
            ></Image>
          </a>
          <a
            href="https://stackoverflow.com/users/22528990/cd-gonzo"
            className="pl-2"
          >
            <Image
              width="30"
              height="30"
              src="/stack.png"
              alt="stack overflow logo"
              className="fill-current"
            ></Image>
          </a>
        </div>
      </nav>
    </footer>
  );
}
