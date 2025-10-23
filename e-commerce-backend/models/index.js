import { Sequelize, DataTypes } from 'sequelize';
import fs from 'fs';

// Detect if we should use RDS
const isUsingRDS = process.env.RDS_HOSTNAME && process.env.RDS_USERNAME && process.env.RDS_PASSWORD;
const dbType = process.env.DB_TYPE || 'mysql';
const defaultPorts = { mysql: 3306, postgres: 5432 };
const defaultPort = defaultPorts[dbType];

export let sequelize;

// Initialize Sequelize
if (isUsingRDS) {
  sequelize = new Sequelize(
    process.env.RDS_DB_NAME,
    process.env.RDS_USERNAME,
    process.env.RDS_PASSWORD,
    {
      host: process.env.RDS_HOSTNAME,
      port: process.env.RDS_PORT || defaultPort,
      dialect: dbType,
      logging: false,
    }
  );
} else {
  sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite',
    logging: false,
  });
}

// Sample User model
export const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Function to sync all models
export async function syncDatabase(force = false) {
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully.');
    await sequelize.sync({ force }); // Set force=true to reset tables
    console.log('All models synchronized.');
  } catch (err) {
    console.error('Database connection or sync failed:', err);
  }
}
