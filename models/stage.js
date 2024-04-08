'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stage extends Model {
    static associate({ Event, StageEvent, SetTime }) {
      Stage.belongsToMany(Event, {
        foreignKey: "stage_id",
        as: "events",
        through: StageEvent
      })
  }};
  Stage.init({
    stage_id: DataTypes.INTEGER,
    stage_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Stage',
  });
  return Stage;
};