function mostrar()
{
	var notaExamen = Math.floor((Math.random() * 10) + 1);

	if (notaExamen == 9 || notaExamen == 10)
	{
		alert("EXCELENTE");
	}
	else if (notaExamen >= 4)
	{
		alert("APROBO");
	}
	else if (notaExamen < 4)
	{
		alert('Vamos, la proxima se puede');
	}
}
	