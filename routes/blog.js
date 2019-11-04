const router = require('express').Router()
const bodyParser = require('body-parser')
const controller = require('../controllers/blog')

router.use(bodyParser.json())

router.get('/blog/:page',controller.getPageBlog)

router.get('/blogCategoryPage/:page/:category',controller.perPageCategory)

router.get('/blogCategoryDetail/:category/:slug',controller.getByCategoryAndSlug)

router.get('/search/:search',controller.search)



module.exports = router;
