function mostrar()
{

	var numeroPedido = 0;
	numeroPedido = prompt("Ingrese un numero");
	numeroPedido = parseInt(numeroPedido);

	while(numeroPedido < 0 || numeroPedido > 9)
	{
		numeroPedido = prompt("Ingrese un numero");
		numeroPedido = parseInt(numeroPedido);
	}
}//FIN DE LA FUNCIÓN