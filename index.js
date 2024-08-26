const express = require('express')
const app = express();
const port = 3000

app.get("/route-hander", function(req, res) {
  res.json({
    name: 'John Doe',
    age: 21
  })
})

app.post("/conversations", function(req, res) {
  res.send({
    msg: "2 + 2 = 4"
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})