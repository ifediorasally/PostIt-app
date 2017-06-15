module.exports = (sequelize, DataTypes) => {
 let group = sequelize.define('group', {
   Id: {
     type: DataTypes.INTEGER,
     primaryKey: true,
     autoIncrement: true
   },
   messagesId: {
     type: DataTypes.INTEGER,
     allowNull: false,
   },
   user: {
     type: DataTypes.STRING,
     allowNull: false,
   },
   messages: {
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
       group.hasMany(models.users, {
         foreignKey: 'userId',
         as: 'user',
       });
       group.hasMany(models.messages, {
         foreignKey: 'userId',
         as: 'groups',
       });
     },
   },
 });
 return group;
};