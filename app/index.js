const calc = require('./calc')
const concat = require('./concat')

const numbersToAdd=[
    1, 2, 3, 4, 5
]

const numbersToContact=[
    1, 2, 3, 4, 5
]

const result = calc.sum(numbersToAdd)
const result2= concat.concat(numbersToContact)
console.log(`The result of the sum is ${result}`)

console.log(`The result of the sum is ${result2}`)