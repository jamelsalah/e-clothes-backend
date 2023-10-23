import Sequelize from "sequelize";
import database from "../db";
const Address = database.define("address", {
  phone_number: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  adress_1: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  adress_2: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  card_1: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  card_2: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});
export default Address;
