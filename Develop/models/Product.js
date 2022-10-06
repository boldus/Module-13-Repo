// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
const { Model, DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require('../config/connection');
const sequelize = require("../config/connection");

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}
@@ -13,33 +13,38 @@ Product.init(
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull:false
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true
      }
        isNumeric: true,
      },
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "category",
        key: "id",
      },
    },


  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
    modelName: "product",
  }
);

module.exports = Product;