import React from "react";
import Logo from "../img/Logo_transparent.png";
import Navbar from "./Navbar";
import Group from "../img/Group.png";
import Finalfooter from "../components/finalfooter";
import cerezas from "../img/cerezas.png";
import flex from "../img/flex.png";
import marques from "../img/marques.png";
import twin from "../img/twin.png";
import vancouver from "../img/vancouver.png";

function app() {
  return (
    <>
      <Navbar />
      {/* <div className="flex justify-center items-center h-24">
                <button className="bg-blue-800 text-white text-2xl py-5 px-[40rem] rounded-full">
                  <a href="/Formulario">
                  Contactanos
                  </a>
                </button>
            </div> */}

          <div className="card border overflow-hidden shadow-lg my-5 mr-[100rem] bg-blue-500 h-[35rem] w-[120rem]">
            <div className="flex flex-col md:flex-row p-10">
              <div className="flex-1">
                <h5 className="card-title text-3xl font-bold m-5 p-5">El cambio es inevitable, el crecimiento es opcional.</h5>
                <p className="card-text text-black text-xl m-6 p-6">
                  Una agencia de marketing digital es mucho más que solo crear campañas publicitarias; se convierte en un socio estratégico que aborda el negocio de manera integral. Ofrecen consultoría estratégica para definir objetivos claros y crear planes a largo plazo, innovan con las últimas tendencias tecnológicas y creativas, y trabajan para fortalecer la identidad de la marca en todos los canales.
                </p>
              </div>
              <div className="flex-1 flex justify-center items-center">
                <img
                  src={Logo}
                  className="w-80 h-60 object-cover my-[2rem]"
                  alt="Logo"
                />
              </div>
            </div>
            <div className="flex justify-start ml-16">
              <button className="bg-blue-900 text-xl text-white py-2.5 px-[4rem] rounded-full">
                <a href="/Formulario">
                  Tomate un Cafe con Nosotros
                </a>
              </button>
            </div>
          </div>


      <main className="container mx-auto px-5">
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
            {[{img:"imagen", titel:"SEO", text:"Creación de campañas SEO basada en on page, off page y estrategia de contenidos."},
              {img:"imagen", titel:"SEO", text:"Creación de campañas SEO basada en on page, off page y estrategia de contenidos."},
              {img:"imagen", titel:"SEO", text:"Creación de campañas SEO basada en on page, off page y estrategia de contenidos."}
            ].map((item, index) => (
              <div key={index} className="text-right">
                <img src={item.img} alt="hola" className="mx-auto"/>
                <h1 className="text-5xl font-bold">{item.titel}</h1>
                <p className="text-lg max-w-xs">
                  {item.text}
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
            {[{img:"imagen", titel:"Diseño Web", text:"Páginas web en Cancún. Somos expertos en creación de páginas web para ventas"},
              {img:"imagen", titel:"Diseño Web", text:"Páginas web en Cancún. Somos expertos en creación de páginas web para ventas"},
              {img:"imagen", titel:"Diseño Web", text:"Páginas web en Cancún. Somos expertos en creación de páginas web para ventas"}
            ].map((item, index) => (
              <div key={index}>
                <img src={item.img} alt="hola" className="mx-auto"/>
                <h1 className="text-5xl font-bold">{item.titel}</h1>
                <p className="text-lg max-w-xs">
                {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

      <div className="m-10 p-10">
        <h1 className="text-5xl font-semibold text-center text-black mb-6">Casos de Uso</h1>
      {/* Descripción */}
      <p className="text-lg text-justify text-gray-700 mb-8">
        En nuestra agencia digital en Cancún, trabajamos de cerca con cada cliente para crear estrategias de marketing personalizadas. Nos enfocamos en diseñar experiencias excepcionales que impulsen la visibilidad de su marca, maximicen su presencia en redes sociales y aumenten el tráfico web. Cada uno de nuestros proyectos está cuidadosamente seleccionado para garantizar los mejores resultados.
      </p>
      <div id="default-carousel" className="relative w-full" data-carousel="slide">
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          {/* Las imágenes del carrusel */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={cerezas} alt="Cerezas" className="absolute block w-[64rem] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"/>
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={flex} alt="Flex" className="absolute block w-[34rem] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"/>
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={marques} alt="Marques" className="absolute block w-[28rem] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"/>
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={twin} alt="Twin" className="absolute block w-[28rem] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"/>
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={vancouver} alt="Vancouver" className="absolute block w-[55rem] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"/>
          </div>
        </div>

        {/* Controles de navegación */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
          <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
          <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
          <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
          <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
        </div>

        {/* Botones para navegar entre las imágenes */}
        <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 dark:bg-gray-800/30 group-hover:bg-black/50 dark:group-hover:bg-gray-800/60 group-focus:rinag-4 group-focus:ring-black dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-black dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>

        <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 dark:bg-gray-800/30 group-hover:bg-black/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-black dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-black dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
        </div>
      </div>

      </main>

      <footer>
        <Finalfooter />
      </footer>
    </>
  );
}

export default app;
