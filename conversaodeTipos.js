//conversão implicita
const number = 456;
const numberString = "456";

console.log(number === numberString) //false
console.log(number == numberString) //true
console.log(number + numberString) //concatenou

//um = para atribuir um valor a uma variavel, dois == para fazer uma comparação pelo valor e três === compara o tipo

//conversão explicita

//Number()
//String()

console.log(number + Number(numberString)) //912, somou

// tbm funiona aplica ndo direto na variavel: const numeroString = Number("456");

const numeroString = Number("456a")
console.log(number + numeroString) //NaN
