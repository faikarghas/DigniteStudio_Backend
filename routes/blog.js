const router = require('express').Router()
const bodyParser = require('body-parser')
const controller = require('../controllers/blog')

router.use(bodyParser.json())

router.get('/blog/:page',controller.perPage)
router.get('/blog1',controller.pageOne)
router.get('/blog',controller.allPage)

router.get('/blogCategoryPerPage/:page/:category',controller.perPageCategory)
router.get('/blogCategory1/:category',controller.pageOneCategory)
router.get('/blogCategory/:category',controller.perCategoryAll)

router.get('/blogCategoryDetail/:category/:slug',controller.getByCategoryAndSlug)
router.get('/blogDetail/:slug',controller.getBySlug)


module.exports = router;
