const prompt = require('prompt-sync')();
const calculation = require('./calculation')

peso = parseInt(prompt('Type your Weight: '));
altura = parseInt(prompt('Type your height: '));

const result = calculation(peso,altura)

console.log('Yout imc is: '+ result)