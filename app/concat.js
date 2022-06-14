const fs = require('fs')

const _ = require('lodash')

const numsJson = fs.readFileSync('data.json')
const numsObject = JSON.parse(numsJson)

const nums = numsObject.numbers

function concat(arr) {
    return _.concat(arr, nums)
}

module.exports.concat = concat