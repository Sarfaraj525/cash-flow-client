import React, { useState, useEffect } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHome, FaPlus, FaList, FaUsers, FaSignInAlt } from 'react-icons/fa';
// import jwt_decode from "jwt-decode";

const DashBoard = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAgent, setIsAgent] = useState(false);
    const [isUser, setIsUser] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const decoded = jwt_decode(token);
            const role = decoded.role;

            if (role === "admin") {
                setIsAdmin(true);
            } else if (role === "agent") {
                setIsAgent(true);
            } else if (role === "user") {
                setIsUser(true);
            }
        }
    }, []);

    const handleLogOut = () => {
        localStorage.removeItem("token");
        window.location.href = "/login";
    };

    return (
        <div className="drawer lg:drawer-open ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center ">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet />
            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-cyan-500 text-base-content">
                    {isAdmin && (
                        <>
                            <motion.li whileHover={{ scale: 1.1 }}>
                                <NavLink to="/dashboard/adminHome"> <FaHome /> Dashboard Home Page</NavLink>
                            </motion.li>
                            <motion.li whileHover={{ scale: 1.1 }}>
                                <NavLink to="/dashboard/admin-profile"> <FaPlus /> Admin Profile</NavLink>
                            </motion.li>
                            <motion.li whileHover={{ scale: 1.1 }}>
                                <NavLink to="/dashboard/all-users"> <FaUsers /> All Users</NavLink>
                            </motion.li>
                            <motion.li whileHover={{ scale: 1.1 }}>
                                <NavLink to="/dashboard/all-transactions"> <FaList /> All Transactions</NavLink>
                            </motion.li>
                        </>
                    )}
                    {isAgent && (
                        <>
                            <motion.li whileHover={{ scale: 1.1 }}>
                                <NavLink to="/dashboard/agentHome"> <FaHome /> Dashboard Home Page</NavLink>
                            </motion.li>
                            <motion.li whileHover={{ scale: 1.1 }}>
                                <NavLink to="/dashboard/agent-profile"> <FaPlus /> Agent Profile</NavLink>
                            </motion.li>
                            <motion.li whileHover={{ scale: 1.1 }}>
                                <NavLink to="/dashboard/agent-transactions"> <FaList /> Transactions</NavLink>
                            </motion.li>
                        </>
                    )}
                    {isUser && (
                        <>
                            <motion.li whileHover={{ scale: 1.1 }}>
                                <NavLink to="/dashboard/userHome"> <FaHome /> Dashboard Home Page</NavLink>
                            </motion.li>
                            <motion.li whileHover={{ scale: 1.1 }}>
                                <NavLink to="/dashboard/user-profile"> <FaPlus /> User Profile</NavLink>
                            </motion.li>
                            <motion.li whileHover={{ scale: 1.1 }}>
                                <NavLink to="/dashboard/transactions"> <FaList /> Transactions</NavLink>
                            </motion.li>
                        </>
                    )}
                    <div className="divider"></div>
                    <motion.li whileHover={{ scale: 1.1 }}>
                        <NavLink to="/"><FaHome /> Home</NavLink>
                    </motion.li>
                    <motion.li whileHover={{ scale: 1.1 }}>
                        <Link onClick={handleLogOut} className=""><FaSignInAlt /> LogOut</Link>
                    </motion.li>
                </ul>
            </div>
        </div>
    );
};

export default DashBoard;
