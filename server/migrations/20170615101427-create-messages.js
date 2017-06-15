module.exports = {
 up: (queryInterface, Sequelize) => {
   return queryInterface.createTable('Messages', {
     Id: {
       allowNull: false,
       autoIncrement: true,
       primaryKey: true,
       type: Sequelize.INTEGER
     },
     userId: {
       type: Sequelize.INTEGER
     },
     user: {
       type: Sequelize.STRING
     },
     group: {
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
   return queryInterface.dropTable('Messages');
 }
};