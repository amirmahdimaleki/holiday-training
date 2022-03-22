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
