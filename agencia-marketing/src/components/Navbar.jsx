import React, { useState } from 'react';
import Logo from "../img/Logo_transparent.png";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [isSubmenu2Open, setIsSubmenu2Open] = useState(false);

    // Toggle menu visibility
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="border-blue-300 bg-blue-100 dark:bg-blue-900 dark:border-blue-800">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src= {Logo} className="h-16" alt="DigitalGrow Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        DigitalGrow
                    </span>
                </a>
                <button
                    onClick={toggleMenu}
                    type="button"
                    className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-hamburger"
                    aria-expanded={isMenuOpen ? "true" : "false"}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                <div
                    className={`w-full ${isMenuOpen ? "block" : "hidden"}`}
                    id="navbar-hamburger"
                >
                    <ul className="flex flex-col font-medium mt-4 rounded-lg bg-transparent dark:bg-transparent shadow-lg items-center">
                        <li className="relative w-full text-center">
                            <a
                                href="#"
                                className="block py-2 px-3 text-white hover:bg-blue-700 rounded dark:hover:text-white"
                                onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
                            >
                                Que Hacemos
                            </a>
                            {isSubmenuOpen && (
                                <ul className="flex flex-col items-center text-white hover:bg-blue-700 rounded dark:hover:text-white">
                                    <li className="text-center w-full">
                                        <a
                                            href="#"
                                            className="block py-2 px-3 md:dark:hover:text-black dark:hover:bg-white dark:hover:text-black"
                                            onClick={() => setIsSubmenu2Open(!isSubmenu2Open)}
                                        >
                                            Marketing
                                        </a>
                                        {isSubmenu2Open && (
                                            <ul className="flex flex-col items-center w-full">
                                                <li>
                                                    <a
                                                        href="/disenoweb"
                                                        className="block py-2 px-3 md:dark:hover:text-black dark:hover:bg-white dark:hover:text-black"
                                                    >
                                                        Diseño Web
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="/redssociales"
                                                        className="block py-2 px-3 md:dark:hover:text-black dark:hover:bg-white dark:hover:text-black"
                                                    >
                                                        Redes Sociales
                                                    </a>
                                                </li>
                                            </ul>
                                        )}
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li className="w-full text-center">
                            <a
                                href="/somos"
                                className="block py-2 px-3 text-white hover:bg-blue-700 rounded dark:hover:text-white"
                            >
                                Quiénes Somos
                            </a>
                        </li>
                        <li className="w-full text-center">
                            <a
                                href="/trabajamos"
                                className="block py-2 px-3 text-white hover:bg-blue-700 rounded dark:hover:text-white"
                            >
                                Como Trabajamos
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
