const argv = require('yargs')
    .options({
        'b':{
            alias:'base',
            demandOption:true,
            type:'number',
            describe:'Es la base de la tabla de multiplicar'
            },
        'l':{
            alias:'listar',            
            type:'boolean',
            default:false,
            describe:'Muestra la tabla en consola'
            },
        'h':{
            alias:'hasta',
            type:'number',
            default:10,
            describe:'Limite de la multiplicacion',
            demandOption:false
        }
    })
    .check((argv,option) =>{
        if(isNaN(argv.b)){
            throw 'La base debe ser un número'
        }
            return true
    })           
    .argv

module.exports = argv