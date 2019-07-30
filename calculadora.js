//1.VARIABLES
const numA = document.getElementById("numA");
const numB = document.getElementById("numB");
const boton_sumar = document.getElementById("boton-sumar");
const boton_restar = document.getElementById("boton-restar")
const boton_multiplicar = document.getElementById("boton-multiplicar")
const areaResultado = document.getElementById("resultado");

//2.FUNCIONES
const suma = (a,b) => {
    return (a + b);
}

const resta = (a,b) => {
    return (a - b);
}

const multiplicar = (a,b) => {
    return (a * b);
}

//3.EVENTOS
boton_sumar.addEventListener("click",  () => {
    // Necesito obtener los 2 numeros a sumar
 const primerNumero = parseInt(numA.value);
 const segundoNumero = parseInt(numB.value);

    // Necesito sumar esos 2 numeros
 const res = suma(primerNumero, segundoNumero)

    // Necesito expresarlos en pagina web
    areaResultado.innerHTML = res
})

boton_restar.addEventListener("click",  () => {
    // Necesito obtener los 2 numeros a restar
    const primerNumero = parseInt(numA.value);
    const segundoNumero = parseInt(numB.value);

    // Necesito restar esos 2 numeros
    const res = resta(primerNumero, segundoNumero)

    // Necesito expresarlos en pagina web
    areaResultado.innerHTML = res
})

boton_multiplicar.addEventListener("click", () => {
    // Necesito obtener los 2 numeros a restar
    const primerNumero = parseInt(numA.value);
    const segundoNumero = parseInt(numB.value);

    // Necesito restar esos 2 numeros
    const res = multiplicar(primerNumero, segundoNumero)

    // Necesito expresarlos en pagina web
    areaResultado.innerHTML = res
})