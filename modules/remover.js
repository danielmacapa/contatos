var prompt = require('prompt-sync')();

remover = () => {
    console.log('Informe o nome');
    var nome = prompt('Nome: ');
    for (var i = 0; i < contatos.length; i++) {
        if (remover === contatos[i].nome) {
          contatos.splice(contatos[i], 1);
        }
      }
    }

module.exports = remover;
