require('./app/calc');
require('./app/concat');
require('./app/index');


readFileAsync(".data.json").then(data=> {
    console.log(`The result of the sum is ${sum(data)}`);
    console.log(`The result of the concat is ${concat(data)}`);
});
