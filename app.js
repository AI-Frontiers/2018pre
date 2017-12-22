const express = require('express')
const sassMiddleware = require('node-sass-middleware')
const path = require('path')
const app = express()

app.set('view engine', 'pug')

app.use(
  sassMiddleware({
    src: path.join(__dirname + '/source/scss'),
    dest: path.join(__dirname + '/static/css'),
    debug: true,
    prefix: '/css'
  })
);

app.use(express.static(path.join(__dirname, '/static')))

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
