// Aplicacion que resuelve salario segun valor hora, jornada, dias trabajados, e impuestos

// Funciones
const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const multiplica = (a, b) => a * b;
// const impuestos = x => x * 0.22;
function impuestos(impEntero) {
    let impDecimal = impEntero / 100;
    return impDecimal;
}

function descuento(x, impDecimal) {
    return (x * impDecimal);
}

function calcularSalario() {
    // Variables Input
    let valorHora = document.getElementById("valor-hora").value;
    let horasTrabajadas = document.getElementById("horas-trabajadas").value;
    let diasQuincena = document.getElementById("dias-quincena").value;
    let impEntero = document.getElementById("imp-entero").value;
    let bonoEntero = document.getElementById("bono").value;
    //
    if(!isNaN(valorHora) && !isNaN(horasTrabajadas) && !isNaN(diasQuincena) && !isNaN(impEntero)){
        let impDecimal = impuestos(impEntero)
        let resultadoInicial = multiplica(multiplica(valorHora, horasTrabajadas), diasQuincena);
        let descuentos = descuento(resultadoInicial, impDecimal);
        let resultadoMid = resta(resultadoInicial, descuentos);
        let bonoF = ((resultadoMid * bonoEntero) / 100)
        let resultadoFinal = suma(resultadoMid, bonoF);
        document.getElementById("resultado").innerHTML = `El resultado final con ${impEntero}% de impuestos es $${resultadoFinal} pesos`;
    }else{
        alert("Los datos ingresados son incorrectos o estan incompletos.");
    }
}