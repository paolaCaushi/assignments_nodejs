const { sum } = require('./app/calc');
const { concat } = require('./app/concat');
const { readFileAsync } = require('./app/index');


readFileAsync(".data.json").then(data=> {
    console.log(`The result of the sum is ${sum(data)}`);
    console.log(`The result of the concat is ${concat(data)}`);
});

