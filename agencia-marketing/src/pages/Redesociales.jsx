import React from 'react'
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Finalfooter from '../components/finalfooter';

function Redesociales() {
  const [openItems, setOpenItems] = useState({});

  const toggleAccordion = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  return (<>
    <Navbar />
    <main className="container mx-auto px-4">
      {/* Header */}
      <header className="bg-blue-600 h-16 flex items-center justify-center my-4 rounded-3xl">
        <h1 className="text-3xl font-bold uppercase text-center text-white">Diseño Web</h1>
      </header>

      {/* Sección "Cada sitio web es único" */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Cada sitio web es único</h2>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.
        </p>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="card border rounded-lg overflow-hidden shadow-lg">
              <img src="..." className="card-img-top w-full h-48 object-cover" alt={`Card ${i}`} />
              <div className="p-4">
                <h5 className="text-lg font-bold">Card title {i}</h5>
                <p className="text-gray-600">
                  This is a wider card with supporting text below as a natural lead-in to additional content.
                </p>
                <p className="text-sm text-gray-500">
                  <small>Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          ))}

          {/* Card 4 */}
          <div className="card border rounded-lg overflow-hidden shadow-lg">
            <img src="..." className="card-img-top w-full h-48 object-cover" alt="Card 4" />
            <div className="p-4">
              <h5 className="text-lg font-bold">Card title 4</h5>
              <p className="text-gray-600">
                This is a wider card with supporting text below as a natural lead-in to additional content.
              </p>
              <p className="text-sm text-gray-500">
                <small>Last updated 3 mins ago</small>
              </p>
            </div>
          </div>

          {/* Card 5 occupying 2 columns */}
          <div className="col-span-2 card border rounded-lg overflow-hidden shadow-lg">
            <img src="..." className="card-img-top w-full h-48 object-cover" alt="Card 5" />
            <div className="p-4">
              <h5 className="text-lg font-bold">Card title 5</h5>
              <p className="text-gray-600">
                This is a wider card with supporting text below as a natural lead-in to additional content.
              </p>
              <p className="text-sm text-gray-500">
                <small>Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección "Hacemos webs para vender" */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Hacemos webs para vender</h2>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.
        </p>

        {/* Additional Cards */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          {[7].map((i) => (
            <div key={i} className="card border rounded-lg overflow-hidden shadow-lg">
              <img src="..." className="card-img-top w-full h-48 object-cover" alt={`Card ${i}`} />
              <div className="p-4">
                <h5 className="text-lg font-bold">Card title {i}</h5>
                <p className="text-gray-600">
                  This is a wider card with supporting text below as a natural lead-in to additional content.
                </p>
                <p className="text-sm text-gray-500">
                  <small>Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sección "Somos amantes del detalle" */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Somos amantes del detalle</h2>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.
        </p>

        {/* Accordion */}
        <div className="mt-6">
          {[1, 2, 3].map((item, index) => (
            <div key={index} className="border-b border-blue-300">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left px-4 py-2 font-semibold text-blue-600 focus:outline-none"
              >
                Accordion Item #{item}
              </button>
              {openItems[index] && (
                <div className="p-4 bg-blue-50 border-t border-blue-300 text-gray-700">
                  <p>
                    Contenido del acordeón para el ítem {item}. Puedes añadir más texto, imágenes o cualquier contenido
                    aquí según lo necesites.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Form Section 
        <section className="mb-12">
          <Formulario />
        </section>*/}

      {/* cada sitio es unico */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-center ">Cada sitio es unico</h2>
        <p className="text-gray-600 mb-6 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[1, 2].map((i) => (
            <div key={i} className="card border rounded-lg overflow-hidden shadow-lg">
              <img src=".." className="card-img-top w-full h-48 object-cover" alt="" />
            </div>
          ))}
        </div>
      </section>
    </main>

    {/* Footer */}
    <footer className="mt-8">
      <Finalfooter />
    </footer>
  </>
  )
}

export default Redesociales