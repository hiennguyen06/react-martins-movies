import React from "react";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-left">
                    <Link to="/" className="logo">
                        MARTIN'S MOVIES
                    </Link>
                    <button className="btn-menu">
                        <FaAlignRight></FaAlignRight>
                    </button>
                </div>
                <div className="navbar-right">
                    <ul className="nav-links">
                        <Link to="/">
                            <li>Home</li>
                        </Link>
                        <Link to="/">
                            <li>Blog</li>
                        </Link>
                        <Link to="/">
                            <li>Contact</li>
                        </Link>
                        <Link to="/" className="btn-main">
                            LOGIN
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
