import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="header flex items-center gap-10">
        <NavLink to="/" className="w-80 h-15 text-4xl rounded-lg items-center justify-center flex font-bold">
            <p className="bg-clip-text text-transparent bg-linear-to-r from-purple-700 to-blue-400 font-bold">
                Yi Lin Lee
            </p>
        </NavLink>
        <nav className="flex text-2xl gap-10 font-medium absolute top-5 right-10">
            <NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
                <p className="bg-clip-text text-transparent bg-linear-to-r from-blue-700 to-blue-400 font-bold">
                    Home
                </p>
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
                <p className="bg-clip-text text-transparent bg-linear-to-r from-blue-700 to-blue-400 font-bold">
                    About
                </p>
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
                <p className="bg-clip-text text-transparent bg-linear-to-r from-blue-700 to-blue-400 font-bold">
                    Project
                </p>
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
                <p className="bg-clip-text text-transparent bg-linear-to-r from-blue-700 to-blue-400 font-bold">
                    Contact
                </p>
            </NavLink>
        </nav>
    </header>
  )
}

export default NavBar;