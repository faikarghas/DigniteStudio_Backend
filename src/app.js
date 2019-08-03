const express           = require('express');
const cors              = require('cors');
const logger            = require('morgan');
const fileUpload        = require('express-fileupload');

const hire              = require('../routes/hire');
const blog              = require('../routes/blog');

const app       = express();


app.use(cors());
app.use(fileUpload());


app.use('/images', express.static(__dirname + '/../images'));

app.use('/api', hire);
app.use('/api', blog);



app.use(logger('dev'))


app.get('/',(req,res)=>{
    res.status(200).send('api dignite studio')
})


module.exports = app
