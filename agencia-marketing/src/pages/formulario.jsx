import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Finalfooter from '../components/finalfooter';
import axios from 'axios';
import Swal from 'sweetalert2';

function Formulario() {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://localhost:7183/api/formulariocontacto/create', formData);
            if (response.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: '¡Enviado!',
                    text: 'Formulario enviado con éxito.'
                });
                setFormData({ nombre: '', email: '', telefono: '', mensaje: '' });
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Error al enviar el formulario. Por favor, intenta de nuevo.'
            });
            console.error('Error al enviar el formulario:', error);
        }
    };

    return (
        <>
        <Navbar/> 
            <h2 className="text-2xl font-semibold text-gray-700 mb-4 ml-[10rem] p-2">Hola, Te Esperamos Contactanos</h2>
            <h3 className='text-sm font-semibold p-1 m-2 ml-[10rem]'>Trabajemos juntos. Escríbenos y tan pronto analicemos tu proyecto te contactaremos de vuelta.</h3>
            <div className="p-6 bg-gray-100 max-w-5xl mx-auto rounded-lg shadow-md">
            <form onSubmit={handleSubmit} className="space-y-6 m-10">
                <div className='m-8'>
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-600">
                        Nombre
                    </label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        placeholder="Nombre"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>

                <div className='m-8'>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                        Email
                    </label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>

                <div className='m-8'>
                    <label htmlFor="telefono" className="block text-sm font-medium text-gray-600">
                        Telefono
                    </label>
                    <input
                        type="number"
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        placeholder="Telefono"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>

                <div className='m-8'>
                    <label htmlFor="mensaje" className="block text-sm font-medium text-gray-600">
                        Mensaje
                    </label>
                    <textarea
                        id="mensaje"
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        placeholder="Escribe tu mensaje aquí"
                        rows="4"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    ></textarea>
                </div>
                
                <div className='m-8 p-3'>
                    <input
                        type="submit"
                        value="Enviar"
                        className="w-full py-1.5 px-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition duration-200 flex justify-center items-center"
                    />
                </div>
            </form>
            </div>
        <Finalfooter/>
        </>
    );
}

export default Formulario;
