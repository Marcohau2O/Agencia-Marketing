import React from "react";
import Logo from "../img/Logo_transparent.png";
import Navbar from "./Navbar";
import Group from "../img/Group.png";
import Finalfooter from "../components/finalfooter";

function app() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4">

        {/* Botón central */}
        <div className="flex justify-center items-center h-24">
          <button className="bg-blue-800 text-white text-2xl py-5 px-[40rem] rounded-full">
            Contáctanos
          </button>
        </div>
        {/* Sección de navegación */}

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
          <div className="flex flex-row justify-between items-center m-10 p-7">
            <img
              src={Logo}
              className="w-60 h-40 object-cover"
              alt="Imagen Izquierda"
            />
            <img
              src={Logo}
              className="w-60 h-40 object-cover"
              alt="Imagen Derecha"
            />
          </div>

        </div>
        {/* Texto en la parte superior */}
        <div className="my-10 text-center">
          <h1 className="m-5 p-5 text-black text-4xl">
            This is a wider card with supporting text below as a natural lead-in to additional
          </h1>
          <p className="font-light text-lg">
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </p>
        </div>

        {/* Contenedor de la imagen central con los mensajes a los lados */}
        <div className="flex items-center justify-center my-20 space-x-8">
          {/* Mensajes a la izquierda */}
          <div className="flex flex-col items-end space-y-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="text-right">
                <h1 className="text-3xl font-bold">Hola Mundo</h1>
                <p className="text-lg max-w-xs">
                  This is a wider card with supporting text below as a natural lead-in to additional content.
                  This content is a little bit longer.
                </p>
              </div>
            ))}
          </div>

          {/* Imagen central */}
          <div className="w-64 h-64 flex-shrink-0">
            <img src={Group} className="object-cover w-full h-full rounded-lg" alt="Imagen" />
          </div>

          {/* Mensajes a la derecha */}
          <div className="flex flex-col items-start space-y-8">
            {[...Array(3)].map((_, i) => (
              <div key={i}>
                <h1 className="text-3xl font-bold">Hola Mundo</h1>
                <p className="text-lg max-w-xs">
                  This is a wider card with supporting text below as a natural lead-in to additional content.
                  This content is a little bit longer.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Sección inferior de tarjetas de colores */}
        <div className="rounded-lg overflow-hidden shadow-lg m-44 bg-blue-500 h-[70rem]">
          <div className="rounded-lg overflow-hidden shadow-lg m-4 p-2 bg-gray-800 h-[22rem]"></div>
          <div className="rounded-lg overflow-hidden shadow-lg m-4 p-4 bg-green-800 h-[22rem]"></div>
          <div className="rounded-lg overflow-hidden shadow-lg m-4 p-2 bg-red-800 h-[22rem]"></div>
        </div>
      </main>


      <footer className="">
        <Finalfooter />
      </footer>
    </>
  )
}

export default app;