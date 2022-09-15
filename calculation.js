const prompt = require('prompt-sync')();

function calculation(peso,altura) {
    const calculation =  peso / Math.pow(altura, 2)
    return calculation
}

module.exports = calculation