'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tblTipoPeticion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      

      tblTipoPeticion.hasMany(models.tblPeticion,{
        foreignKey:'petTipoPetId',
        
      })


     

    }
  }
  tblTipoPeticion.init({
    tipPetId: {
      type: DataTypes.TINYINT(1),
      primaryKey: true,
      autoIncrement: true
    },
    tipPetNom: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tblTipoPeticion',
  });
  return tblTipoPeticion;
};