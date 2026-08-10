import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuIcon, XIcon, SearchIcon } from "lucide-react";
import hero from "../assets/face.png";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "motion/react"
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleLinkClick = () => {
        window.scrollTo(0, 0);
        setIsMenuOpen(false);
    };

    const loginButtonClick = () => {
        window.scrollTo(0, 0);
        setIsMenuOpen(false);
        navigate("/login");
    };


    return (
        <div className="relative flex items-center bg-[#0B0B0F] justify-between w-full px-6 py-6 text-white">
            {/* Logo */}
            <Link
                className="flex items-center max-md:flex-1"
                to="/"
                onClick={handleLinkClick}
            >
                <img
                    src={hero}
                    alt="FresherAI Logo"
                    className="w-12 h-12 rounded-full object-cover"
                />
                <span className="ml-2 text-xl font-bold">FresherAI</span>
            </Link>

            {/* Navigation */}
            <div
                className={`max-md:absolute max-md:top-0 max-md:w-full max-md:h-screen max-md:px-9
        max-md:font-medium max-md:text-lg z-50 flex flex-col md:flex-row
        items-center max-md:justify-center gap-10 md:px-6 py-3 md:rounded-full
        backdrop-blur bg-black/70 md:bg-white/10 md:border border-gray-300/20
        overflow-hidden transition-all duration-300
        ${isMenuOpen ? "max-md:left-0" : "max-md:left-full"}`}
            >
                {/* Close button */}
                <XIcon
                    onClick={() => setIsMenuOpen(false)}
                    className="md:hidden absolute top-6 right-6 w-6 h-6 cursor-pointer"
                />

                <Link onClick={handleLinkClick} to="/">
                    Home
                </Link>

                <Link onClick={handleLinkClick} to="/dashboard">
                    Dashboard
                </Link>

                <Link onClick={handleLinkClick} to="/theaters">
                    Theaters
                </Link>

                <Link onClick={handleLinkClick} to="/releases">
                    Releases
                </Link>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-5">
                <motion.button onClick={loginButtonClick}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white hover:bg-gray-300 text-black font-bold py-2 px-4 rounded-full transition duration-300">
                    Log In
                    <FaArrowRight className="inline-block ml-2" />
                </motion.button>
                <MenuIcon
                    onClick={() => setIsMenuOpen(true)}
                    className="md:hidden w-8 h-8 cursor-pointer"
                />
            </div>
        </div>
    );
};

export default Navbar;