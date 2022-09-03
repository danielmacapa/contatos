const prompt = require("prompt-sync")({ sigint: true });

const remover = (contatos) => {
  console.log('Informe o nome');
  const nome = prompt('Nome: ');
  let lidos = true
  for (var i = 0; i < contatos.length; i++) {
      if (nome === contatos[i].nome) {
          contatos.splice(i, 1);
          lidos = false
      }
  }

  if (lidos) {
      console.log("\n\nNão encontrado!\n\n")
  }

  listar(contatos)
}

module.exports = remover;
