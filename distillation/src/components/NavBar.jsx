import { NavLink } from "react-router-dom";
import { logoContents } from "../components/Logo";
import styles from "./NavBar.module.css"; 

const navlinks = [
  { route:"/", name:"Home"},
  { route:"/about", name:"About" },
  { route:"/experience", name:"Experience"},
  { route:"/projects", name:"Projects" },
]

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
      <nav className={styles.navbar}>
        {
          navlinks.map(nl => (
            <NavLink to={nl.route}>
              <p className={styles.link}>
                {nl.name}
              </p>
            </NavLink>
          ))
        }
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
