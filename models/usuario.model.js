const mongoose = require('../config/connectiondb');


const usuarioSchema = new mongoose.Schema({


   //campos email, password y rol
   //email debe ser unico y obligatorio
   //password minimo de 7 y maximo 10
   //rol debe estar entre [cliente, empleado, administrador] 


   email: {
       type: String,
       required: [true,'El correo es obligatorio'],
       unique: [true, 'El correo debe ser unico']
   },


   password: {
       type: String,
       trim: true,
       minLength: [7, 'ingresaste una contraseña muy corta'],
       maxLength: [10, 'La contraseña no puede tener mas de 10 caracteres']


   },
   rol: {
       type: String,
       default: 'invitado',
       enum: ['cliente', 'empleado', 'administrador'] ,
      


   }
},{versionKey:false});


module.exports = mongoose.model('usuario', usuarioSchema);
