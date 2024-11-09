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
        <h1 className="text-3xl font-bold uppercase text-center text-white">Redes Sociales</h1>
      </header>

      {/* Sección "Cada sitio web es único" */}
      <section className="mb-12">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
    {/* Texto a la izquierda */}
    <div>
      <h2 className="text-2xl font-semibold mb-4">Nuestro objetivo</h2>
      <p className="text-gray-600 mb-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.
      </p>
    </div>

    {/* Card Grid a la derecha */}
    <div className="grid grid-cols-1 gap-4">
      {[1].map((i) => (
        <div key={i} className="card border rounded-lg overflow-hidden shadow-lg">
          <img src="..." className="card-img-top w-full h-48 object-cover" alt={`Card ${i}`} />
          <div className="card-body p-4">
            <h5 className="text-lg font-bold">Card title</h5>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Sección "Somos amantes del detalle" */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">¿Porque es importante una agencia de redes sociales?</h2>
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

    </main>

    {/* Footer */}
    <footer className="mt ">
      <Finalfooter />
    </footer>
  </>
  )
}

export default Redesociales