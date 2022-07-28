const {Publicacao} = require('../database/models');

let teste = async () => {
    let publicacoes = await Publicacao.findAll();
   console.log(publicacoes.map(p => p.toJSON()));
}

teste()