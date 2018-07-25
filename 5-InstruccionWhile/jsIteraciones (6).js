function mostrar()
{
	var contador=0;
	var acumulador=0;
	var nuevoValorAux = 0;

	while(contador < 5)
	{
		contador++;
		nuevoValorAux = prompt("Ingrese un valor");
		nuevoValorAux = parseInt(nuevoValorAux);
		acumulador += nuevoValorAux;
	}

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN