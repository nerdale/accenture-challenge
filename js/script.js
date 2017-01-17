//guardar imagen

$('.fa-camera').on('click', function(e) {
     e.preventDefault();
    
    $('#foto').click();
})

$('#foto').on('change', function(evento){
    // primero recuperamos el archivo subido
    var archivo = $(this)[0].files[0];


    var reader = new FileReader();

    // le decimos al filereader qué hacer cuando termine de cargar
    reader.onload = function(efr) {
        $('#avatar img').attr('src', efr.target.result);
    }

    reader.readAsDataURL(archivo);
});

$('form').on('submit', function(es){

    es.preventDefault();


    var archivo = $('#foto')[0].files[0];


    var reader = new FileReader();

  
    reader.onloadend = function(efr) {
        var datos_imagen = reader.result;
     
        localStorage.setItem('avatar_data', datos_imagen);
        Materialize.toast('<span>Imagen guardada con éxito !</span>', 2000);
    }

    // finalmente leemos la imagen
    reader.readAsDataURL(archivo);
});

// queda que al carga la página. recuperar imagen del localStorage
$(document).ready(function(){
    // aca va el codigo que se ejecuta al cargar la página
    
    // primero recuperamos datos del localStorage
    var avatar_data = localStorage.getItem('avatar_data');

    // cambiamos la foto por defecto
    if(avatar_data) {
        $('#avatar img').attr('src', avatar_data);
    }
});