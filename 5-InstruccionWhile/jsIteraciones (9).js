function mostrar()
{

	var contador=0;
	var nroIngresado;
	var nroMaximo = 0;
	var nroMinimo = 0;

	
	var respuesta='si';

	while(respuesta!='no')
	{
		contador++;


		nroIngresado = prompt("Ingrese un valor");
		nroIngresado = parseInt(nroIngresado);

		if (contador == 1)
		{
			nroMaximo= nroIngresado;
			nroMinimo = nroIngresado;
		}
		else
		{
			if (nroIngresado > nroMaximo)
			{
				nroMaximo = nroIngresado;
			}

			if (nroIngresado < nroMinimo)
			{
				nroMinimo = nroIngresado;
			}
		}

		respuesta = prompt("Ingrese 'no' para salir");
	}

	document.getElementById("minimo").value = nroMinimo;
	document.getElementById("maximo").value = nroMaximo;
	
	//Al presionar el botón pedir números hasta que el usuario quiera, mostrar el número máximo y el número mínimo.

}//FIN DE LA FUNCIÓN