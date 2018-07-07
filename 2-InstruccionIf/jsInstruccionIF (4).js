function mostrar()
{
    var inputEdad;
    var edad;

    inputEdad = document.getElementById('edad');
    edad = parseInt(inputEdad.value);

    if (edad >= 13 && edad <= 17)
    {
        alert('La edad ingresada corresponde a un adolescente');
    }

}