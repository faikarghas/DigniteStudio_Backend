const router = require('express').Router()
const bodyParser = require('body-parser')
const controller = require('../controllers/blog')

router.use(bodyParser.json())

router.get('/blog/:page',controller.perPage)
router.get('/blog1',controller.pageOne)
router.get('/blog',controller.allPage)


module.exports = router;
