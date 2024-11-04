import React from "react";
import Logo from "../img/Logo_transparent.png";

function app() {
    return (
        <>
        <nav class="border-blue-300 bg-blue-100 dark:bg-blue-900 dark:border-blue-800">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img src={Logo} class="h-16" alt="DigitalGrow Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">DigitalGrow</span>
            </a>
            <button data-collapse-toggle="navbar-hamburger" type="button" class="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-hamburger" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
            </button>
            <div class="hidden w-full" id="navbar-hamburger">
            <ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <li>
                <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded dark:bg-blue-600" aria-current="page">Home</a>
                </li>
                <li>
                <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Services</a>
                </li>
                <li>
                <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white">Pricing</a>
                </li>
                <li>
                <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Contact</a>
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
              <button className="bg-red-500 text-xl text-white py-4 px-[22rem] rounded-full">
                Botton
              </button>
              </div>
              <div className="flex flex-row justify-center m-10 p-7">
                <img
                src="..."
                className="card-img-bottom w-full h-40 object-cover"
                alt="Imagern"
              />
                <img
                src="..."
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

            <h2 className="m-5 p-5 text-black text-3xl">This is a wider card with supporting text below as a natural
            lead-in to additional</h2>
              <h2 className="text-2xl justify-start m-4 pr-[70rem]">This is a wider card with supporting text below as a natural
                  longer.</h2>
                  <p className="font-light text-lg">This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.</p>
            </>
    )
}

export default app;