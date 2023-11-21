const express = require('express')
const router = express.Router()
const modeloUsuario = require('../modelos/modeloUsuario.js')

router.post('/registroU',
        async(req,res)=>{
            const {nombre,apellido,numeroDocumento,celular,correo,contraseña,rol} = req.body;
            try {
                const user = 
                await modeloUsuario.create({
                    nombre,
                    apellido,
                    numeroDocumento,
                    celular,
                    correo,
                    contraseña,
                    rol
                })
            res
            .status(201)
            .json({
                sucess:true,
                msg:"Usuario creado exitosamente"
            })
            }catch (error) {
                res
                .status(400)
                .json({
                    sucess:false,
                    message:error.message
                })
            }

})
module.exports=router