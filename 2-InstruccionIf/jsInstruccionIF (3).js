function mostrar()
{
    var inputEdad;
    inputEdad = document.getElementById('edad');
    
    if (parseInt(inputEdad.value) >= 18)
    {
        alert('La persona es mayor de edad');
    }
    else
    {
        alert('La persona no es mayor de edad');
    }

}