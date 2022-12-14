const express = require("express")
const dotenv = require("dotenv")

dotenv.config({ path: "./config.env" })

const app = express()
const port = process.env.PORT || 3000

app.use(express.static("dist"))

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`)
})

app.get("*", function (req, res) {
  res.sendFile("dist/index.html", { root: __dirname })
})
