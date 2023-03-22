'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tblRol extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tblRol.hasOne(models.tblUsuario,{
        foreignKey:'usuRolId',
      })

      // tblRol.associate=(models)=>{
      //   tblRol.hasOne(tblRol.tblUsuario,{
      //     foreignKey:'usuRolId',
      //     as:'tblUsuario'
      //   })
      // }
    }
  }
  tblRol.init({
    rolId: {
      type: DataTypes.INTEGER(5),
      primaryKey: true,
      autoIncrement: true
    },
    rolNom: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tblRol',
  });
  return tblRol;
};