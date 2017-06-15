module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Group', {
      Id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      messagesId: {
        type: Sequelize.INTEGER
      },
      user: {
        type: Sequelize.STRING
      },
      messages: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
   return queryInterface.dropTable('Group');
  }
};