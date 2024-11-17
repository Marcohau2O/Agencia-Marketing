import React, { useState, useEffect } from 'react';
import Logo from "../img/Logo_transparent.png";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [isSubmenu2Open, setIsSubmenu2Open] = useState(false);
    const [timeoutId, setTimeoutId] = useState(null); // Para manejar el retraso

    // Funciones para mostrar y ocultar los submenús
    const handleMouseEnter = () => {
        setIsSubmenuOpen(true);
    };

    const handleMouseLeave = () => {
        if (!isSubmenu2Open) {
            const id = setTimeout(() => {
                setIsSubmenuOpen(false);
            }, 800);
            setTimeoutId(id);
        }
    };

    const handleMouseEnterSubmenu = () => {
        setIsSubmenu2Open(true);
    };

    const handleMouseLeaveSubmenu = () => {
        setIsSubmenu2Open(false);
    };

    const handleClickOutside = (event) => {
        if (!event.target.closest('.menu-container')) {
            clearTimeout(timeoutId);
            setIsSubmenuOpen(false);
            setIsSubmenu2Open(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
            clearTimeout(timeoutId);
        };
    }, [timeoutId]);

    return (
        <nav className="border-blue-600 bg-blue-700 dark:bg-blue-900 dark:border-blue-800">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={Logo} className="h-16" alt="DigitalGrow Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                        DigitalGrow
                    </span>
                </a>
                <button className="bg-blue-800 text-white text-lg py-3 px-[9rem] rounded-full ml-5">
                  <a href="/Formulario">
                  Contactanos
                  </a>
                </button>
                <div
                    className="relative menu-container"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <button
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        type="button"
                        className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 mr-[5rem]"
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
                    {isSubmenuOpen && (
                        <div className="absolute bg-white border mt-2 rounded shadow-lg">
                            <ul className="flex flex-col">
                                    <li
                                        className="block py-4 px-6 text-black hover:bg-blue-700 rounded dark:hover:text-black w-60"
                                        onMouseEnter={handleMouseEnterSubmenu}
                                        onMouseLeave={handleMouseLeaveSubmenu}
                                    >
                                        Que Hacemos
                                        {isSubmenu2Open && (
                                        <ul className="absolute left-full top-0 bg-white border mt-0 ml-2 rounded shadow-lg w-48">
                                            <li className="p-2">
                                            <a
                                                href="/disenoweb"
                                                className="block py-4 px-6 text-black hover:bg-blue-700 rounded dark:hover:text-black"
                                            >
                                                Diseño Web
                                            </a>
                                            </li>
                                            <li className="p-2">
                                            <a
                                                href="/redssociales"
                                                className="block py-4 px-6 text-black hover:bg-blue-700 rounded dark:hover:text-black"
                                            >
                                                Redes Sociales
                                            </a>
                                            </li>
                                        </ul>
                                        )}
                                    </li>
                                </ul>
                                <ul className="flex flex-col">
                                    <a
                                        href="/somos"
                                        className="block py-4 px-6 text-black hover:bg-blue-700 rounded dark:hover:text-black w-60"
                                    >
                                        Quiénes Somos
                                    </a>
                                </ul>
                                <ul className="flex flex-col">
                                    <a
                                        href="/trabajamos"
                                        className="block py-4 px-6 text-black hover:bg-blue-700 rounded dark:hover:text-black w-60"
                                    >
                                        Como Trabajamos
                                    </a>
                                </ul>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;