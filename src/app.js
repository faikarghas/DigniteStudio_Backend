const express           = require('express');
const cors              = require('cors');
const logger            = require('morgan');
const fileUpload        = require('express-fileupload');

const hire              = require('../routes/hire');
const blog              = require('../routes/blog');

const app       = express();


app.use(cors());
app.use(fileUpload());

// cache
var options = {
    etag: false,
    maxAge: '1y',
    setHeaders: function (res, path, stat) {
      res.set('x-timestamp', Date.now())
    }
}
app.use('/images', express.static(__dirname + '/../images',options));


app.use('/api', hire);
app.use('/api', blog);



app.use(logger('dev'))


app.get('/',(req,res)=>{
    res.status(200).send('api dignite studio')
})


module.exports = app
