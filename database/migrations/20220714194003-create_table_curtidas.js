module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('curtidas', 
   { 
    id:{
      type: Sequelize.DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    usuarios_id:{
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
    },
    publicacoes_id:{
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
    },
    
  });
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('curtidas');
     
  }
};
