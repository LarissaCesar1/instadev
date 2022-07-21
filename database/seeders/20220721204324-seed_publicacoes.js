const publicacoes = [
  {
    id:1,
    usuarios_id:2,
    texto: "lari ama praia",
    imagem: "larinapraia.jpg"
  },
  {
    id:2,
    usuarios_id:3,
    texto: "Maju fez 18",
    imagem: "maioridadepenal.jpg"
  },
  {
    id:3,
    usuarios_id:1,
    texto: "Nat e gustavo",
    imagem: "oamoelindo.jpg"
  },

]

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Publicacoes', publicacoes, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('publicacoes', null, {});
  
  }
};
