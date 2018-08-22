const routers = require('./routers/')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const express = require('express')

const app = express()
const url = process.env.MONGODB_URI || "mongodb://namtran:112233445566aA@ds219672.mlab.com:19672/mycmtbdb"
const router = express.Router()


try {
    mongoose.connect(url, { useNewUrlParser: true })
} catch (error) {
    console.log(error)
}

let port = 5000 || process.env.PORT

routers(router)
app.use(cors())
app.use(bodyParser.json())
app.use('/api', router)


app.listen(port, () => {
    console.log(`Server is start at port: ${port}`);
});