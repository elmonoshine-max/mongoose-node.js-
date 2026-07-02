const modeloCliente = require('../models/cliente.model');
const usuarioModel = require('../models/usuario.model');

exports.home = (req, res) => {
    res.render('pages/index', {
        palabra: "¡Bienvenido a Top Mascotas!",
        mascotas: [
            { tagline: "El perro más fiel", born: "2021" },
            { tagline: "Un gato muy independiente", born: "2023" }
        ]
    });
};

exports.formulario = (req, res) => {
    res.render('pages/registrarcliente');
};

exports.listar = async (req, res) => {
    try {

        const clientes = await usuarioModel.find();

        res.render('pages/index3', {
            clientes
        });

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

exports.consultarId = async (req, res) => {
    try {

        const cliente = await usuarioModel.findOne({
            email: req.params.correo
        });

        res.json(cliente);

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

exports.registrar = async (req, res) => {
    try {

        await modeloCliente.create({
            nombre: req.body.nombre,
            email: req.body.email,
            telefono: req.body.telefono
        });

        res.redirect('/');

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

exports.actualizar = async (req, res) => {

    try {

        await usuarioModel.findOneAndUpdate(
            { email: req.params.correo },
            {
                nombre: req.body.nombre,
                telefono: req.body.telefono
            }
        );

        res.redirect('/');

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

};

exports.eliminar = async (req, res) => {

    try {

        await usuarioModel.findOneAndDelete({
            email: req.params.correo
        });

        res.redirect('/');

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

};