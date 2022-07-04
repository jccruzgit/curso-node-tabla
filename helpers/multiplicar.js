
const fs = require('fs')
require('colors')

const crearArchivo = async(base = 5 , listar, hasta)=>{
    console.clear()

    try {
        if(listar){
        console.log('|||||||||||||||||||||||||'.green)
        console.log(`   TABLA DEL ${base}     `.blue)
        console.log('|||||||||||||||||||||||||'.green)
    }
        let salida = ''
        let consola = ''

        for(let i=1; i<= hasta ;i++){
            consola += `${base} ${'X'.green} ${ i } ${'='.green} ${base*i} \n` 
            salida  += `${base} x ${ i } = ${base*i} \n`
        }
        if(listar){
        console.log(consola)
        }
        
        fs.writeFileSync(`./output/tabla-${base}.txt`, salida )
        return(`tabla-${base}.txt`)
    } catch (error) {
        throw error
    }
       
}

module.exports = {
    crearArchivo: crearArchivo
}