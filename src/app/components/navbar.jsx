export default function Navbar() {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-base-200 py-6 px-8">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 flex-col sm:pl-12 pr-2 mx-2 items-start">
            <a href="/">
              <h1 className="text-xl font-semibold text-neutral">
                Christian Gonzales
              </h1>
              <h3 className="text-neutral">Full Stack Web Developer</h3>
            </a>
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu inline-flex flex-row flex-wrap text-sm leading-5 p-2 m-0 list-non">
              {/* Navbar menu content here */}
              <li className="mx-2">
                <a className="text-neutral hover:bg-inherit after:bg-neutral after:absolute after:h-1 after:w-0 after:bottom-0 after:left-4 hover:after:w-2/3 after:transition-all after:duration-300" href="/">
                  Home
                </a>
              </li>
              <li className="mx-2">
                <a className="text-neutral hover:bg-inherit after:bg-neutral after:absolute after:h-1 after:w-0 after:bottom-0 after:left-4 hover:after:w-2/3 after:transition-all after:duration-300" href="/projects">
                  Projects
                </a>
              </li>
              <li className="mx-2">
                <a className="text-neutral hover:bg-inherit after:bg-neutral after:absolute after:h-1 after:w-0 after:bottom-0 after:left-4 hover:after:w-2/3 after:transition-all after:duration-300" href="/about">
                  About Me
                </a>
              </li>
              <li className="mx-2">
                <a className="text-neutral hover:bg-inherit after:bg-neutral after:absolute after:h-1 after:w-0 after:bottom-0 after:left-4 hover:after:w-2/3 after:transition-all after:duration-300" href="/resume">
                  Resume
                </a>
              </li>
              <li className="mx-2">
                <a className="text-neutral w-40 border-2 justify-center border-current border-sm hover:bg-neutral hover:text-base-200" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 md:w-80 min-h-full bg-base-200">
          {/* Sidebar content here */}
          <li>
            <a className="text-neutral hover:bg-secondary" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="text-neutral hover:bg-secondary" href="/projects">
              Projects
            </a>
          </li>
          <li>
            <a className="text-neutral hover:bg-secondary" href="/about">
              About Me
            </a>
          </li>
          <li>
            <a className="text-neutral hover:bg-secondary" href="/contact">
              Contact
            </a>
          </li>
          <li>
            <a className="text-neutral hover:bg-secondary" href="/resume">
              Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
