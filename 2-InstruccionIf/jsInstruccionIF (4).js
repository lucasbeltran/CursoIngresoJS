function mostrar()
{
    var inputEdad;
    inputEdad = document.getElementById('edad');

    if (parseInt(inputEdad.value) >= 13 && parseInt(inputEdad.value) <= 17)
    {
        alert('La edad ingresada corresponde a un adolescente');
    }

}