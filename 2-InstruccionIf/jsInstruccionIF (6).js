function mostrar()
{
    var inputEdad;
    inputEdad = document.getElementById('edad');

    if (parseInt(inputEdad.value) >= 18)
    {
        alert('La persona es mayor de edad.');
    }
    else if (parseInt(inputEdad.value) >= 13 && parseInt(inputEdad.value) <= 17)
    {
        alert('La persona es un adolescente.');
    }
    else if (parseInt(inputEdad.value) < 13)
    {
        alert('La persona es un niño.');
    }
}