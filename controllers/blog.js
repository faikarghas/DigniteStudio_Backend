module.exports = {
    // per page
    perPage: (req,res) => {
        let sql = 'select * from blog'
        let currentPage = req.params.page
        const db = require('../db');
        db.query(sql, (err, result) => {
            if(err){
                res.json({success:false,message:'gagal'})
            } else {
                let data = result;
                let limitPage = 4;
                function paginate(arr, perpage, page) {
                    return data.slice(limitPage*(currentPage-1), limitPage*currentPage);
                }
                let resultku = paginate()
                res.send(resultku)
            }
        })
    },
    // page 1
    pageOne : (req,res) => {
        let sql = 'select * from blog'
        let currentPage = 1
        const db = require('../db');
        db.query(sql, (err, result) => {
            if(err){
                res.json({success:false,message:'gagal'})
            } else {
                let data = result;
                let limitPage = 4;
                function paginate(arr, perpage, page) {
                    return data.slice(limitPage*(currentPage-1), limitPage*currentPage);
                }
                let resultku = paginate()
                res.send(resultku)
            }
        })
    },
    // semua page
    allPage : (req,res) => {
        let sql = 'select * from blog'
        const db = require('../db');
        db.query(sql, (err, result) => {
            if(err){
                res.json({success:false,message:'gagal'})
            } else {
                res.send(result)
            }
        })
    },
    // semua page per category
    perCategoryAll : (req,res) => {
        let sql = `select * from blog where category = '${req.params.category}'`
        console.log(req.params.category);
        const db = require('../db')
        db.query(sql, (err,result) => {
            if(err){
                res.json({success:false,message:'gagal'})
            } else {
                res.send(result)
            }
        })
    },
    // page 1 category
    pageOneCategory : (req,res) => {
        let sql = `select * from blog where category = '${req.params.category}'`
        let currentPage = 1
        const db = require('../db');
        db.query(sql, (err, result) => {
            if(err){
                res.json({success:false,message:'gagal'})
            } else {
                let data = result;
                let limitPage = 4;
                function paginate(arr, perpage, page) {
                    return data.slice(limitPage*(currentPage-1), limitPage*currentPage);
                }
                let resultku = paginate()
                res.send(resultku)
            }
        })
    },
    // per page category
    perPageCategory: (req,res) => {
        let sql = `select * from blog where category = '${req.params.category}'`
        let currentPage = req.params.page
        const db = require('../db');
        db.query(sql, (err, result) => {
            if(err){
                res.json({success:false,message:'gagal'})
            } else {
                let data = result;
                let limitPage = 4;
                function paginate(arr, perpage, page) {
                    return data.slice(limitPage*(currentPage-1), limitPage*currentPage);
                }
                let resultku = paginate()
                res.send(resultku)
            }
        })
    },

    // get sesuai slug

    getBySlug: (req,res) => {
        let sql = `select * from blog where slug = '${req.params.slug}'`
        const db = require('../db');
        db.query(sql, (err, result) => {
            if(err){
                res.json({success:false,message:'gagal'})
            } else {
                res.send(result)
            }
        })
    },

    getByCategoryAndSlug: (req,res) => {
        let sql = `select * from blog where slug = '${req.params.slug}' and category = '${req.params.category}'`
        const db = require('../db');
        db.query(sql, (err, result) => {
            if(err){
                res.json({success:false,message:'gagal'})
            } else {
                res.send(result)
            }
        })
    },

    search: (req,res) => {
        let sql = `select * from blog where title LIKE '%${req.params.search}%'`
        const db = require('../db');
        db.query(sql, (err, result) => {
            if(err){
                res.json({success:false,message:'gagal'})
            } else {
                res.send(result)
            }
        })
    },
}


