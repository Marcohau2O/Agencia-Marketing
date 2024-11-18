import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Finalfooter from "../components/finalfooter";
import IReact from "../img/React.png"
import IJava from "../img/Java.png"
import Ilaravel from "../img/Laravel.png"
import INet from "../img/net.png"
import hand from "../img/handshake.png"
import pait from "../img/paintbrush.png"
import arrow from "../img/right-arrow.png"
import user from "../img/user.png"
import img1 from "../img/1.png"
import img2 from "../img/2.png"
import img3 from "../img/3.png"
import img4 from "../img/4.png"
import img5 from "../img/5.png"
//import Formulario from "./formulario";

function Diseñoweb() {
  const [openItems, setOpenItems] = useState({});

  const toggleAccordion = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 flex-grow">
        {/* Header */}
        <header className="bg-blue-600 h-16 flex items-center justify-center my-4 rounded-3xl">
          <h1 className="text-3xl font-bold uppercase text-center text-white">Diseño Web</h1>
        </header>

        {/* Sección "Cada sitio web es único" */}
        <section className="mb-12 mt-10">
          <h2 className="text-2xl font-semibold mb-4">
            Cada sitio web tiene su propia identidad.
          </h2>
          <p className="text-gray-600 mb-6">
            Desarrollamos sitios web con un enfoque moderno y creativo, diseñados para capturar y reflejar la esencia de tu marca de manera clara y atractiva, priorizando la funcionalidad y la facilidad de uso. Cada proyecto se aborda de manera personalizada, comenzando con una recolección detallada de requisitos para comprender tus objetivos y necesidades.
          </p>

          {/* Categoría de tarjetas en cuadrícula */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Tarjeta 1 */}
            <div className="card border rounded-lg overflow-hidden shadow-lg">
              <img
                src={img1}
                className="h-48 w-full object-cover"
                alt="Identidad 1"
              />
              <div className="p-4">
                <h5 className="text-lg font-bold">Diseño Personalizado</h5>
                <p className="text-gray-600">
                  Diseñamos páginas que reflejan la esencia única de tu marca.
                </p>
              </div>
            </div>

            {/* Tarjeta 2 */}
            <div className="card border rounded-lg overflow-hidden shadow-lg">
              <img
                src={img2}
                className="h-48 w-full object-cover"
                alt="Identidad 2"
              />
              <div className="p-4">
                <h5 className="text-lg font-bold">Funcionalidad</h5>
                <p className="text-gray-600">
                  Prioridad en la experiencia del usuario y objetivos de negocio.
                </p>
              </div>
            </div>

            {/* Tarjeta 3 */}
            <div className="card border rounded-lg overflow-hidden shadow-lg">
              <img
                src={img3}
                className="h-48 w-full object-cover"
                alt="Identidad 3"
              />
              <div className="p-4">
                <h5 className="text-lg font-bold">Optimización</h5>
                <p className="text-gray-600">
                  Soluciones modernas para un rendimiento excepcional.
                </p>
              </div>
            </div>

            {/* Tarjeta 4 */}
            <div className="card border rounded-lg overflow-hidden shadow-lg">
              <img
                src={img4}
                className="h-48 w-full object-cover"
                alt="Identidad 4"
              />
              <div className="p-4">
                <h5 className="text-lg font-bold">Soporte Continuo</h5>
                <p className="text-gray-600">
                  Acompañamos a tu marca en cada paso del proceso.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* Sección "Hacemos webs para vender" */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Nos Dedicamos a realizar web</h2>
          <p className="text-gray-600 mb-6">
            Creamos sitios web diseñados para impulsar tus ventas. Nuestras plataformas están optimizadas para convertir visitantes en clientes, ofreciendo una navegación intuitiva, procesos de compra sencillos y métodos de pago seguros.
            Nos enfocamos en un diseño atractivo que refleje la identidad de tu marca y asegure una experiencia de usuario fluida, adaptada a cualquier dispositivo.
          </p>

          {/* Additional Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[{ img: IReact, title: "React", texto: "React: Biblioteca para crear sitios web interactivos y rápidos, ideal para interfaces modernas y fluidas." },
            { img: IJava, title: "Javascript", texto: "JavaScript: Lenguaje que da vida a las páginas web, permitiendo que respondan y se comporten de forma dinámica." },
            { img: Ilaravel, title: "Laravel", texto: "Laravel: Plataforma de PHP para construir sitios web robustos, fácil de usar y con muchas herramientas listas para negocios." },
            { img: INet, title: ".NET", texto: ".NET: Plataforma de Microsoft para desarrollar aplicaciones web y de escritorio seguras y escalables para empresas." }].map((item, i) => (
              <div key={i} className="card border rounded-lg overflow-hidden shadow-lg">
                <img src={item.img} className="card-img-top w-40 h-40 object-cover mx-auto" alt={`Card ${i}`} />
                <div className="p-4">
                  <h5 className="text-lg font-bold">{item.title}</h5>
                  <p className="text-gray-600">
                    {item.texto}
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
          <h2 className="text-2xl font-semibold mb-4">Nos apasiona cuidar cada detallee</h2>
          <p className="text-gray-600 mb-6">
            Reconocemos que el diseño web es fundamental para crear una presencia online impactante. Por eso, dedicamos esfuerzo a desarrollar sitios que no solo luzcan atractivos,
            sino que también sean optimizados para motores de búsqueda (SEO) y ofrezcan una navegación intuitiva y agradable al usuario. Nuestro enfoque combina estética y funcionalidad,
            garantizando que los visitantes tengan una experiencia positiva mientras los buscadores encuentran y valoran el contenido del sitio de manera eficiente.
          </p>

          {/* Accordion */}
          <div className="mt-6">
            {[{ pre: "¿Por qué es importante tener un diseño web moderno y atractivo para mi sitio?", res: " Un diseño web moderno y atractivo genera una primera impresión positiva y transmite profesionalismo, lo que ayuda a retener a los visitantes y construir confianza." },
            { pre: "¿Cómo afecta el diseño web a la experiencia de los usuarios y a la cantidad de visitantes que recibe un sitio?", res: "Un diseño bien estructurado facilita la navegación, hace que el contenido sea fácil de leer y encontrar, y mejora la interacción del usuario." },
            { pre: "¿Qué significa que un diseño web sea responsive y por qué es importante? ", res: "Un diseño responsive es aquel que se adapta automáticamente a diferentes tamaños de pantalla y dispositivos, como teléfonos móviles y tabletas." }
            ].map((item, index) => (
              <div key={index} className="border-b border-blue-300">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left px-4 py-2 font-semibold text-blue-600 focus:outline-none"
                >
                  {item.pre}
                </button>
                {openItems[index] && (
                  <div className="p-4 bg-blue-50 border-t border-blue-300 text-gray-700">
                    <p>
                      {item.res}
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
          <h2 className="text-2xl font-semibold mb-4 text-center ">Compromiso con la Excelencia en Diseño Web</h2>
          <p className="text-gray-600 mb-6 text-center">
            Nuestra empresa se dedica a transformar las ideas de nuestros clientes en sitios web que no solo son visualmente atractivos, sino también funcionales y efectivos. Nos enfocamos en cuatro pilares clave:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[{ img: arrow, text: "Optimización para conversiones (CRO)" },
            { img: user, text: "Enfoque en la experiencia del usuario (UX)" },
            { img: pait, text: "Fortalecer la imagen de marca" },
            { img: hand, text: "Diseño web centrado en el cliente" }].map((item, index) => (
              <div key={index} className="card border rounded-lg overflow-hidden shadow-lg">
                <img src={item.img} className="card-img-top w-32 h-32 m-5 object-cover mx-auto" alt="" />
                <p className="text-xl font-semibolda text-center m-3">{item.text}</p>
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
  );
}

export default Diseñoweb;
