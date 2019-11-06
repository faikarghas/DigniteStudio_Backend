module.exports = {
    // per page
    getPageBlog: (req,res) => {
        let sql = 'select * from blog ORDER BY created_at DESC'
        let currentPage = req.params.page
        const db = require('../db');
        db.query(sql, (err, result) => {
            if(err){
                res.json({success:false,message:err.message})
            } else {
                let data = result;
                let limitPage = 4;
                function paginate(limit, data, curr) {
                    return data.slice(limit*(currentPage-1), limit*curr);
                }
                let resultku = paginate(limitPage,data,currentPage)
                res.send({currPage:resultku,totalPage:data.length})
            }
        })
    },


    // per page category
    perPageCategory: (req,res) => {
        let sql
        req.params.category !== 'all' ?
        sql = `select * from blog where category = '${req.params.category}' ORDER BY created_at DESC`
        : sql = 'select * from blog ORDER BY created_at DESC'

        let currentPage = req.params.page
        const db = require('../db');
        db.query(sql, (err, result) => {
            if(err){
                res.json({success:false,message:'gagal'})
            } else {
                let data = result;
                let limitPage = 4;
                function paginate(limit, data, curr) {
                    return data.slice(limit*(currentPage-1), limit*curr);
                }
                let resultku = paginate(limitPage,data,currentPage)
                res.send({currPage:resultku,totalPage:data.length})
            }
        })
    },

    // get sesuai slug dan rekomen keep inspired 3 blog

    getByCategoryAndSlug: (req,res) => {
        let sql = `select * from blog where slug = '${req.params.slug}' and category = '${req.params.category}'`
        const db = require('../db');
        db.query(sql, (err, result1) => {
            if(err){
                res.json({success:false,message:err.message})
            } else {
                let sql2 = `select * from blog where category = '${req.params.category}' ORDER BY created_at DESC LIMIT 3`
                db.query(sql2,(err,result2)=>{
                    if (err) {
                        res.json({success:false,message:err.message})
                    } else {
                        res.send({detail:result1,keep:result2})
                    }
                })
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

    getBlogDetail: (req,res) => {
        let sql = `select * from blog where slug = '${req.params.slug}`
        const db = require('../db');
        db.query(sql, (err, result1) => {
            if(err){
                res.json({success:false,message:err.message})
            } else {
                res.send({detail:result1})
            }
        })
    },


}


