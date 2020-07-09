var nodemailer = require('nodemailer');
require('dotenv').config();

module.exports = {
    post : (req, res) => {
        let data = {
            name:req.body.name,
            email:req.body.email,
            companyName:req.body.companyName,
            phoneNumber:req.body.phoneNumber,
            message: req.body.message,
        }

        let sql2 = 'insert into hireus set ?';
        const db = require('../db');
        db.query(sql2, data, (err, result) => {
            if(err){
                console.log(err);
                res.json({success:false,message:'gagal post'})
            } else {
                console.log(process.env.UEMAIL,process.env.PEMAIL);
                var transporter = nodemailer.createTransport({
                    host: 'smtp.gmail.com',
					port: 465,
					secure: true,
					pool:true,
                    auth: {
                            user: 'bsdcommercial.bsd@gmail.com',
                            pass:  'commercialbsd'
                       }
                });
                const mailOptions = {
                    from: 'dignite studio 👻" dignitestudio@gmail.com', // sender address
                    // to: 'dignitestudio@gmail.com, mayestaarientasya193@gmail.com, ghassanfaikar1@gmail.com', // list of receivers
                    to: 'ghassanfaikar1@gmail.com', // list of receivers
                    subject: 'Message', // Subject line
                    html:   `
                            <h3>Profile :</h3>
                            <p style="margin:0;">${req.body.name}</p> <br/>
                            <p style="margin:0;">${req.body.email}</p> <br/>
                            <p style="margin:0;">${req.body.companyName}</p> <br/>
                            <p style="margin:0;">${req.body.phoneNumber}</p> <br/>
                            <h3>Message :</h3>
                            <p>${req.body.message}</p>
                            `,
                };
                transporter.sendMail(mailOptions, function (err, info) {
                    if(err){
                        console.log(err)
                        res.send(err)
                    }else {
                        console.log(info);
                        res.send(info)
                    }
                    res.status(201).send(err,info)
                });

            }
        })

    },
}