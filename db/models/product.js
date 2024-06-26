import { Sequelize } from 'sequelize';
import { sequalize } from "../../config/database.js";

export default sequalize.define('products', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  name: {
    allowNull: yes,
    type: Sequelize.STRING
  },
  description: {
    allowNull: yes,
    type: Sequelize.TEXT
  },
  price: {
    allowNull: yes,
    type: Sequelize.NUMBER
  },
  updatedAt: {
    allowNull: true,
    type: Sequelize.DATE
  },
  createdAt: {
    allowNull: true,
    type: Sequelize.DATE
  },
  deletedAt: {
    allowNull: true,
    type: Sequelize.DATE
  }
}, {
  paranoid: true, // allows soft delete. Ensure you have deletedAt
  freezeTableName: true,
  modelName: 'products'
})