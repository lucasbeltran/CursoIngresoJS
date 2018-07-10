function mostrar()
{
    var selectEstadoCivil;
    var inputEdad;

    selectEstadoCivil = document.getElementById('estadoCivil');
    inputEdad = document.getElementById('edad');

    if (parseInt(inputEdad.value) < 18 && selectEstadoCivil.value != "Soltero")
    {
        alert('Es muy pequeño para NO ser soltero');
    }
}