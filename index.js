const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const chefs = require('./data/chefs.json')

app.get('/', (req, res) => {
    res.send('Ohayo!')
})
  
app.get('/chefs', (req, res) => {
  res.send(chefs)
})

//single chef data

app.get('/chefs/:id', (req, res) => {
  const id = req.params.id
  const selectedChef = chefs.find(chef =>chef.id === parseInt(id));
  console.log(selectedChef);
  res.send(selectedChef);
})
  
  app.listen(port, () => {
    console.log(`Nippon listening on port ${port}`)
  })