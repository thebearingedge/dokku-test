const express = require('express')

express()
  .use((req, res) => res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Dokku!</title>
      </head>
      <body>
        <h1>Hello Dokku World</h1>
      </body>
    </html>
  `))
  .listen(process.env.PORT || 3000)
