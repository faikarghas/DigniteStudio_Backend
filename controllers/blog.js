module.exports = {
    perPage: (req,res) => {
        let sql = 'select * from blog'
        let currentPage = req.params.page
        const db = require('../db');
        db.query(sql, (err, result) => {
            if(err){
                res.json({success:false,message:'gagal'})
            } else {
                let data = result;
                let limitPage = 2;
                function paginate(arr, perpage, page) {
                    return data.slice(limitPage*(currentPage-1), limitPage*currentPage);
                }
                let resultku = paginate()
                res.send(resultku)
            }
        })

    },
    pageOne : (req,res) => {
        let sql = 'select * from blog'
        let currentPage = 1
        const db = require('../db');
        db.query(sql, (err, result) => {
            if(err){
                res.json({success:false,message:'gagal'})
            } else {
                let data = result;
                let limitPage = 2;
                function paginate(arr, perpage, page) {
                    return data.slice(limitPage*(currentPage-1), limitPage*currentPage);
                }
                let resultku = paginate()
                res.send(resultku)
            }
        })
    },
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
    }
}


