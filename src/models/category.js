import Sequelize from 'sequelize';
import database from '../db.js';

const Category = database.define('category', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false
    },
    name: {
        type: Sequelize.CHAR(24),
        allowNull: false,
        unique: true
    },
    order: {
        type: Sequelize.INTEGER,
    }
});

Category.associate = function(models) {
    Category.hasMany(models.Product, { foreignKey: 'category_id' });
};

export default Category