const fs = require('fs')
const http = require('http')

const PORT = 5000
const hostname = 'localhost'

const home = fs.readFileSync('./index.html', 'utf-8')

const server = http.createServer((req, res) => {
    return res.end(home)
})

server.listen(PORT, hostname, () => {
    console.log(`Server is running on http://${hostname}:${PORT}/)`);
})
