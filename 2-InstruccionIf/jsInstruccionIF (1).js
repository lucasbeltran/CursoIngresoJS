function mostrar()
{
//tomo la edad  
    var edad;
    var inputEdad;

    inputEdad = document.getElementById('edad');

    edad = parseInt(inputEdad.value);

    if (edad == 15)
    {
        alert('Niña bonita');
    }

}//FIN DE LA FUNCIÓN