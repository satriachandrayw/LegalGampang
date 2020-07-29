'use strict';

module.exports = function(app) {
    const todoList = require('./controller');

    app.route('/')
        .get(todoList.index);

    app.route('/users')
        .get(todoList.viewUsers);

    app.route('/users')
        .post(todoList.createUsers);
        
    app.route('/users/update/:id')
        .put(todoList.updateUsers);
    
    app.route('/users/:id')
        .get(todoList.findUsers);
        
    app.route('/services')
        .post(todoList.createServices);

    app.route('/services')
        .get(todoList.viewServices);
};