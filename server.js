'use strict';

//pull in npm modules
let express = require('express');
let mongoose = require('mongoose');
let exphbs = require('express');

//set our port
let PORT = process.env.PORT || 8080;

//set up express
let app = express();

//pull in our routes
let routes = require('./routes');

//parse request(user input) body into json
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//make public a static folder
app.use(express.static('public'));

//handlebars set up with express
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//make all requests go thru routes
app.use(routes);

//if deployed, use deployed database. Otherwise use local (mongoHeadlines)
let MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/mongoHeadlines'

//connect to mongoDB
mongoose.connect(MONGODB_URI);

//set up listener
app.listen(PORT, () =>{
    console.log('listening on port: ' + PORT)
});