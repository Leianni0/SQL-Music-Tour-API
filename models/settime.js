'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SetTime extends Model {
    static associate({ Band, Event, Stage }) {
      SetTime.belongsTo(Band, {
        foreignKey: "band_id",
        as: "band"
      })
  }};
  SetTime.init({
    set_time_id: DataTypes.INTEGER,
    event_id: DataTypes.SMALLINT,
    stage_id: DataTypes.SMALLINT,
    band_id: DataTypes.SMALLINT,
    start_time: DataTypes.DATE,
    end_time: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'SetTime',
  });
  return SetTime;
};