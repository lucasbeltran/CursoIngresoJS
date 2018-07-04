/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var inputNombre = document.getElementById("elNombre");
	var inputEdad = document.getElementById("laEdad");

	alert("Usted se llama " + inputNombre.value + " y tiene " + inputEdad.value + " años")
}

