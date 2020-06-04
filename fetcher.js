//command line node app which take a URL as a command-line argument and download the resource to the specified path.
  
const request = require('request');
const fs = require('fs');
const myArg = process.argv.slice(2);
request(myArg[0], (error, response, body) => {
  // if (myArg[1] === error) {
// console.log("File path not found!")
// }

// if (myArg[0] === error) {
//   process.exit()
// }
// else

fs.writeFile(myArg[1], body, (error) => {
  console.log(`Downloaded and saved ${body.length} bytes to ${myArg[1]}`)
});
})