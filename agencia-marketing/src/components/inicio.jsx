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
      <div className="flex justify-center items-center h-24">
                <button className="bg-blue-800 text-white text-2xl py-5 px-[40rem] rounded-full">
                  <a href="/Formulario">
                  Contactanos
                  </a>
                </button>
            </div>

        <div className="card border rounded-lg overflowd-hidden shadow-lg m-4 bg-blue-500 h-[35rem]">
          <div className="card-body p-10">
            <h5 className="card-title text-3xl font-bold">El cambio es inevitable, el crecimiento es opcional.</h5>
            <p className="card-text text-black text-xl m-1">
            Conoce por qué somos más que una agencia de marketing digital.
            </p>
            <p className="card-text text-sm text-gray-500">
            </p>
          </div>
          <div className="flex justify-start ml-16 p-10">
            <button className="bg-blue-900 text-xl text-white py-4 px-[22rem] rounded-full">
              <a href="/Formulario">
              Tomate un Cafe con Nosotros
              </a>
            </button>
          </div>
          <div className="flex flex-row justify-center m-10 p-7">
            <img
              src={Logo}
              className="card-img-bottom w-60 h-40 object-cover mr-[30rem]"
              alt="Imagern"
            />
            <img
              src={Logo}
              className="card-img-bottom w-60 h-40 object-cover"
              alt="Imagern"
            />
          </div>
        </div>
        {/* Texto en la parte superior */}
        <div className="my-10 text-center">
          <h1 className="m-5 p-5 text-black text-4xl">
          ¿Qué hace diferente a nuestra agencia de marketing digital en Cancún?
          </h1>
          <p className="font-light text-lg">
          El cambio es inevitable, el crecimiento opcional. Todos le tenemos miedo a lo desconocido, realmente ser diferente no está mal. Si haces lo mismo de siempre tendrás los resultados de siempre, 
          cambia tu estrategia con nosotros y haz crecer tus ventas con una estrategia integral. Deja que los especialistas de nuestra agencia de marketing digital te sorprendan.
          </p>
        </div>

        {/* Botón central */}
        {/* <div className="flex justify-center items-center h-24">
          <button className="bg-blue-800 text-white text-2xl py-5 px-[40rem] rounded-full">
            Contáctanos
          </button>
        </div> */}

        {/* Contenedor de la imagen central con los mensajes a los lados */}
        <div className="flex items-center justify-center my-20 space-x-8">
          {/* Mensajes a la izquierda */}
          <div className="flex flex-col items-end space-y-20">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="text-right">
                <h1 className="text-5xl font-bold">SEO</h1>
                <p className="text-lg max-w-xs">
                Creación de campañas SEO basada en on page, off page y estrategia de contenidos. Canal ideal para generar transacciones en tu estrategia en tu estrategia de marketing en Cancún.
                </p>
              </div>
            ))}
          </div>

          {/* Imagen central */}
          <div className="w-[30rem] h-[35rem] flex-shrink-0">
            <img src={Group} className="object-cover w-full h-full rounded-lg" alt="Imagen" />
          </div>

          {/* Mensajes a la derecha */}
          <div className="flex flex-col items-start space-y-20">
            {[...Array(3)].map((_, i) => (
              <div key={i}>
                <h1 className="text-5xl font-bold">
                Diseño web </h1>
                <p className="text-lg max-w-xs">
                Páginas web en Cancún. Somos expertos en creación de páginas web para ventas, entendemos al usuario y a base de experimentos tomamos las desiciones adecuadas para que tu sitio web convierta más.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Sección inferior de tarjetas de colores */}
        <h1 className="text-5xl font-semibold m-10 flex justify-center items-start">Casos de Usos</h1>
        <p className="text-lg">uestro trabajo como agencia digital en Cancún está meticulosamente seleccionado para cada negocio. Desafío en cuestión. Creamos estrategias perspicaces, con un diseño excepcional para cada uno de nuestros socios.</p>
        <div className="rounded-lg overflow-hidden shadow-lg m-44 bg-blue-500 h-[70rem]">
          <div className="rounded-lg overflow-hidden shadow-lg m-4 p-2 bg-white h-[22rem]"> <h1 className="flex justify-center items-center p-[10rem] text-5xl text-black font-semibold">Grupo Avanti</h1></div>
          <div className="rounded-lg overflow-hidden shadow-lg m-4 p-4 bg-white h-[22rem]"> <h1 className="flex justify-center items-center p-[10rem] text-5xl text-black font-semibold">Universidad Cancun UT</h1></div>
          <div className="rounded-lg overflow-hidden shadow-lg m-4 p-2 bg-white h-[22rem]"> <h1 className="flex justify-center items-center p-[10rem] text-5xl text-black font-semibold">Grafo Studio</h1></div>
        </div>
      </main>


      <footer className="">
        <Finalfooter />
      </footer>
    </>
  )
}

export default app;