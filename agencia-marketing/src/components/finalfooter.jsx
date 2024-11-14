import React from 'react'
import facebook from '../img/facebook.png'
import instagram from '../img/instagram.png'
import linkedin from '../img/linkedin.png'
import logo from '../img/Logo_transparent.png'

function Finalfooter() {
    return (
        <div className="bg-blue-900 text-white py-6">
            <div className="container mx-auto flex justify-between items-center">
                {/* Imagen a la izquierda */}
                <div className="flex-shrink-0">
                    <img src={logo} alt="Logo" className="h-16" />
                    <span className="text-md font-bold">DigitalGrow</span>
                </div>

                {/* Grupo de imágenes a la derecha */}
                <div className="flex space-x-4">
                    <img src={facebook} alt="Imagen 1" className="h-10" />
                    <img src={instagram} alt="Imagen 2" className="h-10" />
                    <img src={linkedin} alt="Imagen 3" className="h-10" />
                </div>
            </div>

            {/* Texto debajo */}
            <div className="mt-4 text-center text-sm">
                <p>© 2024 Tu Empresa. Todos los derechos reservados.</p>
            </div>
        </div>
    )
}

export default Finalfooter