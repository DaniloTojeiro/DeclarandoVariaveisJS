//boolean
const usuarioLogado = true;
const contaPaga = false;

//truthy ou falsy, não são booleanos, mas podem se comportar como se fossem

// 0= false
// 1 = true

console.log(0 == false) //true
console.log("" == false) //true
console.log(1 == true) //true

//null = vazio ou nada 
//undifined = valor indefinido

let minhaVar;
let varNull = null;

console.log(minhaVar) //undefined
console.log(varNull)  //null

let numero = 3;
let texto = "Alura";

//typeof pergunta o tipo de variavel que esta sendo guardada
console.log(typeof numero) //number
console.log(typeof texto)  //string

console.log(typeof minhaVar) //undefined
console.log(typeof varNull)  //object

