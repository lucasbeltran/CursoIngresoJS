function mostrar()
{
    var mesDelAño = document.getElementById('mes').value;
    
    switch(mesDelAño)
    {
        case "Febrero":
            alert("El mes seleccionado tiene 28 dias");
            break;
        case "Abril":
        case "Junio":
        case "Septiembre":
        case "Noviembre":
            alert("El mes seleccionado tiene 30 dias");
            break;
        case "Enero":
        case "Marzo":
        case "Mayo":
        case "Julio":
        case "Agosto":
        case "Octubre":
        case "Diciembre":
            alert("El mes seleccionado tiene 31 dias");
            break;
    }
}