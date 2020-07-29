'use strict';

const { GEOGRAPHY } = require('sequelize');

const response = require('./res'),
    connection = require('./database'),
    User = require('./models/users-model'),
    Sequelize = require('sequelize'),
    Op = Sequelize.Op;



/* Query Lama
exports.viewUsers = function(req, res) {
    connection.query('SELECT user_id, concat(user_prefix,"-",user_id) as userID, user_name, user_pw, user_email, user_nomor_hp FROM user', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};*/

/* Query Lama
exports.createUsers = function(req, res) {
    var user_name = req.body.user_name;
    var user_pw = req.body.user_pw;
    var ID = 'USER';
    var user_email = req.body.user_email;
    var user_nomor_hp = req.body.user_nomor_hp;
    
    connection.query('INSERT INTO user (user_name, ID, user_pw, user_email, user_nomor_hp) values (?, ?, ?, ?, ?)',
    [user_name, ID, user_pw, user_email, user_nomor_hp],
    function (error, rows, fields){
        if(error){
            console.log(error);
        }
        else {
            response.ok("Berhasil menambahkan user!", res)
        }
    });
};
*/

/*
exports.findUsers = function(req, res) {
    let id = req.body.id;
    
    connection.query('SELECT * FROM user where id = ?',
    [id],
    function (error, rows, res){
        if(error){
            console.log(error);
        }
        else {
            response.ok(rows, res)
        }
    });
};*/

//User START
exports.viewUsers = function(req, res) {
    
    User.findAll()
        .then(rows => {
            //console.log(user)
            response.ok(rows, res)
        })
        .catch(err => console.log(err));
}

exports.findUsers = function(req, res) {
    
    User.findAll({
        limit: 1,
        where: {
            id: req.params.id
        },
        order: [ ['createdAt', 'DESC']]
    })
    .then(rows => {
        response.ok(rows, res),
        console.log()
    })
    .catch(err => console.log(err));
}

exports.createUsers = function(req, res) {
    /*const data = { user_name: req.body.user_name,
        user_pw: req.body.user_pw,
        user_email: req.body.user_email,
        user_nomor_hp: req.body.user_nomor_hp
    }*/

    let { user_name, user_pw, user_email, user_nomor_hp } = req.body;
    let errors = [];


    //Validasi form kosong
    if(!user_name) {
        error.push({text: 'Masukan user name!'});
    }

    if(!user_pw) {
        error.push({text: 'Masukan password!'});
    }

    if(!user_email) {
        error.push({text: 'Masukan email!'});
    }

    if(!user_nomor_hp) {
        error.push({text: 'Masukan nomor hp!'});
    }

    if(errors.length>0) {
        errors,
        user_name, 
        user_pw, 
        user_email, 
        user_nomor_hp

    } else {
        User.create({
            user_name,
            user_pw,
            user_email,
            user_nomor_hp
        })
            .then(response.ok("Berhasil menambahkan user!", res))
            .catch(err => console.log(err));
    }

    
}


exports.updateUsers = function(req, res) {
    /*var user_id = req.body.user_id;
    var user_name = req.body.user_name;
    var user_pw = req.body.user_pw;
    var user_email = req.body.user_email;
    var user_nomor_hp = req.body.user_nomor_hp;*/

    let { user_name, user_pw, user_email, user_nomor_hp } = req.body;
    
    User.update({user_name, 
                user_pw, 
                user_email, 
                user_nomor_hp}, {
        where: {id: req.params.id}
    })
        .then(response.ok("Berhasil update data user!", res))
        .catch(err => console.log(err));


    /*connection.query('UPDATE user SET user_name = ?, user_pw = ?, user_email = ?, user_nomor_hp = ? WHERE user_id = ?',
    [user_name, user_pw, user_email, user_nomor_hp, user_id],
    function (error, rows, fields){
        if(error){
            console.log(error);
        }
        else {
            response.ok("Berhasil update data user!", res)
        }
    });*/
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