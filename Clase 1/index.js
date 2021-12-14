var numero = "hola soy un numero"

// console.log(numero)

//TIPOS DE DATOS

//PRIMITIVOS

//number

var a = 10
var b = 3

// console.log(typeof(b))

var suma = a + b
// console.log(suma)

var resta = a - b
// console.log(resta)

var multiplicacion = a * b
// console.log(multiplicacion)

var division = a / b
// console.log(division.toFixed(3))

//boolean

var booleano = true
var booleanoFalso = false

// console.log(booleano)

//string
var comillaSimple = 'hola'
var comillaDoble = "hola pero doble"

console.log(comillaDoble)
console.log(comillaSimple)

var jerarquia = 'hola mi nombre es "santiago"'
console.log(jerarquia)

//ASCII alt+96
var invertida = `hola`
var jerarquia2 = `hola "santiago 'sencillas' "`
console.log(jerarquia2)

var otroNumero = 25
console.log(`tengo un numero que es ${otroNumero}`)
console.log('tengo un numero'+ otroNumero + 'mucho texto')

//OPERACIONES

console.log('5' * 2)

//comparaciones

console.log(5 < 2)
console.log(5 != 2)
console.log('5' == 5)
console.log('5' === 5)

//No primitivos

var frutas = ['manzana', 'pera', 'mora', 5, true, "otra copsa"]
console.log(frutas)

var objeto = {
    llave: 'vasa',
    llave2: 2131,
    arreglo: ['sada','asda'],
    objeto: {
        otracosa: 'sadas'
    }
}


console.log(objeto)