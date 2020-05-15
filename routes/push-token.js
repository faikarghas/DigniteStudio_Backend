const router = require('express').Router()
const bodyParser = require('body-parser')
const controller = require('../controllers/push-token')

router.use(bodyParser.json())


router.post('/push-token',controller.push_token)
router.get('/send-pushNotification',controller.send_pushNotification)



module.exports = router;

