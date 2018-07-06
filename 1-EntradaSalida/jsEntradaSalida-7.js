/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/
function sumar() {
    var resultado;
    resultado = OperarDatosIngresados("Suma");
    alert(resultado);

}

function restar() {
    var resultado;
    resultado = OperarDatosIngresados("Resta");
    alert(resultado);
}

function multiplicar() {
    var resultado;
    resultado = OperarDatosIngresados("Multiplicacion");
    alert(resultado);
}

function dividir() {
    var resultado;
    resultado = OperarDatosIngresados("Division");
    alert(resultado);
}

function OperarDatosIngresados(tipoOperacion) {

    var resultado;
    var inputNumeroUno;
    var inputNumeroDos;

    inputNumeroUno = document.getElementById('numeroUno');
    inputNumeroDos = document.getElementById('numeroDos');

    switch (tipoOperacion) {
        case "Suma":
            resultado = parseInt(inputNumeroUno.value) + parseInt(inputNumeroDos.value);
            break;
        case "Resta":
            resultado = parseInt(inputNumeroUno.value) - parseInt(inputNumeroDos.value);
            break;
        case "Multiplicacion":
            resultado = parseInt(inputNumeroUno.value) * parseInt(inputNumeroDos.value);
            break;
        case "Division":
            resultado = parseInt(inputNumeroUno.value) / parseInt(inputNumeroDos.value);
            break;
    }

    return resultado;
}