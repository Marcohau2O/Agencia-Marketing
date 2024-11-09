import React from 'react'
import Navbar from '../components/Navbar';
import Finalfooter from '../components/finalfooter';

function ComoTrabajamos() {
    return (
        <>
        <Navbar/>
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[1, 2].map((i) => (
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
            </main>

            {/* Footer */}
            <footer className="mt-8">
                <Finalfooter />
            </footer>
        </>
    )
}

export default ComoTrabajamos