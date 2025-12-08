import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="header flex justify-between items-center px-10 py-5">
        <NavLink to="/" className="text-4xl rounded-lg items-center justify-center flex font-bold hover:scale-110">
            <p className="bg-clip-text text-transparent bg-linear-to-r from-purple-700 to-blue-400 font-bold">
                Yi Lin Lee
            </p>
        </NavLink>
        <nav className="flex text-xl gap-10 font-medium">
            <NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
                <p className="bg-clip-text text-transparent bg-white hover:scale-110">
                    Home
                </p>
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
                <p className="bg-clip-text text-transparent bg-white hover:scale-110">
                    About
                </p>
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
                <p className="bg-clip-text text-transparent bg-white hover:scale-110">
                    Projects
                </p>
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
                <p className="bg-clip-text text-transparent bg-white hover:scale-110">
                    Contact
                </p>
            </NavLink>
        </nav>
    </header>
  )
}

export default NavBar;