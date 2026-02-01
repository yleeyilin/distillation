import { NavLink } from "react-router-dom";
import { logoContents } from "../components/Logo";

const NavBar = () => {
  return (
    <header className="grid grid-cols-1 lg:grid-cols-3 items-center px-10 py-5 bg-black/80 backdrop-blur-md z-50">
      {/* Logo */}
      <div className="justify-self-start hidden lg:block">
        <NavLink
          to="/"
          className="text-3xl rounded-lg items-center justify-center font-bold hidden lg:block"
        >
          <p className="logo-title bg-clip-text text-transparent bg-linear-to-r from-blue-700 to-green-700 ">
            Yi Lin Lee
          </p>
        </NavLink>
      </div>

      {/* Nav links */}
      <nav className="justify-self-center flex text-xs sm:text-lg gap-10 font-medium border border-gray-600 lg:border-blue-900 rounded-full px-10 items-center p-4 hover:border-gray-200 transition-all duration-300 ease-in-out">
        <NavLink to="/">
          <p
            className="relative 
                            after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full 
                            after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300
                            hover:after:scale-x-100 text-gray-200"
          >
            Home
          </p>
        </NavLink>
        <NavLink to="/about">
          <p
            className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full 
                            after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300
                            hover:after:scale-x-100 text-gray-200"
          >
            About
          </p>
        </NavLink>
        <NavLink to="/experience">
          <p
            className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full 
                            after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300
                            hover:after:scale-x-100 text-gray-200"
          >
            Experience
          </p>
        </NavLink>
        <NavLink to="/projects">
          <p
            className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full 
                            after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300
                            hover:after:scale-x-100 text-gray-200"
          >
            Projects
          </p>
        </NavLink>
      </nav>

      {/* Social icons */}
      <nav className="justify-self-end flex gap-5">
        {
          logoContents.map(lc=>(
            <a
              href={lc.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-blue-900 rounded-full px-1 py-1 transition-all duration-300 ease-in-out hidden lg:block"
            >
              {lc.component}
            </a>
          ))
        }
      </nav>
    </header>
  );
};

export default NavBar;
