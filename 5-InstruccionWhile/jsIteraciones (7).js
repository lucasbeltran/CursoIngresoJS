function mostrar()
{

	var contador=0;
	var acumulador=0;
	var nuevoValorAux = 0;
	var respuesta='si';

	while(respuesta == 'si')
	{
		nuevoValorAux = prompt("Ingrese un valor");
		nuevoValorAux = parseInt(nuevoValorAux);
		acumulador += nuevoValorAux;
		contador++;
		respuesta = prompt("¿Quiere seguir ingresando valores?");
	}

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN