// ! creating a server =======================================================
console.log(" I AM ME! WHO ARE YOU?")
const http = require('http');
//  first of all requirements

// now creating server (first req:request then res:response)
const server = http.createServer((req, res)=>{
  // url is one of the "req" objects properties
  if(req.url === '/'){
    res.end(" this is our home page darling ^_^ ")
     // our massage with "res" : res.end

  }
  if(req.url === '/about'){
    res.end(" are you lost babe? ¬_¬ ")
  }
  res.end(`
    <h1> Oops !!</h1>
    <p> seems you are lost ^_~ </p>
    <a href = '/'> back home </a>
    `)
})
server.listen(5000)
 //  runs the programme in localhost:5000

// ! event loop : async ======================================================

//  a good example by John Smilga for async fs and a stat for event loop 

// ? do you remember that setTimeout and setInterval were async?

// todo : Tell me which line will be shown in the console first and which one last?

const { readFile, writeFile } = require('fs')

console.log('started a first task')

// readFile is async so it will be executed differently from other codes (it gets offloaded)
readFile('./myTxt.txt', 'utf8', (err, res) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(res)
  console.log('completed first task')
})
console.log('starting next task')



