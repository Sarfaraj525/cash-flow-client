import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    const navbar = (
        <>
            <div className="lg:flex list-none gap-4">
                <NavLink to="/register">
                    <li>
                        <a className="hover:text-red-500 border-b-2 pb-1 border-b-slate-700 shadow-sm" href="#">Register</a>
                    </li>
                </NavLink>
                <NavLink to="/login">
                    <li>
                        <a className="hover:text-red-500 border-b-2 pb-1 border-b-slate-700 shadow-sm" href="#">Login</a>
                    </li>
                </NavLink>
                <NavLink to="/dashboard">
                    <li>
                        <a className="hover:text-red-500 border-b-2 pb-1 border-b-slate-700 shadow-sm" href="#">Dashboard</a>
                    </li>
                </NavLink>
                <li>
                    <a className="hover:text-red-500 border-b-2 pb-1 border-b-slate-700 shadow-sm" href="#contact">Contact</a>
                </li>
                <li className="lg:hidden">
                    <Link to="/login">
                        <button className="bg-[#2196F3] text-white btn">Login</button>
                    </Link>
                </li>
            </div>
        </>
    );

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Item 1</a></li>
                            {navbar}
                        </ul>
                    </div>

                    <Link to="/" className="btn btn-ghost text-xl">
                        <a className="btn btn-ghost text-xl">Cash Flow</a>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navbar}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
