import React from "react";
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
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4">
        {/* Header */}
        <header className="bg-blue-600 h-16 flex items-center justify-center my-4 rounded-3xl">
          <h1 className="text-3xl font-bold uppercase text-center text-white">
            Contáctanos
          </h1>
        </header>

        {/* Sección "Cada sitio web es único" */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Conoce nuestro trabajo.</h2>
          <p className="text-gray-600 mb-6">
            Descubre los casos de éxito que respaldan el impacto y la efectividad
            de nuestra agencia de marketing digital.
          </p>

          {/* Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Card 1 */}
            <div className="card border rounded-lg overflow-hidden shadow-lg">
              <div className="h-32 flex items-center justify-center bg-gray-100">
                <img
                  src={bucaneros}
                  className="h-full w-auto object-contain"
                  alt="Bucaneros"
                />
              </div>
              <div className="p-4 text-center">
                <h5 className="text-sm font-bold">Bucaneros</h5>
                <p className="text-xs text-gray-600">
                  Estrategias digitales que incrementaron su visibilidad y ventas.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card border rounded-lg overflow-hidden shadow-lg">
              <div className="h-32 flex items-center justify-center bg-gray-100">
                <img
                  src={ocean}
                  className="h-full w-auto object-contain"
                  alt="Ocean"
                />
              </div>
              <div className="p-4 text-center">
                <h5 className="text-sm font-bold">Ocean</h5>
                <p className="text-xs text-gray-600">
                  Optimización de presencia digital con un enfoque en el sector
                  turístico.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="card border rounded-lg overflow-hidden shadow-lg">
              <div className="h-32 flex items-center justify-center bg-gray-100">
                <img
                  src={cafe}
                  className="h-full w-auto object-contain"
                  alt="Café"
                />
              </div>
              <div className="p-4 text-center">
                <h5 className="text-sm font-bold">Café</h5>
                <p className="text-xs text-gray-600">
                  Creatividad digital para mejorar la marca de este negocio local.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="card border rounded-lg overflow-hidden shadow-lg">
              <div className="h-32 flex items-center justify-center bg-gray-100">
                <img
                  src={lorenzillos}
                  className="h-full w-auto object-contain"
                  alt="Lorenzillos"
                />
              </div>
              <div className="p-4 text-center">
                <h5 className="text-sm font-bold">Lorenzillos</h5>
                <p className="text-xs text-gray-600">
                  Estrategias de marketing digital para restaurantes que resultan en
                  aumento de clientes.
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="card border rounded-lg overflow-hidden shadow-lg">
              <div className="h-32 flex items-center justify-center bg-gray-100">
                <img
                  src={cerezas}
                  className="h-full w-auto object-contain"
                  alt="Cerezas"
                />
              </div>
              <div className="p-4 text-center">
                <h5 className="text-sm font-bold">Cerezas</h5>
                <p className="text-xs text-gray-600">
                  Innovamos en su presencia en línea y optimizamos su alcance.
                </p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="card border rounded-lg overflow-hidden shadow-lg">
              <div className="h-32 flex items-center justify-center bg-gray-100">
                <img
                  src={flex}
                  className="h-full w-auto object-contain"
                  alt="Flex"
                />
              </div>
              <div className="p-4 text-center">
                <h5 className="text-sm font-bold">Flex</h5>
                <p className="text-xs text-gray-600">
                  Branding y marketing digital para fortalecer su marca.
                </p>
              </div>
            </div>

            {/* Card 7 */}
            <div className="card border rounded-lg overflow-hidden shadow-lg">
              <div className="h-32 flex items-center justify-center bg-gray-100">
                <img
                  src={marques}
                  className="h-full w-auto object-contain"
                  alt="Marques"
                />
              </div>
              <div className="p-4 text-center">
                <h5 className="text-sm font-bold">Marques</h5>
                <p className="text-xs text-gray-600">
                  Creación de contenido para aumentar la visibilidad de la marca.
                </p>
              </div>
            </div>

            {/* Card 8 */}
            <div className="card border rounded-lg overflow-hidden shadow-lg">
              <div className="h-32 flex items-center justify-center bg-gray-100">
                <img
                  src={twin}
                  className="h-full w-auto object-contain"
                  alt="Twin"
                />
              </div>
              <div className="p-4 text-center">
                <h5 className="text-sm font-bold">Twin</h5>
                <p className="text-xs text-gray-600">
                  Mejoramos la identidad digital para una experiencia única.
                </p>
              </div>
            </div>

            {/* Card 9 */}
            <div className="card border rounded-lg overflow-hidden shadow-lg">
              <div className="h-32 flex items-center justify-center bg-gray-100">
                <img
                  src={vancouver}
                  className="h-full w-auto object-contain"
                  alt="Vancouver"
                />
              </div>
              <div className="p-4 text-center">
                <h5 className="text-sm font-bold">Vancouver</h5>
                <p className="text-xs text-gray-600">
                  Estrategias de marketing digital para posicionar su marca en el
                  mercado.
                </p>
              </div>
            </div>
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