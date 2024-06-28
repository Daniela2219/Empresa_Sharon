const mongoose = require ('mongoose')
const url_bd = 'mongodb://localhost:27017/empresa_Sharon'

//Conexion con db
mongoose.connect(url_bd)

//Comprobacion
.then(() => {
    console.log("todo muy bien")
})
.catch((err)=>{
    console.log("No tiene funcion")
}) 

//Esquemas db
const empresa_Sharon = new mongoose.Schema({
    nombre:{
        type:String
    },
    apellidos:{
        type:String
    },
    edad:{
        type:String
    },
    correo:{
        type:String
    },
    telefono:{
        type:String
    },
    inicio_empresa:{
        type:String
    },
    puesto:{
        type:String
    }

})

//modelo db
const empleados_modelo = new mongoose.model('empleados', empresa_Sharon)

//Crear tabla
empleados_modelo.create({
    nombre:"Daniela",
    apellidos:"Davila",
    edad:"23",
    correo:"davila_23@gmail.com",
    telefono:"449-899-1411",
    inicio_empresa:"2019",
    puesto:"Gerente de ventas"
})