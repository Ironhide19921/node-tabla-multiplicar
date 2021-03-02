const fs= require('fs');
const colors = require('colors');

 const crearArchivo = async( base = 5, listar = false, hasta = 10 ) => {
     
    try {
        let salida='';
        let consola='';
    
        for(let i=1; i<=hasta; i++){
            salida += `${ base } x ${ i } = ${ base * i }\n`;
            consola += `${ base } ${'x'.green} ${ i } ${'='.green} ${ base * i }\n`;
        }
        if ( listar ){
            console.clear();
            console.log('===================='.green);
            console.log(`   Tabla del:${ colors.red(base) }   `);
            console.log('===================='.green);               
            console.log(consola);
        }

        fs.writeFile(`./salida/tabla-${ base }.txt`,salida,(err) => {
            if (err) throw err;
            // console.log(`tabla-${ base }.txt creado`);
        });



        return `tabla-${ base }.txt`;

        
    } catch (error) {
        throw error;
    }                                                                                                    
   
    
        
};

module.exports = {
    crearArchivo
};