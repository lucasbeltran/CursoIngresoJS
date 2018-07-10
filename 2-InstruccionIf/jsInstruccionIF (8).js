function mostrar()
{
    var selectEstadoCivil;
    var inputEdad;
 
    selectEstadoCivil = document.getElementById('estadoCivil');
    inputEdad = document.getElementById('edad');

    if (selectEstadoCivil.value == "Soltero" && parseInt(inputEdad.value) >= 18)
    {
        alert("Es soltero y no es menor.");
    }
}
