import { Sequelize, Model, DataTypes } from "sequelize";
import database from "../db";

class User extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.CHAR(32),
      allowNull: false,
    }
  },

  {
    sequelize: database, // conexão do sequelize
    tableName: 'users', // nome da tabela
  }
)

export default User;
