const http = require('http')

const server = http.createServer((req,res) =>{
    if(req.url==='/'){
        res.end('Welcome to our homepage')
    }
    else if(req.url==='/about'){
        res.end('Here is a short history')
    }
    else{
        res.end(`
        <h1>Oops!</h1>
        <p>we cant find the entered url page</p>
        <a href="/">Back home</a>`
    )}
    //res.write()
    //res.end()
})

server.listen(5000)