const express = require ('express')
const router = require ('./routes/index')

const app = express()
const PORT = process.env.PORT || 8080

app.use(express.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://portajlsb.netlify.app')
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