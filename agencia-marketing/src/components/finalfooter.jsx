import React from 'react'
import facebook from '../img/facebook.png'
import instagram from '../img/instagram.png'
import linkedin from '../img/linkedin.png'
import logo from '../img/Logo_transparent.png'

export default function Finalfooter() {
    return (
        <div className="border-blue-600 bg-blue-700 dark:bg-blue-900 dark:border-blue-800">
            <div className="container mx-auto px-4 flex justify-between items-center">

                {/* Columna izquierda con el logo */}
                <div className="flex items-center space-x-4 text-white">
                    <img src={logo} alt="Logo" className="h-20" /> {/* Aumento del tamaño del logo */}
                    <span className="text-lg font-bold">DigitalGrow</span>
                </div>

                {/* Columna central con la información */}
                <div className="text-center md:text-left space-y-4 text-white mt-6">
                    <p className="text-sm">Agencia de marketing digital en Cancún & CDMX.</p>
                    <p className="text-sm">© 2022 DigitalGrow. Todos los derechos reservados.</p>
                    <p className="text-sm">Contáctanos.</p>
                    <p className="text-sm">Solicitudes generales: <a href="emilianoesparza2408@gmail.com" >emilianoesparza2408@gmail.com</a></p>
                    <p className="text-sm">Facturación: <a href="emilianoesparza2408@gmail.com" >emilianoesparza2408@gmail.com</a></p>
                </div>

                {/* Columna derecha con las redes sociales */}
                <div className="flex space-x-6 "> {/* Aumento del espacio entre iconos */}
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src={facebook} alt="Facebook" className="h-12 " /> {/* Aumento del tamaño de los iconos */}
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src={instagram} alt="Instagram" className="h-12" /> {/* Aumento del tamaño de los iconos */}
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} alt="LinkedIn" className="h-12" /> {/* Aumento del tamaño de los iconos */}
                    </a>
                </div>
            </div>
        </div>
    )
}

