const express = require('express'),
    app = express(),
    port = process.env.PORT || 4000,
    bodyParser = require('body-parser'),
    controller = require('./controller'),
    cors = require('cors'),
    path = require('path');
    //exphbs = require('express-handlebars');
    
//app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
//app.set('view engine', 'handlebars');

app.use(cors());
app.use(bodyParser());    
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./routes');
routes(app);

app.listen(port);
console.log('Successfully running server on port: ' + port);