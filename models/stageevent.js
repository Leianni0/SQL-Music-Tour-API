'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StageEvent extends Model {
    static associate(models) {}
  }
  StageEvent.init({
    stage_events_id: DataTypes.INTEGER,
    stage_id: DataTypes.SMALLINT,
    event_id: DataTypes.SMALLINT
  }, {
    sequelize,
    modelName: 'StageEvent',
  });
  return StageEvent;
};