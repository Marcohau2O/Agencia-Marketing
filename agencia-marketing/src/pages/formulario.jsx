import React from 'react';

function Formulario() {
    return (
        <div className="p-6 bg-gray-100 max-w-5xl mx-auto rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Contacto</h2>
            <form action="" className="space-y-4">
                <div>
                    <label htmlFor="asunto" className="block text-sm font-medium text-gray-600">
                        Asunto
                    </label>
                    <input
                        type="text"
                        id="asunto"
                        name="asunto"
                        placeholder="Asunto"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>

                <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-600">
                        Nombre
                    </label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        placeholder="Nombre"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                        Correo Electrónico
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Correo Electrónico"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>

                <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium text-gray-600">
                        Mensaje
                    </label>
                    <textarea
                        id="mensaje"
                        name="mensaje"
                        placeholder="Escribe tu mensaje aquí"
                        rows="4"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    ></textarea>
                </div>

                <div>
                    <input
                        type="submit"
                        value="Enviar"
                        className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition duration-200"
                    />
                </div>
            </form>
        </div>
    );
}

export default Formulario;
