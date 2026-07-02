require('dotenv').config();
const mongoose = require('mongoose');

const URI = 'mongodb+srv://SantiagoLS:bZ7Ch8t85jWqCxxD@santiagols.xejbz4f.mongodb.net/prueba107';
// const URI = 'mongodb+srv://SantiagoLS:i9gWFXxcHd92eXn@santiagols.xejbz4f.mongodb.net/prueba107';
mongoose.connect(URI)


module.exports= mongoose;
