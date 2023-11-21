const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')
const jwt =require('jsonwebtoken')

const userSchema = new mongoose.Schema(
    {
        nombre:{
            type:String,
        },
        apellido:{
            type:String,
        },
        numeroDocumento:{
            type:String,
        },
        celular:{
            type:Number,
        },
        correo:{
            type:String,
        },
        contraseña:{
            type:String,
        },
        rol:{
            type:String,
        }
    }
)

userSchema.method.ObtenerTokenJWT = function(){
    const JWT_SECRET_KEY = "HOLAA"
    return jwt.sign({
        id:this._id,
        correo: this.correo,
        contraseña: this.contraseña
    },
        JWT_SECRET_KEY,
        {
            expiresIn: Date.now() +10000
        }
    )
}

userSchema.method.comparacionContrasena = async function(contraseña){
    return await bcryptjs.compare(contraseña, this.contraseña)
}
const User = module.exports = mongoose.model('User',userSchema)
