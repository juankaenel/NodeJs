const guardarTestimonial = (req,res) =>{
    /* console.log(req.body); */

    // Validar
    const errores = [];
    const {nombre,correo,mensaje} = req.body;
    if(nombre.trim() === ''){
        errores.push({mensaje: 'El campo nombre está vacío'});
    }
    if(correo.trim() === ''){
        errores.push({mensaje: 'El campo correo está vacío'});
    }
    if(mensaje.trim() === ''){
        errores.push({mensaje: 'El campo mensaje está vacío'});
    }

    if(errores.length > 0){
        // Mostrar la vista con errores
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            //le paso el nombre, mensaje y correo como objetos para que si sucede un error no tenga que volver a reescribir todo
            nombre,
            mensaje, // en el text area coloco =mensaje para que tome este valor en el value
            correo 
        })
    }
    else{
        // Almacenar en la bd
    }
}
export {
    guardarTestimonial,
}