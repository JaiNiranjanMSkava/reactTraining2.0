const express = require('express')

const app = express()

app.use() => {
  
}


app.get('/eh', (req, res) => {
  res.status(200).json({body:'test'})
})

app.get('*', (req, res) => {
  console.log("[server] hit *", req.eh)
  res.status(200).json({body:'every thing else'})
})

const onListen = () => {
  console.log('http://localhost:5888')
}
app.listen(4444, onListen)