'use strict';

const response = require('./res'),
    connection = require('./database'),
    User = require('./models/users-model'),
    Service = require('./models/services-model'),
    Sequelize = require('sequelize'),
    Op = Sequelize.Op;

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
    
    User.findOne({where: {id: req.params.id}})
    .then(rows => {
        response.ok(rows, res)
    })
    .catch(err => console.log(err));
}

exports.createUsers = function(req, res) {

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
            .then(
                response.ok("Berhasil menambahkan user!", res),
                )
            .catch(err => console.log(err));
    }
}


exports.updateUsers = function(req, res) {

    let { user_name, user_pw, user_email, user_nomor_hp } = req.body;
    
    User.update({user_name, 
                user_pw, 
                user_email, 
                user_nomor_hp}, {
        where: {id: req.params.id}
    })
        .then(response.ok("Berhasil update data user!", res))
        .catch(err => console.log(err));
};

exports.deleteUsers = function(req, res) {

    User.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(response.ok("Berhasil menghapus user!", res))
    .catch(err => console.log(err));
}
//User END


//Service START
exports.viewServices = function(req, res) {
    
    Service.findAll()
        .then(rows => {
            //console.log(user)
            response.ok(rows, res)
        })
        .catch(err => console.log(err));
}

exports.findServices = function(req, res) {
    
    Service.findOne({where: {id: req.params.id}})
    .then(rows => {
        response.ok(rows, res)
    })
    .catch(err => console.log(err));
}

exports.createServices = function(req, res) {

    let { service_name, service_description, service_price } = req.body;
    let errors = [];


    //Validasi form kosong
    if(!service_name) {
        error.push({text: 'Masukan nama service!'});
    }

    if(!service_description) {
        error.push({text: 'Masukan deskripsi!'});
    }

    if(!service_price) {
        error.push({text: 'Masukan harga!'});
    }

    if(errors.length>0) {
        errors,
        service_name, 
        service_description, 
        service_price

    } else {
        Service.create({
            service_name, 
            service_description, 
            service_price
        })
            .then(
                response.ok("Berhasil menambahkan service!", res),
                )
            .catch(err => console.log(err));
    }
}


exports.updateServices = function(req, res) {

    let { service_name, service_description, service_price } = req.body;
    
    Service.update({service_name, 
                    service_description, 
                    service_price
                    }, {
                    where: {id: req.params.id}
    })
        .then(response.ok("Berhasil update data service!", res))
        .catch(err => console.log(err));
};

exports.deleteServices = function(req, res) {

    Service.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(response.ok("Berhasil menghapus service!", res))
    .catch(err => console.log(err));
}

/*
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
};*/
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