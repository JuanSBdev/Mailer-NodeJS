const express = require ('express')
const router = require ('./routes/index')

const app = express()
const PORT = 3001

app.use(express.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5173')
    res.header('Access-Control-Allow-Credentials', 'true')
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    )
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
    next()
  })


app.use( '/', router)

app.listen(PORT, ()=> {
    console.log('SERVER RAISED IN PORT ' + PORT)
})