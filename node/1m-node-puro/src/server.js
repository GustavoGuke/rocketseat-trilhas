import http from "node:http";


const server = http.createServer((req, res) => {
    return res.end("hello word - teste")
})

server.listen(3333)