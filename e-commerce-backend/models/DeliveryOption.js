// models/DeliveryOption.js
import { sequelize } from './index.js';  // import the shared Sequelize instance
import pkg from 'sequelize';
const { DataTypes } = pkg;

export const DeliveryOption = sequelize.define('DeliveryOption', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  deliveryDays: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  priceCents: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE(3)
  },
  updatedAt: {
    type: DataTypes.DATE(3)
  },
}, {
  defaultScope: {
    order: [['createdAt', 'ASC']]
  }
});
