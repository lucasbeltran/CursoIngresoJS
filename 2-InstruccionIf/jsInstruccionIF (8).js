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

    if (estadoCivil == "Soltero" && edad >= 18)
    {
        alert("Es soltero y no es menor.");
    }
}
