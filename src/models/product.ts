import { Sequelize, Model, DataTypes } from "sequelize";
import database from "../db";

class Product extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
  public category_id!: number;
  public category_name!: string;
  public sub_category: string;
  public brand: string;
  public gender: boolean;
  public description!: string;
  public price!: number;
  public promo!: number;
  public thumb_url!: string;
  public images_url: string;
  public sizes!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  
  static associate(models: any) {
    Product.belongsTo(models.Category, {
      foreignKey: 'category_id'
    });
  }
}

Product.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "categories",
        key: "id",
      },
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sub_category: {
      type: DataTypes.STRING,
    },
    brand: {
      type: DataTypes.STRING,
    },
    gender: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    name: {
      type: DataTypes.CHAR(255),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    promo: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    thumb_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    images_url: {
      type: DataTypes.STRING,
    },
    sizes: {
      type: DataTypes.STRING,
    },
  },
    {
      sequelize: database, // conexão do sequelize
      tableName: 'products', // nome da tabela
      modelName: 'Product',
      // timestamps: false,
    }
);

// Product.associate = function (models) {
//   Product.belongsTo(models.Category, { foreignKey: "category_id" });
// };

export default Product;
