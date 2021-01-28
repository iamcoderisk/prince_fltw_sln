var express = require('express');
var router = express.Router();


router.get('/', (req, res, next) => {
     res.send({
        "message": "My Rule-Validation API",
        "status": "success",
        "data": {
            "name": "Prince Darlington",
            "github": "@iamcoderisk",
            "email": "ekeminyd@gmail.com",
            "mobile": "08141261989",
            "twitter" : "@iamcoderisk"
        }
     })
    next()
})



module.exports = router;