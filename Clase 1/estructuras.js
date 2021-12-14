//ESTRUCTURAS DE CONTROL
var a = 0
var b = 7

if(a < b){
    console.log('ola')
}else if(a > b){

}else{

}

if(a){
    console.log(a)
}

//Falsy
""
0
NaN
false
undefined
null

//Truthy
1
"hola"
{a: 1}
[1,3]
true

switch(a){
    case 1:
        console.log(a)
        break
    case '2':
        break
    default:
        break

}

function miFuncion(parametro){
    console.log(parametro)
    return 6
}

console.log(miFuncion(5))