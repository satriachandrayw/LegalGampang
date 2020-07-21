'use strict';

var response = require('./res');
var connection = require('./conn');


//User START
exports.viewUsers = function(req, res) {
    connection.query('SELECT * FROM user', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.findUsers = function(req, res) {
    var user_id = req.body.user_id;
    
    connection.query('SELECT * FROM user where user_id = ?',
    [user_id],
    function (error, rows, fields){
        if(error){
            console.log(error);
        }
        else {
            response.ok(rows, res)
        }
    });
};

exports.createUsers = function(req, res) {
    var user_name = req.body.user_name;
    var user_pw = req.body.user_pw;
    var user_email = req.body.user_email;
    var user_nomor_hp = req.body.user_nomor_hp;
    
    connection.query('INSERT INTO user (user_name, user_pw, user_email, user_nomor_hp) values (?, ?, ?, ?)',
    [user_name, user_pw, user_email, user_nomor_hp],
    function (error, rows, fields){
        if(error){
            console.log(error);
        }
        else {
            response.ok("Berhasil menambahkan user!", res)
        }
    });
};

exports.updateUsers = function(req, res) {
    var user_id = req.body.user_id;
    var user_name = req.body.user_name;
    var user_pw = req.body.user_pw;
    var user_email = req.body.user_email;
    var user_nomor_hp = req.body.user_nomor_hp;
    
    connection.query('UPDATE user SET user_name = ?, user_pw = ?, user_email = ?, user_nomor_hp = ? WHERE user_id = ?',
    [user_name, user_pw, user_email, user_nomor_hp, user_id],
    function (error, rows, fields){
        if(error){
            console.log(error);
        }
        else {
            response.ok("Berhasil update data user!", res)
        }
    });
};
//User END


//Service START
exports.viewServices = function(req, res){
    connection.query('SELECT * FROM service', 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } 
        else {
            response.ok(rows, res)
        }
    });
};

exports.createServices = function(req, res){
    var service_name = req.body.service_name;
    var service_description = req.body.service_description;
    var service_price = req.body.service_price;
    
    connection.query('INSERT INTO service (service_name, service_description, service_price) values (?, ?, ?)',
    [service_name, service_description, service_price],
    function(error, rows, fields){
        if (error){
            console.log(error)
        }
        else {
            response.ok("Berhasil menambahkan service!", res)
        }
    });
};

exports.findServices = function(req, res) {
    var service_id = req.body.service_id;
    
    connection.query('SELECT * FROM user where service_id = ?',
    [service_id],
    function (error, rows, fields){
        if(error){
            console.log(error);
        }
        else {
            response.ok(rows, res)
        }
    });
};

exports.updateServices = function(req, res) {
    var service_id = req.body.service_id;
    var service_name = req.body.service_name;
    var service_description = req.body.service_description;
    var service_price = req.body.service_price;
    
    
    connection.query('UPDATE service SET service_name = ?, service_description = ?, service_price = ? WHERE service_id = ?',
    [service_name, service_description, service_price, service_id],
    function (error, rows, fields){
        if(error){
            console.log(error);
        }
        else {
            response.ok("Berhasil update data service!", res)
        }
    });
};

exports.deleteService = function(req, res) {
    var service_id = req.body.service_id;

    connection.query('DELETE FROM service WHERE service_id = ?',
    [service_id],
    function(error, rows, fields){
        if (error){
            console.log(error)
        }
        else {
            response.ok("Berhasil menghapus data service!", res)
        }
    });
};
//Service END

//Order START
exports.viewOrder = function(req, res){
    connection.query('SELECT * FROM order', 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } 
        else {
            response.ok(rows, res)
        }
    });
};


//Order END


exports.index = function(req, res) {
    response.ok("Hello from the Node JS RESTful side!", res)
};