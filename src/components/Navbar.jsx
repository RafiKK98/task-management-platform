import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const Navbar = () => {

    const { user, logOut, setUser } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logOut()
        .then(() => {
            setUser(null);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'User logged out successfully.',
                showConfirmButton: false,
                timer: 1500
            });
            navigate('/login');
        })
        .catch(error => console.log(`Error: ${error}`))
    }

    const navLinks = <>
        <li className="mr-4"><NavLink to="/" className="bg-primary active:bg-secondary">Home</NavLink></li>
        <li className="mr-4"><NavLink to="/about" className="bg-primary active:bg-secondary">About</NavLink></li>
        <li className="mr-4"><NavLink to="/contact" className="bg-primary active:bg-secondary">Contact</NavLink></li>
    </>


    return (
        <div className="navbar bg-slate-500">
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
                {
                    user ? 
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="User avatar" src={user.photoURL} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    {user.displayName}
                                </a>
                            </li>
                            <li><Link to={"/dashboard"}>Dashboard</Link></li>
                            <li onClick={handleLogout}><a>Logout</a></li>
                        </ul>
                    </div>
                    :
                    <Link to="/login" className="btn btn-primary text-white lg:w-32">Login</Link>
                }
            </div>
        </div>
    );
}

export default Navbar