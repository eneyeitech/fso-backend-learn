const http = require('http')

const app = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' })
  response.end('<h2>Hello World</h2>')
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)