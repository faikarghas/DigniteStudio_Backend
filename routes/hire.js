const router            = require('express').Router()
const bodyParser        = require('body-parser');
const controller        = require('../controllers/hire');

router.use(bodyParser.json())

router.post('/posthire', controller.post)


module.exports = router;
