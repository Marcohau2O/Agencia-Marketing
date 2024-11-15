import React from "react";
import Navbar from "../components/Navbar";
import Finalfooter from "../components/finalfooter";
import google from "../img/google.png";
import directorio from "../img/directorio.png";
import avanti from "../img/avanti.png";

function Quienesomos() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4">
        {/* Header */}
        <header className="bg-blue-600 h-16 flex items-center justify-center my-4 rounded-3xl">
          <h1 className="text-3xl font-bold uppercase text-center text-white">Contáctanos</h1>
        </header>

        {/* Header principal expandido */}
        <header className="bg-blue-600 p-32 flex flex-col items-center justify-center my-4 rounded-3xl">
          <h1 className="text-3xl font-bold uppercase text-center text-white">Somos soñadores.</h1>
          <p className="text-white text-lg mt-4 text-center">
            Nos apasiona generar transformaciones y fomentar el crecimiento de negocios mediante la creación de experiencias inolvidables para las personas.
          </p>
        </header>

        {/* Sección descriptiva */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Nos definimos como algo más que una simple agencia creativa.
          </h2>
          <p className="text-gray-600 mb-6">
            Somos una agencia de marketing digital con más de 5 años de experiencia dedicándonos a lo que más nos apasiona: crear historias. Colaboramos con clientes en países como Estados Unidos, México, Cuba, España y Argentina.
            <br />
            Actualmente, las personas se conectan con las empresas a través de lo que comunican. En Neo, transformamos negocios al desarrollar estrategias de comunicación y marketing que combinan creatividad innovadora con tecnología avanzada, respaldadas por datos y una estrategia organizacional orientada a la excelencia. Este enfoque centrado en el usuario nos ha posicionado como una de las agencias más reconocidas en Cancún.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Primera card con imagen de Google */}
            <div className="card border rounded-lg overflow-hidden shadow-lg">
              <div className="h-32 flex items-center justify-center bg-gray-100">
                <img src={google} className="h-full w-auto object-contain" alt="Google logo" />
              </div>
              <div className="p-4 text-center">
                <h5 className="text-sm font-bold">Nuestra alianza con Google</h5>
                <p className="text-xs text-gray-600">
                  Trabajamos estrechamente con plataformas líderes como Google para ofrecer estrategias innovadoras.
                </p>
              </div>
            </div>

            {/* Segunda card con imagen de Directorio */}
            <div className="card border rounded-lg overflow-hidden shadow-lg">
              <div className="h-32 flex items-center justify-center bg-gray-100">
                <img src={directorio} className="h-full w-auto object-contain" alt="Directorio logo" />
              </div>
              <div className="p-4 text-center">
                <h5 className="text-sm font-bold">Soluciones Directorio</h5>
                <p className="text-xs text-gray-600">
                  Ofrecemos herramientas avanzadas para posicionar tu negocio y hacerlo más accesible en el mercado digital.
                </p>
              </div>
            </div>

            {/* Tercera card con imagen de Avanti */}
            <div className="card border rounded-lg overflow-hidden shadow-lg">
              <div className="h-32 flex items-center justify-center bg-gray-100">
                <img src={avanti} className="h-full w-auto object-contain" alt="Avanti logo" />
              </div>
              <div className="p-4 text-center">
                <h5 className="text-sm font-bold">Proyectos Avanti</h5>
                <p className="text-xs text-gray-600">
                  Creamos soluciones que impulsan el desarrollo continuo y sostenible de las empresas.
                </p>
              </div>
            </div>
          </div>

          {/* Frase debajo de las cards */}
          <div className="mt-12 text-center">
            <p className="text-xl font-semibold mb-4">
              ¿Listo para hacer crecer tu marca? <br />
              Cada proyecto tiene un propósito, es nuestro trabajo HACERLO REALIDAD juntos.
            </p>
            {/* Botón azul */}
            <button className="bg-blue-600 text-white py-2 px-6 rounded-full font-semibold hover:bg-blue-700">
              Tómate un café con nosotros ☕
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

export default Quienesomos;