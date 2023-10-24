import { Sequelize, Model, DataTypes } from "sequelize";
import database from "../db";

class Category extends Model {
  public id!: number;
  public type!: string;
  public name!: string;
  public order: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  static associate(models: any) {
    Category.hasMany(models.Product, {
      foreignKey: 'category_id'
    });
  }
}

Category.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.CHAR(24),
      allowNull: false,
      unique: true,
    },
    order: {
      type: DataTypes.INTEGER,
    },
  },

  {
    sequelize: database, // conexão do sequelize
    tableName: 'categories', // nome da tabela
    modelName: 'Category',
    // timestamps: false,
  }
);

// Category.associations = function (models) {
//   Category.hasMany(models.Product, { foreignKey: "category_id" });
// };

export default Category;
