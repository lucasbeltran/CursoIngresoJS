function mostrar()
{
    var inputEdad;
    var edad;

    inputEdad = document.getElementById('edad');
    edad = parseInt(inputEdad.value);

    if (edad >= 18)
    {
        alert('La persona es mayor de edad.');
    }
    else if (edad >= 13 && edad <= 17)
    {
        alert('La persona es un adolescente.');
    }
    else if (edad < 13)
    {
        alert('La persona es un niño.');
    }
}//FIN DE LA FUNCIÓN