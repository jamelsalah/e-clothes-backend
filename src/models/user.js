import Sequelize from 'sequelize';
import database from '../db.js'
 
const User = database.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.CHAR(32),
        allowNull: false
    },
    phone_number: {
        type: Sequelize.STRING,
        allowNull: false
    },
    adress_1: {
        type: Sequelize.STRING,
        allowNull: true
    },
    adress_2: {
        type: Sequelize.STRING,
        allowNull: true
    },
    card_1: {
        type: Sequelize.STRING,
        allowNull: true
    },
    card_2: {
        type: Sequelize.STRING,
        allowNull: true
    }
});

export default User;