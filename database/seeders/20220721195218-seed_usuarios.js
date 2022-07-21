const bcrypt = require('bcrypt');

const usuarios =[
  {
    id:1,
    nome: "Nat Flix Cardoso da silva",
    email: "nat@netflix.com",
    senha: bcrypt.hashSync("123456", 10),
    foto: "nat.jpg"
  },
  {
    id:2,
    nome: "Larissa Vitoria Cesar",
    email: "larissa@gmail.com",
    senha: bcrypt.hashSync("123456", 10),
    foto: "lala.jpg"
  },
  {
    id:3,
    nome: "Maju silva",
    email: "majuhs@gmail.com",
    senha: bcrypt.hashSync("123456", 10),
    foto: "mary.jpg"
  }
]

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuarios', usuarios, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});
    
  }
};
