import React from 'react'

function Finalfooter() {
    return (
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
    )
}

export default Finalfooter