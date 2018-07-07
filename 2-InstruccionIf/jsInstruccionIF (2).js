function mostrar()
{
var edad;
var inputEdad;

inputEdad = document.getElementById('edad');
edad = parseInt(inputEdad.value);

 if (edad >= 18)
{
    alert('La persona es mayor de edad');
}

}//FIN DE LA FUNCIÓN