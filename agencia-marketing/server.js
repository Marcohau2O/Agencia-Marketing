const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.post('/api/send-email', async (req, res) => {
    const { nombre, email, telefono, mensaje } = req.body;

    try {
        // Configurar transporte de Nodemailer
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, // true para 465, false para otros puertos
            auth: {
                user: 'digritalgrow@gmail.com', // Tu correo
                pass: 'sbld qteb rhnn ymxx' // Tu contraseña de aplicación
            }
        });

        // Configurar el contenido del correo
        const mailOptions = {
            from: 'digritalgrow@gmail.com',
            to: email, // Cambia por el correo donde quieres recibir los datos
            subject: `Nuevo mensaje de ${nombre}`,
            html: `
                <!DOCTYPE html>
                        <html>
                        <head>
                            <style>
                                body {
                                    font-family: Arial, sans-serif;
                                    background-color: #f4f4f9;
                                    margin: 0;
                                    padding: 0;
                                }
                                .container {
                                    max-width: 600px;
                                    margin: 20px auto;
                                    background: #ffffff;
                                    border-radius: 10px;
                                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                                    overflow: hidden;
                                }
                                .header {
                                    background-color: #1E4BEB;
                                    color: white;
                                    padding: 20px;
                                    text-align: center;
                                }
                                .header img {
                                    max-width: 100px;
                                    margin-bottom: 10px;
                                }
                                .content {
                                    padding: 20px;
                                    color: #333333;
                                }
                                .content p {
                                    margin: 10px 0;
                                }
                                .content strong {
                                    color: #4CAF50;
                                }
                                .footer {
                                    background-color: #f1f1f1;
                                    padding: 10px;
                                    text-align: center;
                                    font-size: 12px;
                                    color: #666666;
                                }
                            </style>
                        </head>
                        <body>
                            <div class="container">
                                <div class="header">
                                    <img src="src\img\Logo.jpg" alt="Logo">
                                    <h2>Nuevo mensaje desde de la solicitud de contacto</h2>
                                </div>
                                <div class="content">
                                    <p><strong>Nombre:</strong> ${nombre}</p>
                                    <p><strong>Email:</strong> ${email}</p>
                                    <p><strong>Teléfono:</strong> ${telefono}</p>
                                    <p><strong>Mensaje:</strong></p>
                                    <p>${mensaje}</p>
                                </div>
                                <div class="footer">
                                    Este mensaje fue enviado desde tu solicitud de contacto.
                                </div>
                            </div>
                        </body>
                        </html>
            `
        };

        // Enviar correo
        await transporter.sendMail(mailOptions);
        res.status(200).send({ message: 'Correo enviado exitosamente' });
    } catch (error) {
        console.error('Error al enviar correo:', error);
        res.status(500).send({ message: 'Error al enviar correo', error });
    }
});

// Iniciar servidor
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
