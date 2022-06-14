const _ = require("lodash");
const fs = require('fs/promises');

async function readFileAsync() {
  try {
    const data = await fs.readFile('data.json', { encoding: 'utf8' });
    return JSON.parse(data);
  } catch (err) {
    return [];
    //console.log("Error!");
    //console.log(err);
  }
}


module.exports.readFileAsync = readFileAsync