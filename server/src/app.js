 console.log ('hello');
 const express = require('express'); //goes into node modules folder, finds and imports that package, and puts whatever it exports into this const
 const bodyParser = require('body-parser'); //process json data
 const cors = require('cors');
 const morgan = require('morgan');

 const app = express();

 app.use(morgan('combined')); //morgan docs say pass combine string for logs
 app.use(bodyParser.json()); //allow express app to easily parse json requests
 app.use(cors());

 //get, post, put, patch, delete are the main ones you use
//going to it in a chrome browser will do the default get request
 app.get('/status', (req, res) =>{ //just a json object that has message property whose value is hello world
    res.send({
        message: 'hello world!'
    })
 });

 app.listen(process.env.PORT || 8081); //can overwrite port using this.