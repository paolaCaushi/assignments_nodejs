const fs = require('fs')

const numsJson = fs.readFileSync('data.json')
const numsObject = JSON.parse(numsJson)

const nums = numsObject.numbers

const sumFromJson = nums.reduce((num, val) => num + val, 0)


function sum(arr) {

    return arr.reduce(function(a, b) {
        return a + b
    }, sumFromJson)
}

module.exports.sum = sum

module.exports.sum= sum;