const { Sequelize, DataTypes } = require('sequelize'),
        db = require('../database');
        User = db.define('user', {
            id: {
                type: DataTypes.UUID,
                defaultValue: Sequelize.UUIDV4,
                allowNull: false,
                primaryKey: true
            },
            user_name: {
                type: DataTypes.STRING
            },
            user_pw: {
                type: DataTypes.STRING
            },
            user_email: {
                type: DataTypes.STRING
            },
            user_nomor_hp: {
                type: DataTypes.INTEGER
            }
        },{
        freezeTableName: true
        });

        module.exports = User;