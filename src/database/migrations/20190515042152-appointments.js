'use strict'
module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('appointments', {
      id: {
        type: 'INTEGER',
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      date: {
        type: 'TIMESTAMP WITH TIME ZONE'
      },
      createdAt: {
        type: 'TIMESTAMP WITH TIME ZONE',
        allowNull: false
      },
      updatedAt: {
        type: 'TIMESTAMP WITH TIME ZONE',
        allowNull: false
      },
      user_id: {
        type: 'INTEGER',
        allowNull: true,
        references: {
          model: 'users',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      provaider_id: {
        type: 'INTEGER',
        allowNull: true,
        references: {
          model: 'users',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }
    })
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('appointments')
  }
}
