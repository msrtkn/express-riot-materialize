"use strict"
const process = require('process'),
  express = require('express'),
  app = express()

// HTTPリクエストを受け取る部分
app.get('/', (req, res)=> {
  res.send('Hello World!')
})

// サーバーを起動する部分
const server = app.listen(process.argv[2], ()=> {
    const host = server.address().address,
      port = server.address().port
    console.log('Example app listening at http://%s:%s', host, port)
})
