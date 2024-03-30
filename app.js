
const readline = require('readline');
const fs = require('fs');

const http = require('http');

//STEP1: Create a server
const html = fs.readFileSync('./Template/index.html', 'utf-8')
const server = http.createServer((request, response) => {
    let path = request.url;
    if (path === '/' || path.toLocaleLowerCase() === '/home'){
        response.end(html);
    }
    else if (path.toLocaleLowerCase() === '/about'){
        response.end('You are in about page');
    }
    else if (path.toLocaleLowerCase() === '/contact'){
        response.end('You are in contact page');
    }
    else{
        response.end('Error 404: Page not found!');
    }

});

//STEP2: Start the server
server.listen(process.env.PORT || 8000, '0.0.0.0', ()=>{
    console.log('Process port', process.env.PORT)
    console.log('Server has started');
})




/* Lecture 5: Reading and writing to a File asynchronously*******

fs.readFile('./Files/start.txt', 'utf-8', (error1, data1)=> {
    console.log(data1)
    fs.readFile('./Files/${Data1}.txt', 'utf-8', (error2, data2) => {
        console.log(data2);
})
console.log('Reading File...')
*/



/* Lecture 5: Reading and writing to a File*******
let textIn = fs.readFileSync('./Files/input.txt', 'utf-8');
console.log(textIn)

let content = 'Date created: ${new Date()}' //Not working
fs.writeFileSync('./Files/output.txt', content)
*/

/* Lecture 4: CODE EXAMPLE *****************
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Please enter your name:", (name)=> {
    console.log("You entered: " +name);
    rl.close();
})
rl.on('close', () => {
    console.log("Interface closed");
    process.exit(0);
})
*/

