/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombre;
	var inputNombre = document.getElementById("elNombre");
	nombre = prompt("Ingrese su nombre: ");
	inputNombre.value = nombre;

}

