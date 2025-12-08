import { NavLink } from "react-router-dom";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const NavBar = () => {
  return (
    <header className="header flex justify-between items-center px-10 py-5">
        {/* Logo */}
        <NavLink to="/" className="text-3xl rounded-lg items-center justify-center flex font-bold">
            <p className="bg-clip-text text-transparent bg-linear-to-r to-purple-700 from-blue-700 font-bold hover:scale-110">
                Yi Lin Lee
            </p>
        </NavLink>

        {/* Nav links */}
        <nav className="flex text-lg gap-10 font-medium border border-blue-800 rounded-full px-10 items-center p-4">
            <NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
                <p className="bg-clip-text text-transparent bg-white hover:scale-110 hover:bg-gray-300 hover:underline">
                    Home
                </p>
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
                <p className="bg-clip-text text-transparent bg-white hover:scale-110 hover:bg-gray-300 hover:underline">
                    About
                </p>
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
                <p className="bg-clip-text text-transparent bg-white hover:scale-110 hover:bg-gray-300 hover:underline">
                    Projects
                </p>
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
                <p className="bg-clip-text text-transparent bg-white hover:scale-110 hover:bg-gray-300 hover:underline">
                    Contact
                </p>
            </NavLink>
        </nav>

        {/* Social icons */}
    </header>
  )
}

export default NavBar;