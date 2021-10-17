const mongoose = require('mongoose');

const Schema = mongoose.Schema

const userSchema = new Schema({
    name: String,
    age: Number
})

// Para acceder a este schema hay que crear un modelo
const User = mongoose.model('User',userSchema)

module.exports = User;