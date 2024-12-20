import DataTypes from 'sequelize';
import sequelize from '../config/database.js';

const Book = sequelize.define('Book', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  autor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  categoria: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  precio: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      min: 0,
    },
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
    },
  },
  precioAnterior: {
    type: DataTypes.FLOAT,
    allowNull: true,
    validate: {
      min: 0,
    },
  },
  active: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: true, 
  },
  descuento: {
    type: DataTypes.FLOAT,
    allowNull: true,
    validate: {
      min: 0,
      max: 100,
    },
  },
  detalle: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  imagen: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      isUrl: true,
    },
  },
  peso: {
    type: DataTypes.INTEGER, 
    allowNull: true,
  },
  largo: {
    type: DataTypes.INTEGER,  
    allowNull: true,
  },
  ancho: {
    type: DataTypes.INTEGER, 
    allowNull: true,
  },
  alto: {
    type: DataTypes.INTEGER,  
    allowNull: true,
  },
}, {
  timestamps: true,  
});

export default Book;

