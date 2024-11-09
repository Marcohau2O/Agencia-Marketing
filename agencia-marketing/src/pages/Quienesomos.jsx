import React from 'react'
import Navbar from '../components/Navbar';
import Finalfooter from '../components/finalfooter';

function Quienesomos() {

    return (
        <>
            <Navbar />
            <main className="container mx-auto px-4">
                {/* Header */}
                <header className="bg-blue-600 h-16 flex items-center justify-center my-4 rounded-3xl">
                    <h1 className="text-3xl font-bold uppercase text-center text-white">Nosotros</h1>
                    <div className="text-2xl font-semibold ">
                        <p className="text-gray-600 mb-6">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.
                        </p>
                    </div>
                </header>
                {/* Form Section 
        <section className="mb-12">
        <Formulario />
        </section>*/}

                {/* cada sitio es unico */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4  ">Cada sitio es unico</h2>
                    <p className="text-gray-600 mb-6 ">
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

export default Quienesomos