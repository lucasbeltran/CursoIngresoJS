/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var inputImporte;
    var inputResultado;
    var porcentajeARestar;

    inputImporte = document.getElementById('importe');
    inputResultado = document.getElementById('resultado');

    porcentajeARestar = calcularPorcentaje(parseInt(inputImporte.value), 25);

    inputResultado.value = parseInt(inputImporte.value) - porcentajeARestar;
}

function calcularPorcentaje(importe, porcentaje)
{
    return (importe*porcentaje)/100;    
}