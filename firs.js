// ! creating a server ========================================================================
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

// ! event loop : async =========================================================================

//* ******** a good example by John Smilga for async fs and a stat for event loop ***********

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



//* ********* another example for async this time by server ****************



//* const http = require('http')
//  every time u refresh the page in the terminal you'll see 'request event' 
//  and in the webpage 'Hello World' one time
//* const server = http.createServer((req, res) => {
//  this line is just a response to the request we sent
//*   console.log('request event')
//*   res.end('Hello World')
//* })

//  you'll see 'Server listening on port : 5000....' as the first line in 
// terminal and you will see that the process of request event will still be alive because listen is async
//* server.listen(5000, () => {
//*   console.log('Server listening on port : 5000....')
//* })




//* ********* another example for async this time by read and write file ****************



const { readFile, writeFile} = require('fs').promises

const starter = async () => {
  try {
    const first = await readFile('./content/first.txt', 'utf8') //=> pathes are examples
    const second = await readFile('./content/second.txt', 'utf8') //=> pathes are examples
    await writeFile(
      './content/result-mind-grenade.txt', //=> pathes are examples
      `THIS IS AWESOME : ${first} ${second}`,
      { flag: 'a' }
    )
    console.log(first, second)
  } catch (error) {
    console.log(error)
  }
}

starter()




// ! events in node ==================================================================================




// ****************examples by John Smilga*******************************

// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance
const EventEmitter = require('events')
//  its a class
const customEmitter = new EventEmitter()

// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it


//  the order is important (first "on" then "emit", the first "data received ..." then "some other logic...")
customEmitter.on('response', (name, id) => {
  console.log(`data recieved user ${name} with id:${id}`)
})

customEmitter.on('response', () => {
  console.log('some other logic here')
})

customEmitter.emit('response', 'john', 34)

// ******************** request events *************************************


//* const http = require('http')

// const server = http.createServer((req, res) => {
//   res.end('Welcome')
// })

// Using Event Emitter API
//* const server = http.createServer()
// emits request event
// subscribe to it / listen for it / respond to it
//* server.on('request', (req, res) => {
//*   res.end('Welcome')
//* })

//* server.listen(5000)

// !  streams ========================================================================================



// ****************examples by John Smilga*******************************


const { createReadStream } = require('fs')

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })
const stream = createReadStream('./content/big.txt')

stream.on('data', (result) => {
  console.log(result)
})
stream.on('error', (err) => console.log(err))
