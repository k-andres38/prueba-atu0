'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tblReporte extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // tblReporte.belongsTo(models.tblUsuario,{
      //   foreignKey:'usuId',
      //   target_key:'repUsuId'
      // })
      
        tblReporte.belongsTo(models.tblUsuario,{
          foreignKey:'repUsuId',
         
        })
      


   
     
        tblReporte.belongsTo(models.tblTipoReporte,{
          foreignKey:'repTipRepId',
         
        })
      

    
     
        tblReporte.belongsTo(models.tblPeticion,{
          foreignKey:'repPetId',
          
        })
      
    }
  }
  tblReporte.init({
    repId: {
      type: DataTypes.INTEGER(5),
      primaryKey: true,
      autoIncrement: true
    },
    repEst: DataTypes.TINYINT,
    repDes: DataTypes.STRING,
    repUsuId: DataTypes.INTEGER,
    repTipRepId: DataTypes.INTEGER,
    repPetId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tblReporte',
  });
  return tblReporte;
};