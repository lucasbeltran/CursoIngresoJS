/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

    var inputSueldo;
    var inputResultado;
    
    inputSueldo = document.getElementById('sueldo');
    inputResultado = document.getElementById('resultado');

    inputResultado.value = calcularPorcentaje(parseInt(inputSueldo.value), 10)

	
}

function calcularPorcentaje(sueldo, porcentaje)
{
    return (sueldo*porcentaje)/100;    
}
