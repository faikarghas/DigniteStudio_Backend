const {
    generateGetUrl,
    generatePutUrl
} = require('../lib/aws');

module.exports = {
    getUrl: (req,res) => {
        const { Key } = req.query;
        // const data = ['ashwork-slider-satu.png','ashwork-slider-dua.png','ashwork-slider-tiga.png']
        let data = []
        generateGetUrl(data).then(getURL => {
            console.log(getURL);
            res.send({getURL:'as'});
        }).catch(err => {
            res.send({getURL:'as'});
            // res.send(err);
        });

    },

}


