import React from 'react'
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Finalfooter from '../components/finalfooter';
import Insta from "../img/insta.jpg";
import Instagram from "../img/instagram.jpg";

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
      Nuestro objetivo como agencia de marketing es maximizar 
      la relevancia de tu marca y posicionarla estratégicamente en el mercado 
      digital. Ya sea que busques aumentar seguidores, generar más leads o incrementar 
      tus ventas, trabajamos en función de tus metas específicas. Nos enfocamos en 
      construir comunidades sólidas y auténticas alrededor de tu negocio, creando 
      contenido que inspire interacciones significativas. Nuestro equipo de 
      Community Managers y expertos en Marketing Digital implementa estrategias 
      integrales que combinan creatividad, análisis y tácticas de ventas para conectar 
      a tu audiencia con tu marca de manera efectiva y sostenible.
      </p>
    </div>

    {/* Card Grid a la derecha */}
    <div className="grid grid-cols-1 gap-4">
      {[1].map((i) => (
        <div key={i} className="card border rounded-lg overflow-hidden shadow-lg p-5">
          <div className='flex flex-col-2'>
          <img src={Insta} className="card-img-top h-72 object-cover mx-auto"/>
          <img src={Instagram} className="card-img-top h-72 object-cover mx-auto" alt={`Card ${i}`} />
          </div>
          <div className="card-body p-4">
            <h5 className="text-lg font-bold">Mejoramos tus redes sociales</h5>
            <p className="text-gray-600">
              Asesoramos y creamos contenido atractivo, aumentando tu alcance, 
              fortaleciendo la conexión con tu audiencia y generando interacciones 
              que se transformen en resultados reales para tu negocio.
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
        En la era digital, las redes sociales son clave para el crecimiento de cualquier negocio, 
        pero gestionarlas efectivamente requiere más que publicaciones esporádicas. Una agencia especializada 
        te ayuda a conectar con tu público ideal, creando contenido atractivo, campañas efectivas y analizando
         resultados para maximizar tu impacto. Al confiar en expertos, puedes enfocarte en tu negocio mientras 
         ellos aseguran que tu presencia digital destaque frente a la competencia, convirtiendo seguidores en 
         clientes leales. ¡Haz que tu marca sea memorable con estrategias profesionales en redes sociales!
        </p>

        {/* Accordion */}
        <div className="mt-6">
          {[{title:"Estrategias Personalizadas", text:"Una agencia de redes sociales analiza tu negocio, tu mercado y tu audiencia para desarrollar estrategias diseñadas específicamente para tus objetivos, maximizando resultados."}, 
          {title:"Gestión Eficiente", text:"Te libera del tiempo y esfuerzo necesarios para gestionar contenido, campañas y análisis, permitiéndote centrarte en otras áreas clave de tu negocio."}, 
          {title:"Mayor Alcance y Conversión", text:"Con expertos que optimizan tus publicaciones y campañas, tu marca puede llegar a un público más amplio y convertir seguidores en clientes leales de manera más efectiva."}].map((item, index) => (
            <div key={index} className="border-b border-blue-300">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left px-4 py-2 font-semibold text-blue-600 focus:outline-none"
              >
                - {item.title}
              </button>
              {openItems[index] && (
                <div className="p-4 bg-blue-50 border-t border-blue-300 text-gray-700">
                  <p>
                    {item.text}
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