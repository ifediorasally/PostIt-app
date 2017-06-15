module.exports = {
 up: (queryInterface, Sequelize) => {
   return queryInterface.createTable('User', {
     Id: {
       allowNull: false,
       autoIncrement: true,
       primaryKey: true,
       type: Sequelize.INTEGER
     },
     FullName: {
       type: Sequelize.STRING
     },
     username: {
       type: Sequelize.STRING
     },
     email: {
       type: Sequelize.STRING
     },
     Password: {
       type: Sequelize.STRING
     },
     createdAt: {
       allowNull: false,
       type: Sequelize.DATE
     },
     updatedAt: {
       allowNull: false,
       type: Sequelize.DATE
     },
   });
 },
 down: (queryInterface,Sequelize) => {
   return queryInterface.dropTable('User');
 }
};