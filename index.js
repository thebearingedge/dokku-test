const express = require('express')

express()
  .use((req, res) => res.send('<h1>Hello World</h1>'))
  .listen(process.env.PORT || 3000)
