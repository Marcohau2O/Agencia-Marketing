import React, { useState } from 'react';
import BurgerButton from './BurgerButton';

function Navbar() {
    const [clicked, setClicked] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <nav className="p-2 bg-gray-800 flex items-center justify-between relative">
            <h2 className="text-white font-light">
                <span className="font-bold">App</span>
            </h2>

            <div
                className={`absolute top-[-700px] left-[-2000px] right-0 transition-all duration-500 ease-in-out text-center 
                ${clicked ? 'top-1/3 left-0 right-0 w-full block' : ''} md:static md:flex md:items-center md:w-auto`}
            >

                {/* Catálogo Dropdown */}
                <div className="relative inline-block">
                    <button
                        onClick={toggleDropdown}
                        className="flex items-center text-white text-2xl md:text-base md:mr-4 mb-4 md:mb-0"
                    >
                        Que Hacemos
                        <svg
                            className={`ml-1 w-4 h-4 transition-transform duration-300 ${dropdownOpen ? 'transform rotate-180' : ''
                                }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    {dropdownOpen && (
                        <ul className="absolute bg-gray-700 text-white w-48 mt-2 rounded shadow-lg">
                            <li>
                                <a
                                    onClick={handleClick}
                                    href="/disenoweb"
                                    className="block px-4 py-2 hover:bg-gray-600"
                                >
                                    Diseño Web
                                </a>
                            </li>
                            <li>
                                <a
                                    onClick={handleClick}
                                    href="#"
                                    className="block px-4 py-2 hover:bg-gray-600"
                                >
                                    Redes Sociales
                                </a>
                            </li>
                            <li>
                                <hr className="border-gray-600" />
                                <a
                                    onClick={handleClick}
                                    href="#"
                                    className="block px-4 py-2 hover:bg-gray-600"
                                >
                                    Marketing
                                </a>
                            </li>

                        </ul>
                    )}
                </div>

                <a
                    onClick={handleClick}
                    href="#h"
                    className="block text-white text-2xl md:text-base md:inline md:mr-4 mb-4 md:mb-0"
                >
                    Quienes somos
                </a>
                <a
                    onClick={handleClick}
                    href="#h"
                    className="block text-white text-2xl md:text-base md:inline md:mr-4"
                >
                    Como Trabajamos
                </a>

            </div>

            <div className="md:hidden">
                <BurgerButton clicked={clicked} handleClick={handleClick} />
            </div>

            <div
                className={`bg-gray-900 absolute top-[-1000px] left-[-1000px] w-full h-full transition-all duration-600 ease-in-out 
                ${clicked ? 'top-0 left-0 rounded-br-[50%]' : ''}`}
                style={{ zIndex: -1 }}
            ></div>
        </nav>
    );
}

export default Navbar;
