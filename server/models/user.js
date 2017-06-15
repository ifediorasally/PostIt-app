module.exports = (sequelize, DataTypes) => {
 let user = sequelize.define('user', {
   Id: {
     type: DataTypes.INTEGER,
     primaryKey: true,
     autoIncrement: true
   },
   FullName: {
     type: DataTypes.STRING,
     allowNull: false,
   },
   Username: {
     type: DataTypes.STRING,
     allowNull: false,
   },
   Email: {
     type: DataTypes.STRING,
     allowNull: false,
     unique:true,
     validate: {
       notEmpty: true
   },
   Password: {
     type: DataTypes.STRING,
     allowNull: false,
     validate: {
       notEmpty: true
   },
 }, {
   classMethods: {
     associate: (models) => {
       // associations can be defined here
       user.belongsTo(models.groups, {
         foreignKey: 'userId',
         as: 'groups',
       });
       user.hasMany(models.messages, {
         foreignKey: 'userId',
         as: 'groups',
       });
     },
   },
 };
 return user;
};