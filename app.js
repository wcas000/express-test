const express = require('express')
const app = express()
const port = 3000
const hdbars = require('express-handlebars')

app.engine('handlebars', hdbars({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/test', (req, res) => {
  res.render('test')
})
app.get('/about', (req, res) => {
  res.render('about')
})
app.get('/portfolio', (req, res) => {
  res.render('portfolio')
})
app.get('/contact', (req, res) => {
  res.render('contact')
})

app.listen(port, () => {
  console.log(`on localhost:${port}`)
})