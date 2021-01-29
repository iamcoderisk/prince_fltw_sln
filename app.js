const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
var validateRule = require('./routes/validateRule');
require('dotenv').config();

 
const app = express();



app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));

app.get('/', (req, res, next) => {
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


app.use('/validate-rule', validateRule);


app.use(function(err, req, res, next) {
  
  res.status(err.status || 500);
  res.render('error');
});




app.listen(process.env.PORT, () => {
  console.log('Listening on port ' + process.env.PORT);
  console.log('environment ' + process.env.APP_ENV);
});
