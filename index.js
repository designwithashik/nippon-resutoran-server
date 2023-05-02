const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000
const chefs = require('./data/chefs.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send('Welcome to Nippon Resutoran Server')
})
  
app.get('/chefs', (req, res) => {
  res.send(chefs)
})

//single chef data

app.get('/chefs/:id', (req, res) => {
  const id = req.params.id
  const selectedChef = chefs.find(chef =>chef.id === parseInt(id));
  res.send(selectedChef);
})
  
  app.listen(port, () => {
    console.log(`Nippon listening on port ${port}`)
  })