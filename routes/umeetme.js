const router = require('express').Router()
const bodyParser = require('body-parser')
const controller = require('../controllers/umeetme')

router.use(bodyParser.json())


router.post('/post',controller.post)
router.get('/get',controller.get)



module.exports = router;