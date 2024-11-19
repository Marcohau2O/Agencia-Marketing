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
                user: 'Haupech2@gmail.com', // Tu correo
                pass: 'clju csvx ugfd psdq' // Tu contraseña de aplicación
            }
        });

        // Configurar el contenido del correo
        const mailOptions = {
            from: 'Haupech2@gmail.com',
            to: 'chango.MY@gmail.com', // Cambia por el correo donde quieres recibir los datos
            subject: `Nuevo mensaje de ${nombre}`,
            html: `
                <h2>Nuevo mensaje desde el formulario</h2>
                <p><strong>Nombre:</strong> ${nombre}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Teléfono:</strong> ${telefono}</p>
                <p><strong>Mensaje:</strong></p>
                <p>${mensaje}</p>
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
