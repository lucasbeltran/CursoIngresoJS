function mostrar()
{
    var selectEstadoCivil;
    var inputEdad;
    var edad;
    var estadoCivil;

    selectEstadoCivil = document.getElementById('estadoCivil');
    estadoCivil = selectEstadoCivil.value;

    inputEdad = document.getElementById('edad');
    edad = parseInt(inputEdad.value);

    if (edad < 18 && estadoCivil != "Soltero")
    {
        alert('Es muy pequeño para NO ser soltero');
    }

}//FIN DE LA FUNCIÓN