const router            = require('express').Router()
const bodyParser        = require('body-parser');
const controller        = require('../controllers/aws');

router.use(bodyParser.json())

router.get('/getImage', controller.getUrl)


module.exports = router;
