import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Finalfooter from "../components/finalfooter";
import bucaneros from "../img/bucaneros.png";
import ocean from "../img/ocean.png";
import cafe from "../img/cafe.png";
import lorenzillos from "../img/lorenzillos.png";
import cerezas from "../img/cerezas.png";
import flex from "../img/flex.png";
import marques from "../img/marques.png";
import twin from "../img/twin.png";
import vancouver from "../img/vancouver.png";

function ComoTrabajamos() {
  const slides = [
    { src: bucaneros, title: "Bucaneros", description: "Incrementamos su visibilidad y ventas con estrategias únicas." },
    { src: ocean, title: "Ocean", description: "Optimización para destacar en el sector turístico." },
    { src: cafe, title: "Café", description: "Creatividad que impulsa marcas locales." },
    { src: lorenzillos, title: "Lorenzillos", description: "Marketing digital para restaurantes con resultados sobresalientes." },
    { src: cerezas, title: "Cerezas", description: "Innovamos su presencia en línea y optimizamos su alcance." },
    { src: flex, title: "Flex", description: "Fortalecimos su marca con branding y estrategias digitales." },
    { src: marques, title: "Marques", description: "Contenido creativo para mejorar su visibilidad en el mercado." },
    { src: twin, title: "Twin", description: "Reforzamos su identidad digital para una experiencia única." },
    { src: vancouver, title: "Vancouver", description: "Posicionamos su marca en el mercado con estrategias efectivas." },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    setCurrentIndex(isFirstSlide ? slides.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    setCurrentIndex(isLastSlide ? 0 : currentIndex + 1);
  };

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4">
        {/* Header */}
        <header className="bg-blue-600 h-16 flex items-center justify-center my-4 rounded-3xl">
          <h1 className="text-3xl font-bold uppercase text-center text-white">
            Conócenos
          </h1>
        </header>

        {/* Carousel */}
        <section className="mb-16">
          <div className="relative mx-auto max-w-screen-xl overflow-hidden rounded-xl shadow-lg">
            <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-transform duration-700 ${index === currentIndex ? "translate-x-0" : "translate-x-full"
                    }`}
                  style={{ transform: `translateX(${(index - currentIndex) * 100}%)` }}
                >
                  <img
                    src={slide.src}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white px-6 py-3 rounded-lg">
                    <h5 className="text-lg font-bold">{slide.title}</h5>
                    <p className="text-sm">{slide.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-900 bg-opacity-70 text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-opacity-90 focus:outline-none"
            >
              &#8592; {/* Color de las flechas */}
            </button>
            <button
              onClick={goToNext}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-900 bg-opacity-70 text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-opacity-90 focus:outline-none"
            >
              &#8594; {/* Color de las flechas */}
            </button>
          </div>
        </section>


      </main>
      {/* Footer */}
      <footer className="mt-8">
        <Finalfooter />
      </footer>
    </>
  );
}

export default ComoTrabajamos;
