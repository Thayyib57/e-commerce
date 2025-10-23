// models/CartItem.js
import { sequelize } from './index.js'; // import the shared instance
import pkg from 'sequelize';
const { DataTypes } = pkg;

export const CartItem = sequelize.define('CartItem', {
  productId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'Products',
      key: 'id'
    }
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  deliveryOptionId: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: 'DeliveryOptions',
      key: 'id'
    }
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
