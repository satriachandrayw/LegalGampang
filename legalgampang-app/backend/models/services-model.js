const { Sequelize, DataTypes } = require('sequelize'),
        db = require('../database');
        Services = db.define('service', {
            id: {
                type: DataTypes.UUID,
                defaultValue: Sequelize.UUIDV4,
                allowNull: false,
                primaryKey: true
            },
            service_name: {
                type: DataTypes.STRING
            },
            service_description: {
                type: DataTypes.STRING
            },
            service_price: {
                type: DataTypes.STRING
            }    
        },{
        freezeTableName: true
        });

        module.exports = Services;