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

    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateFormData = () => {
        // Validación del nombre (no puede estar vacío ni tener caracteres especiales)
        const nameRegex = /^[a-zA-Z\s]+$/;
        if (!formData.nombre || !nameRegex.test(formData.nombre)) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El nombre es obligatorio y no puede contener caracteres especiales.'
            });
            return false;
        }
    
        // Validación del email (debe tener formato de email válido)
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!formData.email || !emailRegex.test(formData.email)) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor ingresa un email válido.'
            });
            return false;
        }
    
        // Validación del teléfono (solo números)
        const phoneRegex = /^[0-9]{10}$/; // Suponiendo que el teléfono debe tener 10 dígitos
        if (!formData.telefono || !phoneRegex.test(formData.telefono)) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El teléfono es obligatorio y debe contener 10 dígitos.'
            });
            return false;
        }
    
        // Validación del mensaje (no debe estar vacío y permitir puntos, comas, dos puntos y punto y coma)
        const messageRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9\s.,;:?!()'"/-]*$/;
        if (!formData.mensaje || !messageRegex.test(formData.mensaje)) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El mensaje no puede estar vacío y solo se permiten ciertos caracteres especiales.'
            });
            return false;
        }
    
        return true;
    };
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        if(!validateFormData()) {
            setIsLoading(false);
            return;
        }
        try {
            // Enviar los datos al primer endpoint (backend)
            const response = await axios.post('https://localhost:7183/api/formulariocontacto/create', formData);

            if (response.status === 200) {
                // Si la respuesta es exitosa, enviamos el correo
                const emailResponse = await fetch('http://localhost:5000/api/send-email', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });

                if (emailResponse.ok) {
                    Swal.fire({
                        icon: 'success',
                        title: '¡Enviado!',
                        text: 'Formulario enviado y correo enviado con éxito.'
                    });
                    // Limpiar el formulario después de enviar
                    setFormData({ nombre: '', email: '', telefono: '', mensaje: '' });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'Hubo un error al enviar el correo.'
                    });
                }
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Error al guardar el formulario.'
                });
            }
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Error al procesar el formulario. Por favor, intenta de nuevo.'
            });
        } finally {
            setIsLoading(false)
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
                    {isLoading ? (
                        <div className="flex justify-center items-center">
                            <div className="animate-spin border-4 border-t-4 border-indigo-600 border-solid rounded-full w-8 h-8"></div>
                        </div>
                    ) : (
                    <input
                        type="submit"
                        value="Enviar"
                        className="w-full py-1.5 px-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition duration-200 flex justify-center items-center"
                    />
                    )}
                </div>
            </form>
            </div>
        <Finalfooter/>
        </>
    );
}

export default Formulario;
