require('dotenv').config();

module.exports = {
    post : (req, res) => {
        let data = {
            embed:req.body.embed,
        }

        let sql = 'select * from umeetme where id = 1';
        const db = require('../db');
        db.query(sql, data, (err, result) => {
            if(err){
                console.log(err);
            } else {
                // cek jika data sudah ada
                let status = result[0].embed.length

                if (status > 1) {
                    let sqlUpdate = `update umeetme set ? where id = 1`
                    db.query(sqlUpdate,data,(err,result)=>{
                        if (err) {
                            console.log(err);
                            res.json({success:false,message:'gagal update'})
                        } else {
                            res.status(201).send(err)
                        }
                    })
                } else {
                    let sqlInsert = `insert into umeetme set ?`
                    db.query(sqlInsert,data,(err,result)=>{
                        if (err) {
                            console.log(err);
                            res.json({success:false,message:'gagal post'})
                        } else {
                            res.status(201).send(err)
                        }
                    })
                }
            }
        })
    },

    get : (req, res) => {
        let sql = 'select * from umeetme';
        const db = require('../db');
        db.query(sql, (err, result) => {
            if(err){
                console.log(err);
                res.json({success:false,message:'gagal post'})
            } else {
                res.status(201).send(result)

            }
        })
    },
}