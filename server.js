const app = require("./index")
require("dotenv").config()
const port = process.env.PORT || 3001

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })