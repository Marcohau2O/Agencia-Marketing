import React from "react";

function Diseñoweb() {
  return (
    <>
      <section>
        <header>
          <div className="container mx-auto bg-blue-600 px-4 h-16 flex items-center justify-center">
            <div className="rounded-full">
              <h1 className="text-3xl font-bold uppercase text-center">
                Diseño Web
              </h1>
            </div>
          </div>
        </header>
      </section>

      <main>
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">
            Hacemos webs para vender
          </h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quae.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Tarjetas de la primera fila */}
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="card mb-3 border rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src="..."
                  className="card-img-top w-full h-48 object-cover"
                  alt="..."
                />
                <div className="card-body p-4">
                  <h5 className="card-title text-lg font-bold">
                    Card title {i}
                  </h5>
                  <p className="card-text text-gray-600">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text text-sm text-gray-500">
                    <small>Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            ))}

            {/* Tarjeta 4 (4) */}
            <div className="card border rounded-lg overflow-hidden shadow-lg">
              <div className="card-body p-4">
                <h5 className="card-title text-lg font-bold">Card title 4</h5>
                <p className="card-text text-gray-600">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text text-sm text-gray-500">
                  <small>Last updated 3 mins ago</small>
                </p>
              </div>
              <img
                src="..."
                className="card-img-bottom w-full h-48 object-cover"
                alt="..."
              />
            </div>

            {/* Tarjeta 5 (5) que ocupa 2 columnas */}
            <div className="col-span-2 card border rounded-lg overflow-hidden shadow-lg">
              <img
                src="..."
                className="card-img-top w-full h-48 object-cover"
                alt="..."
              />
              <div className="card-body p-4">
                <h5 className="card-title text-lg font-bold">Card title 5</h5>
                <p className="card-text text-gray-600">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text text-sm text-gray-500">
                  <small>Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
          <section>
            <div>
              <h2 className="text-xl font-semibold mb-4">
                Hacemos webs para vender
              </h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quae.
              </p>
              {/* la imagen grande*/}
              <div className="card border rounded-lg overflow-hidden shadow-lg">
                <img
                  src="..."
                  className="card-img-top w-full h-48 object-cover"
                  alt="..."
                />
                <div className="card-body p-4">
                  <h5 className="card-title text-lg font-bold">Card title 5</h5>
                  <p className="card-text text-gray-600">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text text-sm text-gray-500">
                    <small>Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div>
              <h2 className="text-xl font-semibold mb-4">
                Somos la mejor empresa
              </h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quae.
              </p>
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Accordion Item #1
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>This is the first item's accordion body.</strong>{" "}
                      It is shown by default, until the collapse plugin adds the
                      appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It's also worth noting that just about any HTML
                      can go within the <code>.accordion-body</code>, though the
                      transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Accordion Item #2
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>This is the second item's accordion body.</strong>{" "}
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It's also worth noting that just about any HTML
                      can go within the <code>.accordion-body</code>, though the
                      transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Accordion Item #3
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>This is the third item's accordion body.</strong>{" "}
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It's also worth noting that just about any HTML
                      can go within the <code>.accordion-body</code>, though the
                      transition does limit overflow.
                    </div>
                  </div>
                </div>
              </div>

              <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="card border rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="..."
                    className="card-img-top w-full h-48 object-cover"
                    alt="..."
                  />
                  <div className="card-body p-4">
                    <h5 className="card-title text-lg font-bold">
                      Card title 5
                    </h5>
                    <p className="card-text text-gray-600">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p className="card-text text-sm text-gray-500">
                      <small>Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>

                <div className="card border rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="..."
                    className="card-img-top w-full h-48 object-cover"
                    alt="..."
                  />
                  <div className="card-body p-4">
                    <h5 className="card-title text-lg font-bold">
                      Card title 6
                    </h5>
                    <p className="card-text text-gray-600">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p className="card-text text-sm text-gray-500">
                      <small>Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>

                {/* Puedes agregar más tarjetas aquí siguiendo el mismo formato */}
              </section>
            </div>
          </section>
        </section>
        <footer className="bg-gray-800 text-white py-6">
          <div className="container mx-auto flex justify-between items-center">
            {/* Imagen a la izquierda */}
            <div className="flex-shrink-0">
              <img src="ruta/a/tu-imagen.jpg" alt="Logo" className="h-16" />
            </div>

            {/* Grupo de imágenes a la derecha */}
            <div className="flex space-x-4">
              <img src="ruta/a/imagen1.jpg" alt="Imagen 1" className="h-10" />
              <img src="ruta/a/imagen2.jpg" alt="Imagen 2" className="h-10" />
              <img src="ruta/a/imagen3.jpg" alt="Imagen 3" className="h-10" />
            </div>
          </div>

          {/* Texto debajo */}
          <div className="mt-4 text-center text-sm">
            <p>© 2024 Tu Empresa. Todos los derechos reservados.</p>
          </div>
        </footer>
      </main>
    </>
  );
}

export default Diseñoweb;