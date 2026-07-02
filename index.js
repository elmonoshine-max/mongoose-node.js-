const PORT = process.env.PORT || 3000;

require('./config/connectiondb');
const express = require('express');
const clienteController = require('./controllers/cliente.controller');
const servicioController = require('./controllers/servicio.controller');
const enrutamiento = require('./routes/enrutamiento.router');
const servicioEmail = require('./services/email.service')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');

app.use('/api/v1', enrutamiento);

app.get('/', clienteController.listar);






// app.get('/enviar', servicioEmail.sendEmail('correo.academico.laboral@gmail.com', 'prueba', 'hola'))
// app.get('/enviar', async (req, res) => {
//     try {
//         await servicioEmail.sendEmail(
//             'sebisena.30@gmail.com',
//             'prueba',
//             'oeeeeeeeeeeeeee'
//         );

//         res.send('Correo enviado');
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Error al enviar correo');
//     }
// });
app.post('/enviar', async (req, res) => {
    try {

        const { correo, asunto, mensaje } = req.body;

        await servicioEmail.sendEmail(
            correo,
            asunto,
            mensaje
        );

        res.send('Correo enviado correctamente');

    } catch (error) {
        console.error(error);
        res.status(500).send('Error al enviar correo');
    }
});

app.get('/correo', (req, res) => {
    res.render('pages/correo');
});








app.get('/servicios', servicioController.listar);
app.get('/servicios/:id', servicioController.consultarId);
app.post('/servicios', servicioController.registrar);
app.put('/servicios/:id', servicioController.actualizar);
app.delete('/servicios/:id', servicioController.eliminar);

app.listen(PORT, () => {
    console.log(`corriendo en puerto ${PORT}`);
});