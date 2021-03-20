require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload');

// app route
const user = require('./routes/user')
// const main = require('./routes/main.js')
// const product = require('./routes/product')

const app = express()
const port = 3001

// parse data
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

// enable files upload
app.use(fileUpload({
    createParentPath: true
}));

// connect to DB
try {
    (async() => {
        await mongoose.connect(`mongodb://localhost:27017/nobars`, { useUnifiedTopology: true });
    })()
} catch(err) {
    console.log(err, 'error')
}

// static folder path
app.use(express.static(__dirname + '/public'));

// app routes
app.use('/user', user)
// app.use('/', main)
// app.use('/product', product)

// start the app
app.listen(process.env.PORT || 3001, () => {
  console.log(`Example app listening at port ${port}`)
})
