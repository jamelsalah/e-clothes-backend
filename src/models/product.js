import Sequelize from 'sequelize';
import database from '../db.js'
 
const Product = database.define('product', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    category_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'categories',
          key: 'id'
        }
    },
    category_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sub_category: {
        type: Sequelize.STRING,
    },
    brand: {
        type: Sequelize.STRING,
    },
    gender: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    name: {
        type: Sequelize.CHAR(255),
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    promo: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    thumb_url: {
        type: Sequelize.STRING,
        allowNull: false
    },
    images_url: {
        type: Sequelize.STRING,
    },
    sizes: {
        type: Sequelize.STRING,
    }

});

Product.associate = function(models) {
    Product.belongsTo(models.Category, { foreignKey: 'category_id' });
};

export default Product;