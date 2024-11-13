import React, { useState } from "react";
import Logo from "../img/Logo_transparent.png";

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [isSubmenu2Open, setIsSubmenu2Open] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

    return (
        <>
            <nav className="border-blue-300 bg-blue-100 dark:bg-blue-900 dark:border-blue-800">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                  <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={Logo} className="h-16" alt="DigitalGrow Logo" />
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
                    <ul className="flex flex-col font-medium mt-4 rounded-lg bg-transparent dark:bg-transparent shadow-lg">
                      <li className="relative">
                        <a
                          href="#"
                          className="block py-2 px-3 text-white hover:bg-blue-700 rounded dark:hover:text-white"
                          onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
                        >
                          Que Hacemos
                        </a>
                        {isSubmenuOpen && (
                          <ul className="block py-2 px-3 text-white hover:bg-blue-700 rounded dark:hover:text-white">
                            <li>
                              <a
                                href="#"
                                className="block py-2 px-3 md:dark:hover:text-black dark:hover:bg-white dark:hover:text-black"
                                onClick={() => setIsSubmenu2Open(!isSubmenu2Open)}
                              >
                                Marketing
                              </a>
                              {isSubmenu2Open && (
                                <ul className="block py-2 px-3">
                                  <li>
                                    <a
                                      href="#"
                                      className="block py-2 px-3 md:dark:hover:text-black dark:hover:bg-white dark:hover:text-black"
                                    >
                                      Diseño Web
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
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
                      <li>
                        <a
                          href="#"
                          className="block py-2 px-3 text-white hover:bg-blue-700 rounded dark:hover:text-white"
                        >
                          Quiénes Somos
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block py-2 px-3 text-white hover:bg-blue-700 rounded dark:hover:text-white"
                        >
                          Como Trabajamos
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            
            <div className="flex justify-center items-center h-24">
                <button className="bg-blue-800 text-white text-2xl py-5 px-[40rem] rounded-full">
                    Contactanos
                </button>
            </div>

            <div className="card border rounded-lg overflowd-hidden shadow-lg m-4 bg-blue-500 h-[35rem]">
              <div className="card-body p-10">
                <h5 className="card-title text-3xl font-bold">Card title 4</h5>
                <p className="card-text text-gray-600 text-xl">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text text-sm text-gray-500">
                </p>
              </div>
              <div className="flex justify-start ml-16 p-10">
              <button className="bg-blue-900 text-xl text-white py-4 px-[22rem] rounded-full">
                Contactanos
              </button>
              </div>
              <div className="flex flex-row justify-center m-10 p-7">
                <img
                src={Logo}
                className="card-img-bottom w-full h-40 object-cover"
                alt="Imagern"
              />
                <img
                src={Logo}
                className="card-img-bottom w-full h-40 object-cover"
                alt="Imagern"
              />
              </div>
            </div>

            <div>
              <h1 className="m-5 p-5 text-black text-4xl">This is a wider card with supporting text below as a natural
                  lead-in to additional</h1>
              <p className="font-light text-lg">This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.</p>
            </div>

            <h2 className="m-5 p-5 text-black text-6xl">This is a wider card with supporting text below as a natural
            lead-in to additional</h2>
              <h2 className="text-2xl justify-start m-4 pr-[70rem]">This is a wider card with supporting text below as a natural
                  longer.</h2>
                  <p className="font-light text-lg">This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.</p>

                  <div className="grid grid-cols-3 grid-rows-8 gap-0 m-20">
                    <div className="row-span-6 col-start-2 row-start-1">
                          {/*IMAGEN*/}
                      <img
                      src={Logo}
                      className="card-img-bottom w-full h-40 object-cover px-10"
                      alt="Imagen"
                      />
                    </div>
                    <div className="row-span-8 col-start-1 row-start-1 m-20">
                      <h1 className="text-5xl p-8">Hola Mundo</h1>
                      <p className="text-lg m-6">This is a wider card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.This is a wider card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.</p>

                        <h1 className="text-5xl p-8">Hola Mundo</h1>
                            <p className="text-lg m-6">This is a wider card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.This is a wider card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.</p>

                        <h1 className="text-5xl p-8">Hola Mundo</h1>
                            <p className="text-lg m-6">This is a wider card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.This is a wider card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.</p>
                    </div>
                    <div className="row-span-8 m-20">
                    <h1 className="text-5xl p-8">Hola Mundo</h1>
                      <p className="text-lg m-6">This is a wider card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.This is a wider card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.</p>

                        <h1 className="text-5xl p-8">Hola Mundo</h1>
                            <p className="text-lg m-6">This is a wider card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.This is a wider card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.</p>

                        <h1 className="text-5xl p-8">Hola Mundo</h1>
                            <p className="text-lg m-6">This is a wider card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.This is a wider card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.</p>
                    </div>
                  </div>

                  <div className="rounded-lg overflow-hidden shadow-lg m-44 bg-blue-500 h-[70rem]">
                  <div className="rounded-lg overflow-hidden shadow-lg m-4 p-2 bg-gray-800 h-[22rem]"></div>
                  <div className="rounded-lg overflow-hidden shadow-lg m-4 p-4 bg-green-800 h-[22rem]"></div>
                  <div className="rounded-lg overflow-hidden shadow-lg m-4 p-2 bg-red-800 h-[22rem]"></div>
                </div>

                  <footer className="bg-gray-800 text-white py-10">
                    <div className="container mx-auto flex justify-between items-center">
                      {/* Imagen a la izquierda */}
                      <div className="flex-shrink-0">
                        <img src={Logo} alt="Logo" className="h-20" />
                      </div>

                      {/* Grupo de imágenes a la derecha */}
                      <div className="flex space-x-4">
                        <img src={Logo} alt="Imagen 1" className="h-16" />
                        <img src={Logo} alt="Imagen 2" className="h-16" />
                        <img src={Logo} alt="Imagen 3" className="h-16" />
                      </div>
                    </div>

                    {/* Texto debajo */}
                    <div className="mt-4 text-center text-sm">
                      <p>© 2024 Tu Empresa. Todos los derechos reservados.</p>
                    </div>
                  </footer>
            </>
    )
}

export default App;