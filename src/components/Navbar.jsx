import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    const navLinks = <>
        <li><NavLink to="/" className="mr-4">Home</NavLink></li>
        <li><NavLink to="/" className="mr-4">About</NavLink></li>
        <li><NavLink to="/" className="mr-4">Contact</NavLink></li>
    </>


    return (
        <div className="navbar">
            {/* Navbar start */}
            <div className="navbar-start lg:hidden">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navLinks
                        }
                    </ul>
                </div>
            </div>
            {/* Navbar center */}
            <div className="navbar-start hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navLinks
                    }
                </ul>
            </div>
            {/* Navbar end */}
            <div className="navbar-end">
                <Link to="/login" className="btn lg:w-32">Login</Link>
            </div>
        </div>
    );
}

export default Navbar