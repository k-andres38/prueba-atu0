'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tblComentario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // tblComentario.belongsTo(models.tblUsuario,{
      //   foreignKey:'usuId',
      //   target_key:'comUsuId'
      // })
    
        tblComentario.belongsTo(models.tblUsuario,{
          foreignKey:'comUsuId',
         
        })
      
      // tblComentario.belongsTo(models.tblPeticion,{
      //   foreignKey:'petId',
      //   target_key:'comPetId'
      // })

     
        tblComentario.belongsTo(models.tblPeticion,{
          foreignKey:'comPetId',
         
        })
      
    }
  }
  tblComentario.init({
    comId: {
      type: DataTypes.INTEGER(5),
      primaryKey: true,
      autoIncrement: true
    },
    comDes: DataTypes.STRING,
    comEst: DataTypes.TINYINT,
    comPetId: DataTypes.INTEGER,
    comUsuId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tblComentario',
  });
  return tblComentario;
};