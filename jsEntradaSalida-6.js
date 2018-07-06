/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar() {
    var inputNumeroUno;
    var inputNumeroDos;
    var sumaTotal;

    inputNumeroUno = document.getElementById('numeroUno');
    inputNumeroDos = document.getElementById('numeroDos');

    sumaTotal = parseInt(inputNumeroUno.value) + parseInt(inputNumeroDos.value);

    alert('La suma de los datos ingresados es: ' + sumaTotal);


}

