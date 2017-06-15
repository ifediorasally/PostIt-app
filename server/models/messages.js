module.exports = (sequelize, DataTypes) => {
 let messages = sequelize.define('messages', {
   Id: {
     type: DataTypes.INTEGER,
     primaryKey: true,
     autoIncrement: true
   },
   userId: {
     type: DataTypes.INTEGER,
     allowNull: false,
   },
   user: {
     type: DataTypes.STRING,
     allowNull: false,
   },
   group: {
     type: DataTypes.STRING,
     allowNull: false,
     unique:true,
     validate: {
       notEmpty: true
   },
     }
   },
 }, {
   classMethods: {
     associate: (models) => {
       // associations can be defined here
       messages.belongsTo(models.groups, {
         foreignKey: 'messagesId',
         as: 'groups',
       });
       messages.hasMany(models.user, {
         foreignKey: 'userId',
         as: 'groups',
       });
     },
   },
 });
 return messages;
};