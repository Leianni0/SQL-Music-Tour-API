'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stage extends Model {
    static associate(models) {}
  }
  Stage.init({
    stage_id: DataTypes.INTEGER,
    stage_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Stage',
  });
  return Stage;
};