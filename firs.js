const http = require('http');

const server = http.createServer((req, res)=>{
  if(req.url === '/'){
    res.end(" this is our home page darling ^_^ ")

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
