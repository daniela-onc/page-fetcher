//command line node app which take a URL as a command-line argument and download the resource to the specified path.
  
const request = require('request');
const fs = require('fs');
const myArg = process.argv.slice(2);
request(myArg[0], (error, response, body) => {

fs.writeFile(myArg[1], body, (error) => {
  console.log(`Downloaded and saved ${body.length} bytes to ${myArg[1]}`)
});
})