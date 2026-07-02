// const nodemailer = require("nodemailer");
// require('dotenv').config();
// // Esta función se encarga de enviar un correo electrónico por medio de nodemailer
// // recibe como parámetros el correo electrónico del usuario, el asunto y el texto del correo.
// const transporter = nodemailer.createTransport({
//  service: "gmail",
//  auth: {
//    user: `${process.env.MAIL}`,
//    pass: `${process.env.GPASS}`,
//  },
// });


// exports.sendEmail = async (email, subject, text) => {
//  const mailOptions = {
//     from: `${process.env.MAIL}`,
//     to: 'santyls1305@gmail.com',
//     subject: prueba,
//     text: hola,
//  };


//  await transporter.sendMail(mailOptions, (err, info) => {
//    if (err) {
//      console.error(err);
//    } else {
//      console.log("Correo enviado "+ info.response);
//    }
//  });
// };


const nodemailer = require("nodemailer");
require('dotenv').config();

// Configuración del transportador de Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL,  // No hace falta meterlos en `${}` si ya son strings
    pass: process.env.GPASS,
  },
});

// Función para enviar el correo electrónico
exports.sendEmail = async (email, subject, text) => {
  const mailOptions = {
    from: process.env.MAIL,
    to: email,       // Cambiado de un correo estático al parámetro 'email' para que sea dinámico
    subject: subject, // Cambiado 'prueba' por la variable del parámetro 'subject'
    text: text,       // Cambiado 'hola' por la variable del parámetro 'text'
  };

  // Enviamos el correo
  await transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error("Error al enviar correo: ", err);
    } else {
      console.log("Correo enviado con éxito: " + info.response);
    }
  });
};